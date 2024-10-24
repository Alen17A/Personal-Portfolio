
function validateForm(){
    var name = document.getElementById("yname").value;
    var email = document.getElementById("yemail").value;
    var phno = document.getElementById("yphone").value;

    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var phoneError = document.getElementById("phoneError");

    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";

    var isValid = true;

    // Name validation
    var namePattern = /^[A-Za-z\s]+$/;

    if(!name.match(namePattern))
    {
        nameError.textContent = "Name should not contain numbers or special characters";
        isValid = false;
    }

    // Email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!email.match(emailPattern))
    {
        emailError.textContent = "Enter a valid email address";
        isValid = false;
    }

    // Phone validation
    var phonePattern = /^[0-9]{10}$/;

    if(!phno.match(phonePattern))
    {
        phoneError.textContent = "Phone number must be 10 digits";
        isValid = false;
    }

    return isValid;

}

