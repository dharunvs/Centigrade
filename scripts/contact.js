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
function test(){
   var a = document.forms["myForm"]["Full Name"].value;
   var b = document.forms["myForm"]["Email"].value;                      
   var c = document.forms["myForm"]["Phone No"].value;
   var d = document.forms["myForm"]["Message"].value;
  
   if (a==" "||b==""||c==""||d==""){
            alert("atleast one field you left blank");
            return false;                       
   }
   else {
        console.log("hi buddy")
        var s = document.querySelector(".submitted");
        s.classList.add("show");
  
        setTimeout(() => {
            s.classList.remove("show");
          }, 2000);
                           return true;
  
                          
    }
 }
  
