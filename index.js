const registrationForm = document.getElementById("registration");
const email = registrationForm.email.value;
//console.log(email);
const username = registrationForm.username.value;
//console.log(username);
const password = registrationForm.password.value;
const passwordCheck = registrationForm.passwordCheck.value;

registrationForm.terms.addEventListener("change", () => {
    if (!isChecked(registrationForm.terms)) {
      alert("Please agree to the Terms of Use."); 
    } 
  });

  function isChecked(field) {
    return field.checked;
  }


registrationForm.addEventListener("submit", (e)=>{

    
//Check name
    if (username.trim() === "") {
      errorMessage = "Username cannot be blank.";
    } else {
      if (username.length < 4) {
        alert("Username must be at least four characters long.");
      } else {
        const uniqueChars = new Set(username.split("")).size;
        if (uniqueChars < 2) {
          alert("Username must contain at least two unique characters.");
        } else {
          const allowedChars = /^[a-zA-Z0-9]+$/;
          if (!allowedChars.test(username)) {
            alert("Username cannot contain special characters or whitespace.");
          }
        }
      }
    }
//check email
    if (email.trim() === "") {
      alert("Email address cannot be blank.");
    } else {
      const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
      }else {
        if (email.endsWith("@example.com")) {
          alert("Email addresses from @example.com are not allowed.");
        }
    }
    }

//Check password
if (password.length < 12) {
    alert("Password must be at least 12 characters long.");
  } else {
    if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
      alert("Password must contain at least one uppercase and one lowercase letter.");
    } else {
      if (!/\d/.test(password)) {
        alert("Password must contain at least one number.");
      } else {
        if (!/\W/.test(password)) {
          alert("Password must contain at least one special character.");
        } else {
          if (/password/i.test(password)) {
            alert("Password cannot contain the word 'password'.");
          } else {
            if (username && password.toLowerCase().includes(username.toLowerCase())) {
              alert("Password cannot contain the username.");
            }
            // Check password matches
            if (password!== passwordCheck) {
              alert("Passwords do not match.");
            }
          }
        }
      }
    }
  }
    e.preventDefault();

});

// registrationForm.username.addEventListener("input", () => {
//     checkUsername();
// });
// registrationForm.email.addEventListener("input", () => {
//     checkEmail();
// });





// function formValidator(e){
//     // e.preventDefault();
//     // if (!checkUsername() || !checkEmail() || !isChecked(registrationForm.terms)) {
//     //     e.preventDefault(); 
//     // }
//     //console.log(e)

//     const nameVal = checkUsername();
//     // if (nameVal === false) {
//     //   evt.returnValue = false;
//     //   return false;
//     // }

//     // function validateName() {
//     //     if (name.value === "") {
//     //       alert("Please provide a name.");
//     //       name.focus();
//     //       return false;
//     //     }
//     //     return name.value;
//     //   }
      
  

// }

// function checkUsername() {
    
//     const username = registrationForm.username.value;
//     console.log(username);
//     let errorMessage = "";

//     if (username.trim() === "") {
//       errorMessage = "Username cannot be blank.";
//     } else {
//       if (username.length < 4) {
//         alert("Username must be at least four characters long.");
//       } else {
//         const uniqueChars = new Set(username.split("")).size;
//         if (uniqueChars < 2) {
//           errorMessage = "Username must contain at least two unique characters.";
//         } else {
//           const allowedChars = /^[a-zA-Z0-9]+$/;
//           if (!allowedChars.test(username)) {
//             errorMessage = "Username cannot contain special characters or whitespace.";
//           }
//         }
//       }
//     }
//     errorDisplay.textContent = errorMessage;
//   return errorMessage === "";
// }

// function checkEmail() {
//     const email = registrationForm.email.value;
//     console.log(email);
//     let errorMessage = "";
  
//     if (email.trim() === "") {
//       errorMessage = "Email address cannot be blank.";
//     } else {
//       const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//       if (!emailRegex.test(email)) {
//         errorMessage = "Please enter a valid email address.";
//       }else {
//         // Check for excluded domain
//         if (email.endsWith("@example.com")) {
//           errorMessage = "Email addresses from @example.com are not allowed.";
//         }
//     }
//     }
//     errorDisplay.textContent = errorMessage;
//     return errorMessage === ""; 
//   }
  
