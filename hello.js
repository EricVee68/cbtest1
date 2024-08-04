// This function will be executed when the window is fully loaded
window.onload = function() {
    // Create the main chatbot container
    var chatContainer = document.createElement("div");
    chatContainer.style.position = "fixed";
    chatContainer.style.right = "0";
    chatContainer.style.bottom = "0";
    chatContainer.style.width = "300px";
    chatContainer.style.backgroundColor = "#f8f9fa";
    chatContainer.style.border = "1px solid #ccc";
    chatContainer.style.borderRadius = "5px";
    chatContainer.style.padding = "10px";
    chatContainer.style.margin = "20px";
    chatContainer.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";

    // Create the message input field
    var inputField = document.createElement("input");
    inputField.type = "text";
    inputField.placeholder = "Say something...";
    inputField.style.width = "calc(100% - 22px)"; // Full width minus padding
    inputField.style.marginBottom = "10px";
    inputField.style.padding = "5px";

    // Create the send button
    var sendButton = document.createElement("button");
    sendButton.textContent = "Send";
    sendButton.style.width = "100%";
    sendButton.style.padding = "5px";
    sendButton.style.borderRadius = "5px";
    sendButton.style.border = "none";
    sendButton.style.backgroundColor = "#007bff";
    sendButton.style.color = "white";
    sendButton.style.cursor = "pointer";

    // Create a container for chat responses
    var responseContainer = document.createElement("div");
    responseContainer.style.padding = "10px";
    responseContainer.style.marginTop = "10px";
    responseContainer.style.backgroundColor = "#e9ecef";
    responseContainer.style.borderRadius = "5px";
    responseContainer.style.minHeight = "50px";

    // Append elements to the chat container
    chatContainer.appendChild(inputField);
    chatContainer.appendChild(sendButton);
    chatContainer.appendChild(responseContainer);

    // Append the chat container to the body
    document.body.appendChild(chatContainer);

    // Add an event listener to the send button
    sendButton.onclick = function() {
        var userInput = inputField.value.trim();
        var responseText = "I didn't understand that.";

        // Simple response logic
        if (userInput.toLowerCase() === "hello") {
            responseText = "Hello there!";
        } else if (userInput.toLowerCase() === "how are you?") {
            responseText = "I'm a script, so I'm always okay!";
        }

        // Display the response in the response container
        responseContainer.textContent = responseText;

        // Clear the input field
        inputField.value = "";
    };
};
