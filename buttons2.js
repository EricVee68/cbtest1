// Create a script element to inject our styles
const styleSheet = document.createElement("style");
styleSheet.textContent = `
    /* Base button styles */
    .DetailAction {
        background-color: #304B55 !important;
        color: white !important;
        border: none !important;
        padding: 8px 16px !important;
        margin-bottom: 10px !important;
        width: 100% !important;
        text-align: left !important;
        transition: background-color 0.3s !important;
    }

    .DetailAction:hover {
        background-color: #1a2930 !important;
        text-decoration: none !important;
    }

    /* Special styling for Request Service button */
    a[href*="NewForm"].DetailAction {
        background-color: #4CAF50 !important;
        font-weight: bold !important;
        border-radius: 4px !important;
    }

    a[href*="NewForm"].DetailAction:hover {
        background-color: #45a049 !important;
    }

    /* Hide only Share and Add to Favorites buttons */
    #lnkShareArticle,
    button[data-target="#divShareModal"],
    #btnAddToFavorites,
    .DetailAction[onclick*="ToggleFavorite"] {
        display: none !important;
    }
`;
document.head.appendChild(styleSheet);

// Function to modify the buttons
function modifyButtons() {
    // Hide Share button
    const shareButton = document.querySelector('#lnkShareArticle');
    if (shareButton) shareButton.style.display = 'none';

    // Hide Add to Favorites button
    const favButton = document.querySelector('#btnAddToFavorites');
    if (favButton) favButton.style.display = 'none';
}

// Run immediately
modifyButtons();

// Run after a short delay to catch any late-loading elements
setTimeout(modifyButtons, 500);

// Create a mutation observer to handle dynamically added buttons
const observer = new MutationObserver(modifyButtons);
observer.observe(document.body, {
    childList: true,
    subtree: true
});
