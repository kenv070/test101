
const loginForm = document.getElementById('loginForm');
const messageElement = document.getElementById('message');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const userId = document.getElementById('userId').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!userId || !password) {
        displayMessage('Both fields are required.', 'error');
        return;
    }

    if (password.length < 8) {
        displayMessage('Password must be at least 8 characters long.', 'error');
        return;
    }

    const userData = {
        userId,
        password: btoa(password) 
    };
    localStorage.setItem('userCredentials', JSON.stringify(userData));

    displayMessage('Credentials saved successfully!', 'success');

    loginForm.reset();
});

function displayMessage(message, type) {
    messageElement.textContent = message;
    messageElement.style.color = type === 'success' ? 'green' : 'red';
}

(function loadStoredCredentials() {
    const storedData = localStorage.getItem('userCredentials');
    if (storedData) {
        const { userId } = JSON.parse(storedData);
        displayMessage(`Welcome back, ${userId}!`, 'success');
    }
})();
