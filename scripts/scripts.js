document.getElementById('sign-in-form').addEventListener('submit', (event) => {
    event.preventDefault();

    
});

// let signinform = document.getElementById('sign-in-submit').addEventListener('click', SignIn);

// function SignIn(e) {
//     e.preventDefault();
//     const email = signinemail.value;
//     const password = signinpassword.value;
  
//     // Create the 'credentials' object
//     const credentials = {
//       email: email,
//       password: password
//     };
  
//     // Validate the email and password
//     if (validateEmail(email) && validatePassword(password)) {
//       firebase
//         .auth()
//         .signInWithEmailAndPassword(credentials.email, credentials.password)
//         .then(function(userCredential) {
//           // Signed in
//           var user = userCredential.user;
//           console.log("User created successfully", user);
//           signupform.reset();
//           window.location.href = "index.html";
//         })
//         .catch(function(error) {
//           // Handle Errors here.
//           var errorCode = error.code;
//           var errorMessage = error.message;
//           console.log("Error creating user", errorCode, errorMessage);
//         });
//     } else {
//       alert("Please enter a valid email and password.");
//     }
//   }