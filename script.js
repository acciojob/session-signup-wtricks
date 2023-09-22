//your JS code here. If required.
 document.getElementById("submit").addEventListener("click", function () {
            // Get input values
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;
            var confirmPassword = document.getElementById("confirm-password").value;

            // Check if passwords match
            if (password === confirmPassword) {
                // Save data in session storage
                sessionStorage.setItem("name", name);
                sessionStorage.setItem("email", email);
                sessionStorage.setItem("password", password);

                // Show success alert
                alert("Sign up successful!");
            } else {
                // Show error alert
                alert("Passwords do not match");
            }
        });