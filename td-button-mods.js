// Function to check if we're on a TeamDynamix service details page
function isTDServiceDetailsPage() {
    return (
        // Check for TeamDynamix service detail URL pattern
        window.location.href.includes('/TDClient') &&
        window.location.href.includes('/Portal/Requests/ServiceDet') &&
        // Verify we're on a service page by checking for common TD elements
        document.querySelector('.DetailAction') !== null
    );
}

// Only run on service detail pages
if (isTDServiceDetailsPage()) {
    // Create a script element to inject our styles
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
        /* Special styling for Request Service button in TeamDynamix */
        a[href*="NewForm"].DetailAction,
        a[href*="TicketRequests/NewForm"].DetailAction {
            background-color: #4CAF50 !important;
            font-weight: bold !important;
            border-radius: 4px !important;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1) !important;
        }

        a[href*="NewForm"].DetailAction:hover,
        a[href*="TicketRequests/NewForm"].DetailAction:hover {
            background-color: #45a049 !important;
            box-shadow: 0 3px 6px rgba(0,0,0,0.15) !important;
        }

        /* Hide specific TD buttons */
        #lnkShareArticle,
        button[data-target="#divShareModal"],
        #btnAddToFavorites,
        #ctl00_ctl00_cpContent_cpContent_UpdatePanel2,
        .DetailAction[onclick*="ToggleFavorite"] {
            display: none !important;
        }
    `;
    document.head.appendChild(styleSheet);

    // Function to modify TeamDynamix buttons
    function modifyTDButtons() {
        // Hide Share button (TD specific selectors)
        const shareButton = document.querySelector('#lnkShareArticle, button[data-target="#divShareModal"]');
        if (shareButton) {
            shareButton.style.display = 'none';
            // Also hide any parent spans that TD might use
            const parentSpan = shareButton.closest('span');
            if (parentSpan) parentSpan.style.display = 'none';
        }

        // Hide Favorites button (TD specific selectors)
        const favButton = document.querySelector('#btnAddToFavorites, .DetailAction[onclick*="ToggleFavorite"]');
        if (favButton) {
            favButton.style.display = 'none';
            // Also hide the UpdatePanel that TD uses for favorites
            const favPanel = document.querySelector('#ctl00_ctl00_cpContent_cpContent_UpdatePanel2');
            if (favPanel) favPanel.style.display = 'none';
        }
    }

    // Initial run
    modifyTDButtons();

    // Handle TD's dynamic content loading
    if (typeof Sys !== 'undefined' && Sys.WebForms) {
        Sys.WebForms.PageRequestManager.getInstance().add_endRequest(modifyTDButtons);
    }

    // Backup mutation observer for other dynamic changes
    const observer = new MutationObserver(modifyTDButtons);
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}
