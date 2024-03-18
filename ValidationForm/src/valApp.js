document.addEventListener('DOMContentLoaded', function() {
    const valForm = document.getElementById('val-form');
    const error = document.getElementById('error');

    //
    valForm.addEventListener('submit', (e) => {
        const fname = document.getElementById('fname').value;
        const lname = document.getElementById('lname').value;
        const address = document.getElementById('address').value;
        const email = document.getElementById('email').value;
        const pw = document.getElementById('pw').value;

        // Information criteria
        let messages = [];
        if (!fname) {
            messages.push('First name is required.');
        }

        if (!lname) {
            messages.push('Last name is required.');
        }

        if (!address) {
            messages.push('Address is required.');
        }

        if (email && !validateEmail(email)) {
            messages.push('Enter a valid email address.');
        }

        if (!email) {
            messages.push('Email is required.');
        }

        if (!pw) {
            messages.push('Password is required.');
        }

        if (pw && pw.length <= 4) {
            messages.push('Password must be longer than 4 characters.');
        }

        // Displays all errors 
        if (messages.length > 0) {
            e.preventDefault();
            error.innerText = messages.join('\n');
        }
    });

    // Regex function to validate emails (correct format)
    function validateEmail(email) {
        const email_reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return email_reg.test(String(email).toLowerCase());
    }
});
