const mapping = {
    "name": 0,
    "email": 1,
    "phone": 2,
}

const nameRE = /^[a-z]+ [a-z]+$/;
const emailRE = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const phoneRE = /[6-9][0-9]{9}/;

function handleFocusIn(elem) {
    var id = elem.id;
    
    const target = document.getElementsByClassName("label")[mapping[id]];
    // console.log(target);
    // target.
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
        // console.log(target);
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
    let error = "";

    
    if (!phoneTest)
        error = error + "Phone number must contain 10 digits starting with digits 6-9.\n";

    if (!nameTest)
        error = error + "Name format <firstname lastname>.\n";

    if (!emailTest)
        error = error + "Invalid Email format.\n";

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

    else
        alert(error);
}