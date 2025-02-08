// Toggle between Sign In and Sign Up
function toggleForm(form) {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'none';
    
    // Show the selected form
    if (form === 'login') {
        document.getElementById('login-form').style.display = 'block';
    } else if (form === 'signup') {
        document.getElementById('signup-form').style.display = 'block';
    }

    document.querySelectorAll('.tabs button').forEach(btn => btn.classList.remove('active'));
    document.getElementById(form).classList.add('active');

    // Update URL
    window.history.pushState({}, '', '?form=' + form);
}

//Toggle Password Visibility
const togglePasswordButtons = document.querySelectorAll('.togglePassword');

togglePasswordButtons.forEach((button) => {
    button.addEventListener('click', function () {
        const passwordInput = button.previousElementSibling;
        const togglePasswordIcon = button.querySelector('i');

        // Toggle password visibility
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text'; // Show the password
            togglePasswordIcon.classList.remove('fa-eye'); // Change to eye-slash
            togglePasswordIcon.classList.add('fa-eye-slash');
        } else {
            passwordInput.type = 'password'; // Hide the password
            togglePasswordIcon.classList.remove('fa-eye-slash'); // Change to eye
            togglePasswordIcon.classList.add('fa-eye');
        }
    });
});

//Continue as Guest
function continueAsGuest() {
    localStorage.setItem('guestSession', 'true');
    window.location.href = 'welcome.php';
}



