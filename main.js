const mapping = {
    "name": 0,
    "email": 1,
    "phone": 2,
}

function handleFocusIn(elem) {
    var id = elem.id;
    
    const target = document.getElementsByClassName("label")[mapping[id]];
    console.log(target);
    target.classList.remove("textlabel");
    target.classList.add("textlabel-click");
}

function handleFocusOut(elem) {

    if (elem.value === "")
    {
        var id = elem.id;
        const target = document.getElementsByClassName("label")[mapping[id]];
        // console.log(target);
        target.classList.remove("textlabel-click");
        target.classList.add("textlabel");
    }
}

function validate () {
    const list = getElementsByTagName("input");
    console.log(list);
}