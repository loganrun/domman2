const form = document.getElementById("registration")
const name =  document.getElementsByName("username").value    //   form.elements["username"];
//console.log(name)
const email = document.getElementsByName("email");
const password = document.getElementsByName("password");
const checkPassword = document.getElementsByName("passwordCheck");
const terms = document.getElementsByName("terms");

form.addEventListener("submit", formValidator);


function formValidator(e){
    e.preventDefault()
    console.log(e)

    const nameVal = validateName();
    if (nameVal === false) {
      evt.returnValue = false;
      return false;
    }

    function validateName() {
        if (name.value === "") {
          alert("Please provide a name.");
          name.focus();
          return false;
        }
        return name.value;
      }
      
  

}