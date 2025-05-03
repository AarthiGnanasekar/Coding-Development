let nameBtn = document.getElementById("name")
let email = document.getElementById("email")
let password = document.getElementById("password")
let submit = document.getElementById("submit")
let checkBox = document.getElementById("checkbox")
let nameError=document.getElementById("name-error")
let emailError=document.getElementById("email-error")
let passwordError=document.getElementById("password-error")
let form=document.getElementById("form")


nameBtn.addEventListener("input", function () {
    if (nameBtn.value.trim() == "") {
        nameError.textContent = "Name is required"
    }
    else {
        nameError.textContent = ""
    }
   verifyInputs();
})

email.addEventListener("input", function () {
    if (email.value.includes("@") && email.value.includes(".com")) {
     emailError.textContent = ""
    }
    else {
      emailError.textContent = "Enter a Valid Email Adress"
    }
    verifyInputs();
})

password.addEventListener("input", function () {
    if (password.value.length < 8) {
       passwordError.textContent = "Password must conatin atleast 8 characters"
    }

    else {
       passwordError.textContent = ""
    }
    verifyInputs();
})
checkBox.addEventListener("change", verifyInputs);


function verifyInputs() {
    if (nameBtn.value.trim() !== "" &&
        email.value.includes("@") &&
        email.value.includes(".com") &&
        password.value.length >= 8 &&
        checkBox.checked
    ) {
        submit.disabled = false;
    }
    else {
        submit.disabled = true;
    }
}

form.addEventListener("submit",function(event){
    event.preventDefault()
})

submit.addEventListener("click",function(){
    if(nameBtn.value=="" || email.value=="" || password.value==""){
        alert("Please fill all the fields")
    }
    else{
        alert("Registration completed successfully")
    }
})
