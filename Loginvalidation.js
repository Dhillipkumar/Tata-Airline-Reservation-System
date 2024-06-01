function validate() {
  var email_id=document.myform.username.value; 
  var password=document.myform.Password.value; 
//1.Email address 
if(email_id==null || email_id=="" ){
        alert("Email Address field is empty!");  
        return false; 
  }
//2.Password
var passw= /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/; 
if(password==null || password=="" ){
    alert("password field is empty!");  
    return false; 
}
if(!passw.test(password)){
  alert("Incorrect Password");
  return false;
 }
}