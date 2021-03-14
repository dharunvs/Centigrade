const popup = document.getElementById('popup-message');

Validate = () => {
    var name = document.forms["myForm"]["Full Name"].value;
    var email = document.forms["myForm"]["Email"].value;
    var number = document.forms["myForm"]["Phone No"].value;
    var message = document.forms["myForm"]["Message"].value;
    let messages = [];

    let state = false

    if (name == " " || email == "" || number == "" || message == ""){
        messages.push("Fill all details");
        popup.innerText = messages.join(", ")
    }
    else if (emailValidate()){
        messages.push("Enter valid email");
        popup.innerText = messages.join(", ")
    }
    else if (number.length != 10){
        messages.push("Enter valid phone number")
        popup.innerText = messages.join(", ")
    }
    else{
        state = true
    }

    if (state == true){
        SubForm();
    }
    else{
        errorAnimation()
    }
}

emailValidate = () => {
    var email = document.forms["myForm"]["Email"].value; 
    if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[1-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))   {
        return false
    }
    else{
        return true
    }
}


SubForm = () => {
    $.ajax({
        url:"https://api.apispreadsheets.com/data/9087/",
        type:"post",
        data:$("#myForm").serializeArray(),
        success: () => {
            document.forms["myForm"]["Full Name"].value = "";
            document.forms["myForm"]["Email"].value = "";
            document.forms["myForm"]["Phone No"].value = "";
            document.forms["myForm"]["Message"].value = "";

            successAnimation()
        },
        error: () => {
            errorAnimation()
        }
    })
}

successAnimation = () => {
    const submit = document.querySelector(".submitted");
    submit.classList.add("show")
    setTimeout(() => {
        submit.classList.remove("show");
      }, 3000);
}

errorAnimation = () => {
    let popup = document.getElementsByClassName('popup');
    popup[0].classList.add('active')

}

okay = () => {
    let popup = document.getElementsByClassName('popup');
    popup[0].classList.remove('active')
}
