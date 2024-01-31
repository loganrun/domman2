const registrationForm = document.getElementById("registration");
const email = registrationForm.email.value;
//console.log(email);
const username = registrationForm.username.value;
//console.log(username);
const password = registrationForm.password.value;
const passwordCheck = registrationForm.passwordCheck.value;
const login = document.getElementById("login");
const username2 = login.username.value;
const password2 = login.password.value;


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
  //login username  and password
  if (username2.trim() === "") {
    alert("Username cannot be blank.");
  }
  if (password2.trim() === "") {
    alert("Password cannot be blank.");
  }
    e.preventDefault();

});

