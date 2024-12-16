// Advanced JavaScript for Credential Form

// Handle form submission
const loginForm = document.getElementById('loginForm');
const messageElement = document.getElementById('message');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Fetch user input values
    const userId = document.getElementById('userId').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validation rules
    if (!userId || !password) {
        displayMessage('Both fields are required.', 'error');
        return;
    }

    if (password.length < 8) {
        displayMessage('Password must be at least 8 characters long.', 'error');
        return;
    }

    // Save data to localStorage
    const userData = {
        userId,
        password: btoa(password) // Basic encoding for passwords (not secure for real-world use)
    };
    localStorage.setItem('userCredentials', JSON.stringify(userData));

    // Display success message
    displayMessage('Credentials saved successfully!', 'success');

    // Clear the form
    loginForm.reset();
});

// Utility function to display messages
function displayMessage(message, type) {
    messageElement.textContent = message;
    messageElement.style.color = type === 'success' ? 'green' : 'red';
}

// Check if credentials exist in localStorage
(function loadStoredCredentials() {
    const storedData = localStorage.getItem('userCredentials');
    if (storedData) {
        const { userId } = JSON.parse(storedData);
        displayMessage(`Welcome back, ${userId}!`, 'success');
    }
})();
