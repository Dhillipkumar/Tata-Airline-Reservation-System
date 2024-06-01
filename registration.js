
function validateform(){  
    var name=document.myform.Firstname.value;  
    var lastname=document.myform.Lastname.value;  
    var Birthdate=document.myform.Birthdate.value; 
    var phone_number=document.myform.phone_number.value; 
    var email_id=document.myform.email_id.value; 
    var Reemail=document.myform.Reemail_id.value; 
    var Address=document.myform.Address.value; 
    var City=document.myform.City.value; 
    var Pincode=document.myform.Pincode.value; 
    var password=document.myform.password.value;  
    var Repeatpassword=document.myform.Repeatpassword.value; 

    letters=/^[A-Za-z]+$/;
    //var date_regeemail_id = /(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[1,2])\/(19|20)\d{2}/;
    ///^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/
    var phoneno = /^(\+91-|\+91|0)?\d{10}$/;

    if(document.myform.title.selectedIndex==0)
    { 
      alert("Please select the Title!");
    return false;
    }
//1.First name field
 if(name==null || name=="" ){
  alert("Firstname field is empty!");  
  return false; 
 }
 if(!letters.test(name)){
  alert("name should contain alphabets only!");
  return false;
 }
//2.second name field
 if(lastname==null || lastname==""){
  alert("Lastname field is empty!");  
  return false;
 }
 if(!letters.test(lastname)){
        alert("Lastname should contain alphabets only!");
        return false;
 }
 //3.Date of Birth field
 if(Birthdate==null || Birthdate=="" ){
  alert("BirthDate field is empty!");  
  return false; 
 }

 var CurrentDate = new Date();
    GivenDate = new Date(Birthdate);

    if(GivenDate > CurrentDate){
        alert('Given Date of Birth is greater than the current date.');
        return false;
    }
 //if (!(date_regeemail_id.test(Birthdate)))
 // {
 //   alert("make sure your date of birth field in 'DD/MM/YYYY' and 18+");
  //   return false;
 //}
//4.Phone_number field
   if(phone_number==null || phone_number=="" ){
    alert("Phone Number field is empty!");  
    return false; 
   }
   if(!phone_number.match(phoneno))
   {
    alert("Not a valid Phone Number");
    return false;
   }
//5.state field 
if(document.myform.state.selectedIndex==0)
{ 
  alert("Please select Your State!");
return false;
}
//6.Email_Id field
    if(email_id==null || email_id=="" ){
     alert("Email ID field is empty!");  
     return false; 
    }  
//7.Re-email_id
    if(Reemail==null || Reemail=="" ){
        alert("Repeat Email id field is empty!");  
      return false; 
    }
//confirm Email Id and RE_email_id
    if(email_id!=Reemail){
       alert("Both Mail ID is not same!");
       return false;
    }
//8.Address
    if(Address==null || Address=="" ){
      alert("Address field is empty!");  
    return false; 
  }
//9.City
   if(City==null || City=="" ){
     alert("City field is empty!");  
   return false;
  }
  if(!letters.test(City)){
    alert("City name should contain alphabets only!");
    return false;
  }
//10.Pincode
   if(Pincode==null || Pincode=="" ){
     alert("Pincode field is empty!");  
    return false;
   }
   if(isNaN(Pincode)){  
      alert("Pincode will be in Numeric only!");  
    return false;  
  }  
  if(Pincode.length>7){  
    alert("Pincode must be at 6 Digit Only!");  
    return false;  
    }  
//11.Password
var passw= /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/; 
   if(password==null || password=="" ){
     alert("Password field is empty!");  
     return false;
   }
   if(!passw.test(password)){
    alert("To check a password between 8 to 15 characters, which should contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character,");
    return false;
   }

//12.retype password
   if(Repeatpassword==null || Repeatpassword=="" ){
     alert("Pincode field is empty!");  
     return false;
    }
//confirm password
    if(password!=Repeatpassword){
      alert("Both Password is not same!");
      return false;
   }
   if(!myform.terms.checked) {
    alert("Please indicate that you accept the Terms and Conditions");
    return false;
  }
  if(!myform.terms1.checked) {
    alert("Please indicate that you accept the Terms and Conditions");
    return false;
  }

  
  }
 