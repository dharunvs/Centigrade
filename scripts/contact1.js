function SubForm (){
    $.ajax({
        url:"https://api.apispreadsheets.com/data/9087/",
        type:"post",
        data:$("#myForm").serializeArray(),
        success: function(){
                let x = test();
                return x;          
        },
        error: function(){
            alert("There was an error :(")
        }
    });
}

const popup = document.getElementById('popup-message');

function test(){
   var a = document.forms["myForm"]["Full Name"].value;
   var b = document.forms["myForm"]["Email"].value;                      
   var c = document.forms["myForm"]["Phone No"].value;
   var d = document.forms["myForm"]["Message"].value;
   let messages = []
  
   if (a==" "||b==""||c==""||d==""){
        messages.push("atleast one field you left blank");
        popup.innerText = messages.join(", ")

        return false;                       
   }
   else {
     
    let x = emailValidation();
    if(x===true){
    var s = document.querySelector(".submitted");
    s.classList.add("show");

    setTimeout(() => {
        s.classList.remove("show");
      }, 2000);
                       return true;

    }
    }
}
 function emailValidation(){
    var b = document.forms["myForm"]["Email"].value; 
    if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[1-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(b))   {
        return true
    }   
        alert("Entered Email is not in email address format")
        return false
}
