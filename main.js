const mapping = {
    "name": 0,
    "email": 1,
    "phone": 2,
}
let isNameError = false, isEmailError = false, isPhoneError= false;
const nameRE = /^[A-Z][a-z]* [A-Z.][a-z]*$/; //first lastname
const emailRE = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const phoneRE = /^[6-9][0-9]{9}$/;

function handleFocusIn(elem) {
    elem.classList.remove("error");
    var id = elem.id;
    const target = document.getElementsByClassName("label")[mapping[id]];

    const place = `Enter your ${id}`;
    elem.placeholder = place;
    target.classList.remove("textlabel");
    target.classList.add("textlabel-click");
}

function handleFocusOut(elem) {
    if (elem.value === "")
    {
        var id = elem.id;
        const target = document.getElementsByClassName("label")[mapping[id]];

        elem.placeholder = "";
        target.classList.remove("textlabel-click");
        target.classList.add("textlabel");
    }
}

function validate(event) {
    event.preventDefault();
    const inputElems = document.getElementsByTagName("input");
    const inputs = {"name": inputElems[0].value, "email": inputElems[1].value, "male": inputElems[2].checked, "female": inputElems[3].checked, "phone": inputElems[4].value, "terms": inputElems[5].checked};

    const nameTest = nameRE.test(inputs.name);
    const emailTest = emailRE.test(inputs.email);
    const phoneTest = phoneRE.test(inputs.phone);
    let nameError = "", emailError = "", phoneError= "";

    if (!phoneTest)
    {  
        const elem = document.getElementById("phone");
        elem.classList.add("error");
        phoneError = "Phone number must contain 10 digits starting with digits 6-9.\n";
        if (!isPhoneError)
            displayErrorAlert(elem, phoneError);
        isPhoneError = true;
    }

    else {
        const elem = document.getElementById("phone");
        if (isPhoneError)
            removeErrorAlert(elem);
        isPhoneError = false;
    }

    if (!nameTest)
    {
        const elem = document.getElementById("name");
        elem.classList.add("error");
        nameError =  "Format <Firstname Lastname>.\n";
        if (!isNameError)
            displayErrorAlert(elem, nameError);
        isNameError = true;
    }

    else {
        const elem = document.getElementById("name");
        if (isNameError)
            removeErrorAlert(elem);
        isNameError = false;
    }

    if (!emailTest)
    {
        const elem = document.getElementById("email");
        elem.classList.add("error");
        emailError =  "Invalid Email format.\n";
        if (!isEmailError)
            displayErrorAlert(elem, emailError);
        isEmailError = true;
    }

    else {
        const elem = document.getElementById("email");
        if (isEmailError)
            removeErrorAlert(elem);
        isEmailError = false;
    }

    if (phoneTest && nameTest && emailTest)
    {
        if (!inputs.male && !inputs.female)
            alert("Please select a gender");

        else if (!inputs.terms) {
            alert("Please accept the terms and conditions.");
        }

        else
            alert("Submitted Successfully!!");
    }
}

function displayErrorAlert(elem, error) {  
    const errorAlert = document.createElement("p");  //add error alert
    const errorMsg = document.createTextNode(error);
    errorAlert.appendChild(errorMsg);
    errorAlert.classList.add("error-alert");
    elem.parentNode.appendChild(errorAlert);
}

function removeErrorAlert (elem) {
    elem.parentNode.removeChild(elem.parentNode.getElementsByTagName("p")[0]);
}