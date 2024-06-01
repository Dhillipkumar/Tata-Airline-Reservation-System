
var city=localStorage.getItem("textvalue");
document.getElementById("city").innerHTML=city;

var city2=localStorage.getItem("textvalue1");
document.getElementById("city1").innerHTML=city2;

if(city=="Bengaluru" || city=="Chennai" || city=="kerala-TRV" || city=="Tirupathi" || city=="Hyderabad")
{
   zone_city = "south";
}
if(city=="Jharkhand" || city=="Kolkota")
{
   zone_city = "west";
}
if(city=="Mumbai")
{
   zone_city = "east";
}
if(city=="Delhi")
{
   zone_city = "north";
}

if(city2=="Bengaluru" || city2=="Chennai" || city2=="kerala-TRV" || city2=="Tirupathi" || city2=="Hyderabad")
{
   zone_city2 = "south";
}
if(city2=="Jharkhand" || city2=="Kolkota")
{
   zone_city2 = "west";
}
if(city2=="Mumbai")
{
   zone_city2 = "east";
}
if(city2=="Delhi")
{
   zone_city2 = "north";
}

//south to south
if(  zone_city == "south" && zone_city2 == "south")
{
   price = "3500";
   document.getElementById("Price").innerHTML=price;
  
   
}
//south to west
 if(zone_city == "south" && zone_city2 == "west" )
{
   price = "4250"
   document.getElementById("Price").innerHTML=price;
}
//west to south
if(zone_city2 == "south" && zone_city == "west" )
{
    price = "4250";
   document.getElementById("Price").innerHTML=price;
}
//south to east
if(zone_city == "south" && zone_city2 == "east" )
{
   price = "4000";
   document.getElementById("Price").innerHTML=price;
}
//east to south
if(zone_city2 == "south" && zone_city == "east" )
{
   price = "4000";
   document.getElementById("Price").innerHTML=price;
}
//south to north
if(zone_city == "south" && zone_city2 == "north" )
{
   price = "5500";
   document.getElementById("Price").innerHTML=price;
}
//north to south
if(zone_city2 == "south" && zone_city == "north" )
{
   price = "5500";
   document.getElementById("Price").innerHTML=price;
}

//west to west
if(zone_city == "west" && zone_city2 == "west" )
{
   price = "2500";
   document.getElementById("Price").innerHTML=price;
}
//west to east
if(zone_city == "west" && zone_city2 == "east" )
{
   price = "3500";
   document.getElementById("Price").innerHTML=price;
}
//east to west
if(zone_city2 == "west" && zone_city == "east" )
{
   price = "3500";
   document.getElementById("Price").innerHTML=price;
}

//west to north
if(zone_city == "west" && zone_city2 == "north" )
{
   price = "3500";
   document.getElementById("Price").innerHTML=price;
}

//north to west
if(zone_city2 == "west" && zone_city == "north" )
{
   price = "3500";
   document.getElementById("Price").innerHTML=price;
}

//east to north
if(zone_city == "east" && zone_city2 == "north" )
{
   price = "3250";
   document.getElementById("Price").innerHTML=price;
}

//north to east
if(zone_city2 == "east" && zone_city == "north" )
{
   price = "3250";
   document.getElementById("Price").innerHTML=price;
}











//south to south
if(  zone_city == "south" && zone_city2 == "south")
{
   price = "3500";
   document.getElementById("Price1").innerHTML=price;
}
//south to west
 if(zone_city == "south" && zone_city2 == "west" )
{
   price = "4250";
   document.getElementById("Price1").innerHTML=price;
}
//west to south
if(zone_city2 == "south" && zone_city == "west" )
{
   price = "4250";
   document.getElementById("Price1").innerHTML=price;
}
//south to east
if(zone_city == "south" && zone_city2 == "east" )
{
   price = "4000";
   document.getElementById("Price1").innerHTML=price;
}
//east to south
if(zone_city2 == "south" && zone_city == "east" )
{
   price = "4000";
   document.getElementById("Price1").innerHTML=price;
}
//south to north
if(zone_city == "south" && zone_city2 == "north" )
{
   price = "5500";
   document.getElementById("Price1").innerHTML=price;
}
//north to south
if(zone_city2 == "south" && zone_city == "north" )
{
   price = "5500";
   document.getElementById("Price1").innerHTML=price;
}

//west to west
if(zone_city == "west" && zone_city2 == "west" )
{
   price = "2500";
   document.getElementById("Price1").innerHTML=price;
}
//west to east
if(zone_city == "west" && zone_city2 == "east" )
{
   price = "3500";
   document.getElementById("Price1").innerHTML=price;
}
//east to west
if(zone_city2 == "west" && zone_city == "east" )
{
   price = "3500";
   document.getElementById("Price1").innerHTML=price;
}

//west to north
if(zone_city == "west" && zone_city2 == "north" )
{
   price = "3500";
   document.getElementById("Price1").innerHTML=price;
}

//north to west
if(zone_city2 == "west" && zone_city == "north" )
{
   price = "3500";
   document.getElementById("Price1").innerHTML=price;
}

//east to north
if(zone_city == "east" && zone_city2 == "north" )
{
   price = "3250";
   document.getElementById("Price1").innerHTML=price;
}

//north to east
if(zone_city2 == "east" && zone_city == "north" )
{
   price = "3250";
   document.getElementById("Price1").innerHTML=price;
}

localStorage.setItem("priceperhead",price);



document.getElementById("date_1").innerHTML=localStorage.getItem("textvalue2");
document.getElementById("return1").innerHTML=localStorage.getItem("textvalue");
document.getElementById("return2").innerHTML=localStorage.getItem("textvalue1");


var return_date=localStorage.getItem("textvalue3");
if(return_date==""){
document.getElementById("date_2").innerHTML="You have selected oneway";
}
else{
   document.getElementById("date_2").innerHTML=return_date;
}
if(return_date==""){
   document.getElementById("mini_field2").disabled = true;
   document.getElementById("mini_field2") = "lightblue";
   document.getElementById("mini_field2")="rgba(255, 255, 255, 0.856)"
   }
   else{
      document.getElementById("mini_field2") = false;
   }

   var return_date=localStorage.getItem("textvalue3");

  function finall(){

if(radiovalidation()==true){
   myfunction();
}else{

}


  }

function radiovalidation(){
   var return_date=localStorage.getItem("textvalue3");
      if(return_date==""){
         if(document.getElementById('radio1').checked) {   
            return true; 
         }   
         else if(document.getElementById('radio2').checked) {   
            return true; 
         }   
         else if(document.getElementById('radio3').checked) {   
            return true; 
         }   
         else {   
                 alert( "You have not selected any traveling time" ); 
                 return false; 
         }       
         }
         else{
     
            
            if(document.getElementById('radio1').checked) 
            {   
               if(document.getElementById('radio4').checked) {   
                  return true; 
               }   
               else if(document.getElementById('radio5').checked) {   
                  return true; 
               }   
               else if(document.getElementById('radio6').checked) {   
                  return true; 
               }   
               else {   
         
                  alert( "You have not selected any traveling time" );      
                  return false; 
          }   
            }   
            else if(document.getElementById('radio2').checked)
            {   
               if(document.getElementById('radio4').checked) {   
                  return true; 
               }   
               else if(document.getElementById('radio5').checked) {   
                  return true; 
               }   
               else if(document.getElementById('radio6').checked) {   
                  return true; 
               }   
               else {   
         
                  alert( "You have not selected any traveling time" );      
                  return false; 
          }   
            }   
            else if(document.getElementById('radio3').checked)
            {   
               if(document.getElementById('radio4').checked) {   
                  return true; 
               }   
               else if(document.getElementById('radio5').checked) {   
                  return true; 
               }   
               else if(document.getElementById('radio6').checked) {   
                  return true; 
               }   
               else {   
         
                  alert( "You have not selected any traveling time" );      
                  return false; 
          }   
            }   
           
           

         }
 }   
   


////////////////////////////////////////////////////////////////////////////////////////////myfunction()///////////////////////////////////////////////////////////////////
function myfunction(){

   var fieldset = document.createElement("FIELDSET");
    fieldset.style.borderRadius="5px"
    fieldset.style.border="none"
    fieldset.style.backgroundColor=" rgb(31, 31, 102)"
    
   var Form = document.createElement("FORM");
   Form.setAttribute("id", "myForm");
   Form.setAttribute("method", "post");
   Form.setAttribute("onsubmit","return Passenger_form()")
   Form.setAttribute("action", "passenger_details.php");
   Form.style.background= "white"
   Form.style.padding="50px"
   Form.style.maxWidth = "40%"
   Form.style.borderRadius="5px"
   Form.style.marginLeft="28%"
   fieldset.appendChild(Form);
   document.body.appendChild(fieldset);
 
  

////////////////////////////////////////////////////////////////////         ADULTS           /////////////////////////////////////////////////////
    var count=document.getElementById('adults').value;
    var count2=document.getElementById('Children').value;
    var count3=document.getElementById('infants').value;

    var adult_no = document.createElement("INPUT");
adult_no.setAttribute("type", "hidden");
adult_no.setAttribute("id", "adult_no");
adult_no.setAttribute("name", "ps_adult_no");
adult_no.setAttribute("value",count );
adult_no.style.marginLeft = "11%"
document.getElementById("myForm").appendChild(adult_no);

var Children_no = document.createElement("INPUT");
Children_no.setAttribute("type", "hidden");
Children_no.setAttribute("id", "Children_no");
Children_no.setAttribute("name", "ps_Children_no");
Children_no.setAttribute("value",count2 );
Children_no.style.marginLeft = "11%"
document.getElementById("myForm").appendChild(Children_no);

var infants_no = document.createElement("INPUT");
infants_no.setAttribute("type", "hidden");
infants_no.setAttribute("id", "infants_no");
infants_no.setAttribute("name", "ps_infants_no");
infants_no.setAttribute("value",count3 );
infants_no.style.marginLeft = "11%"
document.getElementById("myForm").appendChild(infants_no);


for(i=1;i<=count;i++){
//heading
   var Title= document.createElement("h2");
   var Title_heading= document.createTextNode("Passenger Details, ADULTS  "+i);
  Title.appendChild(Title_heading);
  document.getElementById("myForm").appendChild(Title);

///////////////////////////////////////////////////////////////////////row-1
var newElem = document.createElement("hR");
document.getElementById("myForm").appendChild(newElem);//break
//Gender
var bold_b= document.createElement("B");
var Gender = document.createTextNode("Gender");
bold_b.appendChild(Gender);
bold_b.style.marginLeft = "5%"
document.getElementById("myForm").appendChild(bold_b);

//firstname
var bold = document.createElement("B");
var Firstname = document.createTextNode("Firstname");
bold.appendChild(Firstname);
bold.style.marginLeft = "25%"
document.getElementById("myForm").appendChild(bold);

//Lastname
var bold = document.createElement("B");
var Lastname = document.createTextNode("Lastname");
bold.appendChild(Lastname);
bold.style.marginLeft = "25%"
document.getElementById("myForm").appendChild(bold);

var newElem = document.createElement("BR");
document.getElementById("myForm").appendChild(newElem);    //break

//Gender male radio
var Male = document.createElement("INPUT");
Male.style.marginLeft = "5%"
Male.setAttribute("type", "radio");
Male.setAttribute("name", "gender"+i);
Male.setAttribute("value", "male");
document.getElementById("myForm").appendChild(Male);
var Bold= document.createElement("b");
var male = document.createTextNode("Male");
Bold.appendChild(male);
document.getElementById("myForm").appendChild(Bold);
//Gender female radio
var Female = document.createElement("INPUT");
Female.setAttribute("type", "radio");
Female.setAttribute("name", "gender"+i);
Female.setAttribute("value", "female");
Female.style.marginLeft = "5%"
document.getElementById("myForm").appendChild(Female);
var Bold1= document.createElement("b");
var female = document.createTextNode("Female");
Bold1.appendChild(female);
document.getElementById("myForm").appendChild(Bold1);

//firstname field
var First_name = document.createElement("INPUT");
First_name.setAttribute("type", "text");
First_name.setAttribute("id", "firstname"+i);
First_name.setAttribute("name", "ps_firstname"+i);
First_name.style.marginLeft = "11.5%"
document.getElementById("myForm").appendChild(First_name);

//Lastname field
var Lastname = document.createElement("INPUT");
Lastname.setAttribute("type", "text");
Lastname.setAttribute("id", "Lastname"+i);
Lastname.setAttribute("name", "ps_Lastname"+i);
Lastname.style.marginLeft = "11%"
document.getElementById("myForm").appendChild(Lastname);

var newElem = document.createElement("BR");
document.getElementById("myForm").appendChild(newElem);//break
var newElem = document.createElement("BR");
document.getElementById("myForm").appendChild(newElem);//break

///////////////////////////////////////////////////////////////////////row-2
//email_title
var bold_1 = document.createElement("B");
var email = document.createTextNode("Email ID");
bold_1.appendChild(email);
bold_1.style.marginLeft = "5%"
document.getElementById("myForm").appendChild(bold_1);

//c_email title
var bold_1 = document.createElement("B");
var Confirm_email = document.createTextNode("Confirm Email ID");
bold_1.appendChild(Confirm_email);
bold_1.style.marginLeft = "23.5%"
document.getElementById("myForm").appendChild(bold_1);

var newElem = document.createElement("BR");
document.getElementById("myForm").appendChild(newElem);//break

//Email field
var Email_id = document.createElement("INPUT");
Email_id.setAttribute("type", "text");
Email_id.setAttribute("id", "Email_id"+i);
Email_id.setAttribute("name", "Email_id"+i);
Email_id.style.marginLeft = "5%"
document.getElementById("myForm").appendChild(Email_id);
//C_emial field
var C_emial = document.createElement("INPUT");
C_emial.setAttribute("type", "text");
C_emial.setAttribute("id", "C_emial"+i);
C_emial.setAttribute("name", "C_emial"+i);
C_emial.style.marginLeft = "8.5%"
document.getElementById("myForm").appendChild(C_emial);
///////////////////////////////////////////////////////////////////////row-3

var newElem = document.createElement("BR");
document.getElementById("myForm").appendChild(newElem);//break
var newElem = document.createElement("BR");
document.getElementById("myForm").appendChild(newElem);//break

//phonenumber
var bold_b= document.createElement("B");
var Phone_number = document.createTextNode("Phone_number");
bold_b.appendChild(Phone_number);
bold_b.style.marginLeft = "5%"
document.getElementById("myForm").appendChild(bold_b);

//city
var bold = document.createElement("B");
var City = document.createTextNode("City");
bold.appendChild(City);
bold.style.marginLeft = "18%"
document.getElementById("myForm").appendChild(bold);

//country
var bold = document.createElement("B");
var Country_residence = document.createTextNode("Country of residence");
bold.appendChild(Country_residence);
bold.style.marginLeft = "30.5%"
document.getElementById("myForm").appendChild(bold);

var newElem = document.createElement("BR");
document.getElementById("myForm").appendChild(newElem);//break

//Phone number
var phonenumber= document.createElement("INPUT");
phonenumber.setAttribute("type", "text");
phonenumber.setAttribute("id", "phonenumber"+i);
phonenumber.setAttribute("name", "phonenumber"+i);
phonenumber.style.marginLeft = "5%"
document.getElementById("myForm").appendChild(phonenumber);

//city
var city = document.createElement("INPUT");
city.setAttribute("type", "text");
city.setAttribute("id", "city1"+i);
city.setAttribute("name", "city"+i);
city.style.marginLeft = "8.5%"
document.getElementById("myForm").appendChild(city);

//country
var country = document.createElement("INPUT");
country.setAttribute("type", "text");
country.setAttribute("value", "India");
country.setAttribute("id", "country"+i);
country.setAttribute("name", "country"+i);
country.style.marginLeft = "11.4%"
document.getElementById("myForm").appendChild(country);

var newElem = document.createElement("BR");
document.getElementById("myForm").appendChild(newElem);    //break
var newElem = document.createElement("BR");
document.getElementById("myForm").appendChild(newElem);    //break

//birth date
document.getElementById("myForm").appendChild(newElem);
var bold_b= document.createElement("B");
var date_of_birth = document.createTextNode("Date of Birth");
bold_b.appendChild(date_of_birth);
bold_b.style.marginLeft = "5%"
document.getElementById("myForm").appendChild(bold_b);

var newElem = document.createElement("BR");
document.getElementById("myForm").appendChild(newElem);//break

var DOB= document.createElement("INPUT");
DOB.setAttribute("type", "date");
DOB.setAttribute("id", "DOB"+i);
DOB.setAttribute("name", "DOB"+i);
DOB.style.marginLeft = "5%"
document.getElementById("myForm").appendChild(DOB);

//break
var newElem = document.createElement("BR");
document.getElementById("myForm").appendChild(newElem);//break
var newElem = document.createElement("BR");
document.getElementById("myForm").appendChild(newElem);//break
var newElem = document.createElement("hR");
document.getElementById("myForm").appendChild(newElem);//break
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
for(i=1;i<=count2;i++){
  //heading
  var Title= document.createElement("h2");
  var Title_heading= document.createTextNode("Passenger Details, Children  "+i);
 Title.appendChild(Title_heading);
 document.getElementById("myForm").appendChild(Title);

///////////////////////////////////////////////////////////////////////row-1
var newElem = document.createElement("hR");
document.getElementById("myForm").appendChild(newElem);//break
//Gender
var bold_b= document.createElement("B");
var Gender = document.createTextNode("Gender");
bold_b.appendChild(Gender);
bold_b.style.marginLeft = "5%"
document.getElementById("myForm").appendChild(bold_b);

//firstname
var bold = document.createElement("B");
var Firstname = document.createTextNode("Firstname");
bold.appendChild(Firstname);
bold.style.marginLeft = "25%"
document.getElementById("myForm").appendChild(bold);

//Lastname
var bold = document.createElement("B");
var Lastname = document.createTextNode("Lastname");
bold.appendChild(Lastname);
bold.style.marginLeft = "25%"
document.getElementById("myForm").appendChild(bold);

var newElem = document.createElement("BR");
document.getElementById("myForm").appendChild(newElem);    //break

//Gender male radio
var Male = document.createElement("INPUT");
Male.style.marginLeft = "5%"
Male.setAttribute("type", "radio");
Male.setAttribute("name", "cgender"+i);
Male.setAttribute("value", "male");
document.getElementById("myForm").appendChild(Male);
var Bold= document.createElement("b");
var male = document.createTextNode("Male");
Bold.appendChild(male);
document.getElementById("myForm").appendChild(Bold);
//Gender female radio
var Female = document.createElement("INPUT");
Female.setAttribute("type", "radio");
Female.setAttribute("name", "cgender"+i);
Female.setAttribute("value", "female");
Female.style.marginLeft = "5%"
document.getElementById("myForm").appendChild(Female);
var Bold1= document.createElement("b");
var female = document.createTextNode("Female");
Bold1.appendChild(female);
document.getElementById("myForm").appendChild(Bold1);

//firstname field
var First_name = document.createElement("INPUT");
First_name.setAttribute("type", "text");
First_name.setAttribute("id", "cfirstname"+i);
First_name.setAttribute("name", "cps_firstname"+i);
First_name.style.marginLeft = "11.5%"
document.getElementById("myForm").appendChild(First_name);

//Lastname field
var Lastname = document.createElement("INPUT");
Lastname.setAttribute("type", "text");
Lastname.setAttribute("id", "cLastname"+i);
Lastname.setAttribute("name", "cps_Lastname"+i);
Lastname.style.marginLeft = "11%"
document.getElementById("myForm").appendChild(Lastname);

var newElem = document.createElement("BR");
document.getElementById("myForm").appendChild(newElem);//break
var newElem = document.createElement("BR");
document.getElementById("myForm").appendChild(newElem);//break

///////////////////////////////////////////////////////////////////////row-2
//email_title
var bold_1 = document.createElement("B");
var email = document.createTextNode("Email ID");
bold_1.appendChild(email);
bold_1.style.marginLeft = "5%"
document.getElementById("myForm").appendChild(bold_1);

//c_email title
var bold_1 = document.createElement("B");
var Confirm_email = document.createTextNode("Confirm Email ID");
bold_1.appendChild(Confirm_email);
bold_1.style.marginLeft = "23.5%"
document.getElementById("myForm").appendChild(bold_1);

var newElem = document.createElement("BR");
document.getElementById("myForm").appendChild(newElem);//break

//Email field
var Email_id = document.createElement("INPUT");
Email_id.setAttribute("type", "text");
Email_id.setAttribute("id", "cEmail_id"+i);
Email_id.setAttribute("name", "cEmail_id"+i);
Email_id.style.marginLeft = "5%"
document.getElementById("myForm").appendChild(Email_id);
//C_emial field
var C_emial = document.createElement("INPUT");
C_emial.setAttribute("type", "text");
C_emial.setAttribute("id", "cC_emial"+i);
C_emial.setAttribute("name", "CC_emial"+i);
C_emial.style.marginLeft = "8.5%"
document.getElementById("myForm").appendChild(C_emial);
///////////////////////////////////////////////////////////////////////row-3

var newElem = document.createElement("BR");
document.getElementById("myForm").appendChild(newElem);//break
var newElem = document.createElement("BR");
document.getElementById("myForm").appendChild(newElem);//break

//phonenumber
var bold_b= document.createElement("B");
var Phone_number = document.createTextNode("Phone_number");
bold_b.appendChild(Phone_number);
bold_b.style.marginLeft = "5%"
document.getElementById("myForm").appendChild(bold_b);

//city
var bold = document.createElement("B");
var City = document.createTextNode("City");
bold.appendChild(City);
bold.style.marginLeft = "18%"
document.getElementById("myForm").appendChild(bold);

//country
var bold = document.createElement("B");
var Country_residence = document.createTextNode("Country of residence");
bold.appendChild(Country_residence);
bold.style.marginLeft = "30.5%"
document.getElementById("myForm").appendChild(bold);


var newElem = document.createElement("BR");
document.getElementById("myForm").appendChild(newElem);//break

//Phone number
var phonenumber= document.createElement("INPUT");
phonenumber.setAttribute("type", "text");
phonenumber.setAttribute("id", "cphonenumber"+i);
phonenumber.setAttribute("name", "cphonenumber"+i);
phonenumber.style.marginLeft = "5%"
document.getElementById("myForm").appendChild(phonenumber);

//city
var city = document.createElement("INPUT");
city.setAttribute("type", "text");
city.setAttribute("id", "ccity1"+i);
city.setAttribute("name", "ccity"+i);
city.style.marginLeft = "8.5%"
document.getElementById("myForm").appendChild(city);

//country
var country = document.createElement("INPUT");
country.setAttribute("type", "text");
country.setAttribute("value", "India");
country.setAttribute("id", "ccountry"+i);
country.setAttribute("name", "ccountry"+i);
country.style.marginLeft = "11.4%"
document.getElementById("myForm").appendChild(country);


var newElem = document.createElement("BR");
document.getElementById("myForm").appendChild(newElem);    //break
var newElem = document.createElement("BR");
document.getElementById("myForm").appendChild(newElem);    //break

//birth date
document.getElementById("myForm").appendChild(newElem);
var bold_b= document.createElement("B");
var date_of_birth = document.createTextNode("Date of Birth");
bold_b.appendChild(date_of_birth);
bold_b.style.marginLeft = "5%"
document.getElementById("myForm").appendChild(bold_b);

var newElem = document.createElement("BR");
document.getElementById("myForm").appendChild(newElem);//break

var DOB= document.createElement("INPUT");
DOB.setAttribute("type", "date");
DOB.setAttribute("id", "cDOB"+i);
DOB.setAttribute("name", "cDOB"+i);
DOB.style.marginLeft = "5%"
document.getElementById("myForm").appendChild(DOB);

//break
var newElem = document.createElement("BR");
document.getElementById("myForm").appendChild(newElem);//break
var newElem = document.createElement("BR");
document.getElementById("myForm").appendChild(newElem);//break
var newElem = document.createElement("hR");
document.getElementById("myForm").appendChild(newElem);//break
      }


for(i=1;i<=count3;i++){
         //heading
         var Title= document.createElement("h2");
         var Title_heading= document.createTextNode("Passenger Details, infants  "+i);
        Title.appendChild(Title_heading);
        document.getElementById("myForm").appendChild(Title);
       
       ///////////////////////////////////////////////////////////////////////row-1
       var newElem = document.createElement("hR");
       document.getElementById("myForm").appendChild(newElem);//break
       //Gender
       var bold_b= document.createElement("B");
       var Gender = document.createTextNode("Gender");
       bold_b.appendChild(Gender);
       bold_b.style.marginLeft = "5%"
       document.getElementById("myForm").appendChild(bold_b);
       
       //firstname
       var bold = document.createElement("B");
       var Firstname = document.createTextNode("Firstname");
       bold.appendChild(Firstname);
       bold.style.marginLeft = "25%"
       document.getElementById("myForm").appendChild(bold);
       
       //Lastname
       var bold = document.createElement("B");
       var Lastname = document.createTextNode("Lastname");
       bold.appendChild(Lastname);
       bold.style.marginLeft = "25%"
       document.getElementById("myForm").appendChild(bold);
       
       var newElem = document.createElement("BR");
       document.getElementById("myForm").appendChild(newElem);    //break
       
       //Gender male radio
       var Male = document.createElement("INPUT");
       Male.style.marginLeft = "5%"
       Male.setAttribute("type", "radio");
       Male.setAttribute("name", "igender"+i);
       Male.setAttribute("value", "male");
       document.getElementById("myForm").appendChild(Male);
       var Bold= document.createElement("b");
       var male = document.createTextNode("Male");
       Bold.appendChild(male);
       document.getElementById("myForm").appendChild(Bold);
       //Gender female radio
       var Female = document.createElement("INPUT");
       Female.setAttribute("type", "radio");
       Female.setAttribute("name", "igender"+i);
       Female.setAttribute("value", "female");
       Female.style.marginLeft = "5%"
       document.getElementById("myForm").appendChild(Female);
       var Bold1= document.createElement("b");
       var female = document.createTextNode("Female");
       Bold1.appendChild(female);
       document.getElementById("myForm").appendChild(Bold1);
       
       //firstname field
       var First_name = document.createElement("INPUT");
       First_name.setAttribute("type", "text");
       First_name.setAttribute("id", "ifirstname"+i);
       First_name.setAttribute("name", "ips_firstname"+i);
       First_name.style.marginLeft = "11.5%"
       document.getElementById("myForm").appendChild(First_name);
       
       //Lastname field
       var Lastname = document.createElement("INPUT");
       Lastname.setAttribute("type", "text");
       Lastname.setAttribute("id", "iLastname"+i);
       Lastname.setAttribute("name", "ips_Lastname"+i);
       Lastname.style.marginLeft = "11%"
       document.getElementById("myForm").appendChild(Lastname);
       
       var newElem = document.createElement("BR");
       document.getElementById("myForm").appendChild(newElem);//break
       var newElem = document.createElement("BR");
       document.getElementById("myForm").appendChild(newElem);//break
       
       ///////////////////////////////////////////////////////////////////////row-2
       //email_title
       var bold_1 = document.createElement("B");
       var email = document.createTextNode("Email ID");
       bold_1.appendChild(email);
       bold_1.style.marginLeft = "5%"
       document.getElementById("myForm").appendChild(bold_1);
       
       //c_email title
       var bold_1 = document.createElement("B");
       var Confirm_email = document.createTextNode("Confirm Email ID");
       bold_1.appendChild(Confirm_email);
       bold_1.style.marginLeft = "23.5%"
       document.getElementById("myForm").appendChild(bold_1);
       
       var newElem = document.createElement("BR");
       document.getElementById("myForm").appendChild(newElem);//break
       
       //Email field
       var Email_id = document.createElement("INPUT");
       Email_id.setAttribute("type", "text");
       Email_id.setAttribute("id", "iEmail_id"+i);
       Email_id.setAttribute("name", "iEmail_id"+i);
       Email_id.style.marginLeft = "5%"
       document.getElementById("myForm").appendChild(Email_id);
       //C_emial field
       var C_emial = document.createElement("INPUT");
       C_emial.setAttribute("type", "text");
       C_emial.setAttribute("id", "iC_emial"+i);
       C_emial.setAttribute("name", "iC_emial"+i);
       C_emial.style.marginLeft = "8.5%"
       document.getElementById("myForm").appendChild(C_emial);
       ///////////////////////////////////////////////////////////////////////row-3
       
       var newElem = document.createElement("BR");
       document.getElementById("myForm").appendChild(newElem);//break
       var newElem = document.createElement("BR");
       document.getElementById("myForm").appendChild(newElem);//break
       
       //phonenumber
       var bold_b= document.createElement("B");
       var Phone_number = document.createTextNode("Phone_number");
       bold_b.appendChild(Phone_number);
       bold_b.style.marginLeft = "5%"
       document.getElementById("myForm").appendChild(bold_b);
       
       //city
       var bold = document.createElement("B");
       var City = document.createTextNode("City");
       bold.appendChild(City);
       bold.style.marginLeft = "18%"
       document.getElementById("myForm").appendChild(bold);
       
       //country
       var bold = document.createElement("B");
       var Country_residence = document.createTextNode("Country of residence");
       bold.appendChild(Country_residence);
       bold.style.marginLeft = "30.5%"
       document.getElementById("myForm").appendChild(bold);
       
       
       var newElem = document.createElement("BR");
       document.getElementById("myForm").appendChild(newElem);//break
       
       //Phone number
       var phonenumber= document.createElement("INPUT");
       phonenumber.setAttribute("type", "text");
       phonenumber.setAttribute("id", "iphonenumber"+i);
       phonenumber.setAttribute("name", "iphonenumber"+i);
       phonenumber.style.marginLeft = "5%"
       document.getElementById("myForm").appendChild(phonenumber);
       
       //city
       var city = document.createElement("INPUT");
       city.setAttribute("type", "text");
       city.setAttribute("id", "icity1"+i);
       city.setAttribute("name", "icity"+i);
       city.style.marginLeft = "8.5%"
       document.getElementById("myForm").appendChild(city);
       
       //country
       var country = document.createElement("INPUT");
       country.setAttribute("type", "text");
       country.setAttribute("value", "India");
       country.setAttribute("id", "icountry"+i);
       country.setAttribute("name", "icountry"+i);
       country.style.marginLeft = "11.4%"
       document.getElementById("myForm").appendChild(country);
       
       
       var newElem = document.createElement("BR");
       document.getElementById("myForm").appendChild(newElem);    //break
       var newElem = document.createElement("BR");
       document.getElementById("myForm").appendChild(newElem);    //break
       
       //birth date
       document.getElementById("myForm").appendChild(newElem);
       var bold_b= document.createElement("B");
       var date_of_birth = document.createTextNode("Date of Birth");
       bold_b.appendChild(date_of_birth);
       bold_b.style.marginLeft = "5%"
       document.getElementById("myForm").appendChild(bold_b);
       
       var newElem = document.createElement("BR");
       document.getElementById("myForm").appendChild(newElem);//break
       
       var DOB= document.createElement("INPUT");
       DOB.setAttribute("type", "date");
       DOB.setAttribute("id", "iDOB"+i);
       DOB.setAttribute("name", "iDOB"+i);
       DOB.style.marginLeft = "5%"
       document.getElementById("myForm").appendChild(DOB);
       
       //break
       var newElem = document.createElement("BR");
       document.getElementById("myForm").appendChild(newElem);//break
       var newElem = document.createElement("BR");
       document.getElementById("myForm").appendChild(newElem);//break
       var newElem = document.createElement("hR");
       document.getElementById("myForm").appendChild(newElem);//break
       
       
             }
 

//Button
    var Button = document.createElement("BUTTON");
    var confirm = document.createTextNode("Continue");

  

    Button.appendChild(confirm);
    Button.style.color="white";
    Button.style.backgroundColor="red";
    Button.style.width="165px";
    Button.style.height="50px";
    Button.style.fontSize="20px";
    Button.style.border="none";
    Button.style.borderRadius="5px";
    Button.style.marginLeft="38%";
    document.getElementById("myForm").appendChild(Button);
    var newElem = document.createElement("hR");
document.body.appendChild(newElem);//break
var newElem = document.createElement("hR");
document.body.appendChild(newElem);//break

///////////////////////////////////////////////////flight summary/////////////////////////////////////////
var city=localStorage.getItem("textvalue");
var city2=localStorage.getItem("textvalue1");
    document.getElementById("placeform").innerHTML=city;
    document.getElementById("placeto").innerHTML=city2;

var ele = document.getElementsByName('browser');
              
            for(i = 0; i < ele.length; i++) {
                if(ele[i].checked)
               timing= ""+ele[i].value;
            }
console.log(timing);
localStorage.setItem("onewaytiming",timing);
var elee = document.getElementsByName('browser1');
              
            for(i = 0; i < elee.length; i++) {
                if(elee[i].checked)
               timing1= ""+elee[i].value;
            }
console.log(timing1);
localStorage.setItem("twotiming",timing1);
            var date1=localStorage.getItem("textvalue2");
            document.getElementById("Departuredate").innerHTML=date1+timing;
            
            var return_date2=localStorage.getItem("textvalue3");

            if(return_date2==""){
            
            }
            else{
               document.getElementById("Returndate").innerHTML=return_date2+timing1;
            }

           
   
   /////////////////////////fare///////////////////////////

   if(return_date2==""){
      var adults=document.getElementById("adults").value;
      adults_1=adults*price;
 
      var Children=document.getElementById("Children").value;
      Children_1=Children*price;
      var passenger_total=adults_1+Children_1;
      document.getElementById("fare").innerHTML=passenger_total;

      var taxfee=1200;
      adults_fee=adults*taxfee;
      Children_fee=Children*taxfee;
      var tax_total=adults_fee+Children_fee;
      document.getElementById("taxe").innerHTML=tax_total;
      var total_money=passenger_total+tax_total;
      document.getElementById("total").innerHTML=total_money;
   }
   else{
      var adults=document.getElementById("adults").value;
      adults_2=adults*price*2;
 
      var Children=document.getElementById("Children").value;
      Children_2=Children*price*2;

      var passenger_total=adults_2+Children_2;
      document.getElementById("fare").innerHTML=passenger_total;

      var taxfee=2400;
      adults_fee=adults*taxfee;
      Children_fee=Children*taxfee;
      var tax_total=adults_fee+Children_fee;
      document.getElementById("taxe").innerHTML=tax_total;
      var total_money=passenger_total+tax_total;
      document.getElementById("total").innerHTML=total_money;
   }

    

  
   
   var adults_pay=document.getElementById("adults").value; 
   var Children_pay=document.getElementById("Children").value; 
   var infants_pay=document.getElementById("infants").value; 
   var total=document.getElementById("total").value; 

   
   localStorage.setItem("adults",adults_pay);
   localStorage.setItem("Children",Children_pay);
   localStorage.setItem("infants",infants_pay);

   localStorage.setItem("datefordiscount",return_datefordiscount);

   localStorage.setItem("total_amount",total);

  

   
   
}
  ///////////////////////////////////////////////////////////////

function Passenger_form(){

 
  

   var count=document.getElementById("adults").value;
   for (i=1;i<=count;i++){

//firstname validation
   var firstname = document.getElementById("firstname"+i).value;
   letters=/^[A-Za-z]+$/;
   if(firstname==null || firstname=="" ){
      alert("Please Enter Firstname in Adults Table"+i);
      return false;
     }     if(!letters.test(firstname)){
      alert("Name should contain alphabets only!"+i);
      return false;
     }
//lastname validation 
     var Lastname = document.getElementById("Lastname"+i).value;
     if(Lastname==null || Lastname=="" ){
      alert("Please Enter Lastname in Adults Table "+i);
      return false;
     }
     if(!letters.test(Lastname)){
      alert("Name should contain alphabets only! "+i);
      return false
   }
//email_ID
     var Email_id = document.getElementById("Email_id"+i).value;
     if(Email_id==null || Email_id=="" ){
      alert("Please Enter Email ID in Adults Table "+i);
      return false;
     }
//C_emial
   var C_emial = document.getElementById("C_emial"+i).value;
   if(C_emial==null || C_emial=="" ){
   alert("Please Enter Repeat Email ID in Adults Table "+i);
   return false;
   }
   
   if(Email_id!=C_emial){
      alert("Both Mail ID is not same!");
      return false;
   }
//Phone_number
   var Phone_number =document.getElementById("phonenumber"+i).value;
   var phoneno = /\d{10}$/;
   if(Phone_number==null || Phone_number=="" ){
      alert("Phone Number field is empty!"+i);  
      return false; 
     }
     if(!Phone_number.match(phoneno))
     {
      alert("Not a valid Phone Number"+i);
      return false;
     }
//city
     var city_1 = document.getElementById("city1"+i).value;
     if(city_1==null || city_1=="" ){
      alert("Please Enter city in Adults Table "+i);
      return false;
     }
//country
 var country_1 = document.getElementById("country"+i).value;
 if(country_1==null || country_1=="" ){
  alert("Please Enter country in Adults Table "+i);
  return false;
 }
 //Date of Birth field
 var dateofbirth = document.getElementById("DOB"+i).value;

 if(dateofbirth==null || dateofbirth=="" ){
  alert("BirthDate field is empty! in Adults Table "+i);  
  return false; 
 }
 var today = new Date();
 var year = today.getFullYear()-18;
 Dom= dateofbirth.substr(0,4);
 if(year<Dom){
   alert("make sure your date of birth field in 'YYYY/mm/dd' and 18+ in Adults Table "+i);  
   return false; 
  }
   }


	
  
var count2=document.getElementById('Children').value;
for (i=1;i<=count2;i++){

//firstname validation
var firstname = document.getElementById("cfirstname"+i).value;
letters=/^[A-Za-z]+$/;
if(firstname==null || firstname=="" ){
   alert("Please Enter Firstname in Children Table"+i);
   return false;
  }     if(!letters.test(firstname)){
   alert("Name should contain alphabets only! in Children Table"+i);
   return false;
  }
//lastname validation 
  var Lastname = document.getElementById("cLastname"+i).value;
  if(Lastname==null || Lastname=="" ){
   alert("Please Enter Lastname in Children Table "+i);
   return false;
  }
  if(!letters.test(Lastname)){
   alert("Name should contain alphabets only! Children Table "+i);
   return false
}
//email_ID
  var Email_id = document.getElementById("cEmail_id"+i).value;
  if(Email_id==null || Email_id=="" ){
   alert("Please Enter Email ID in Children Table "+i);
   return false;
  }
//C_emial
var C_emial = document.getElementById("cC_emial"+i).value;
if(C_emial==null || C_emial=="" ){
alert("Please Enter Repeat Email ID in Children Table "+i);
return false;
}

if(Email_id!=C_emial){
   alert("Both Mail ID is not same!");
   return false;
}
//Phone_number
var Phone_number =document.getElementById("cphonenumber Children Table"+i).value;
var phoneno = /^\d{10}$/;
if(Phone_number==null || Phone_number=="" ){
   alert("Phone Number field is empty!"+i);  
   return false; 
  }
  if(!Phone_number.match(phoneno))
  {
   alert("Not a valid Phone Number Children Table"+i);
   return false;
  }
//city
  var city_1 = document.getElementById("ccity1"+i).value;
  if(city_1==null || city_1=="" ){
   alert("Please Enter city in Children Table "+i);
   return false;
  }
//country
var country_1 = document.getElementById("ccountry"+i).value;
if(country_1==null || country_1=="" ){
alert("Please Enter country in Children Table "+i);
return false;
}
//Date of Birth field
var date_regeemail_id = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
var dateofbirth = document.getElementById("cDOB"+i).value;
if(dateofbirth==null || dateofbirth=="" ){
alert("BirthDate field is empty! in Children Table "+i);  
return false; 
}
var today = new Date();
var year = today.getFullYear()-18;
Dom= dateofbirth.substr(0,4);
if(year<Dom){
  alert("make sure your date of birth field in 'YYYY/mm/dd' and 18+ in Children Table "+i);  
  return false; 
 }
}

var count3=document.getElementById('infants').value;
for (i=1;i<=count3;i++){

//firstname validation
var firstname = document.getElementById("ifirstname"+i).value;
letters=/^[A-Za-z]+$/;
if(firstname==null || firstname=="" ){
   alert("Please Enter Firstname in infants Table"+i);
   return false;
  }     if(!letters.test(firstname)){
   alert("Name should contain alphabets only!"+i);
   return false;
  }
//lastname validation 
  var Lastname = document.getElementById("iLastname"+i).value;
  if(Lastname==null || Lastname=="" ){
   alert("Please Enter Lastname in infants Table "+i);
   return false;
  }
  if(!letters.test(Lastname)){
   alert("Name should contain alphabets only! "+i);
   return false
}
//email_ID
  var Email_id = document.getElementById("iEmail_id"+i).value;
  if(Email_id==null || Email_id=="" ){
   alert("Please Enter Email ID in infants Table "+i);
   return false;
  }
//C_emial
var C_emial = document.getElementById("iC_emial"+i).value;
if(C_emial==null || C_emial=="" ){
alert("Please Enter Repeat Email ID in infants Table "+i);
return false;
}

if(Email_id!=C_emial){
   alert("Both Mail ID is not same!");
   return false;
}
//Phone_number
var Phone_number =document.getElementById("iphonenumber"+i).value;
var phoneno = /^\d{10}$/;
if(Phone_number==null || Phone_number=="" ){
   alert("Phone Number field is empty!"+i);  
   return false; 
  }
  if(!Phone_number.match(phoneno))
  {
   alert("Not a valid Phone Number"+i);
   return false;
  }
//city
  var city_1 = document.getElementById("icity1"+i).value;
  if(city_1==null || city_1=="" ){
   alert("Please Enter city in infants Table "+i);
   return false;
  }
//country
var country_1 = document.getElementById("icountry"+i).value;
if(country_1==null || country_1=="" ){
alert("Please Enter country in infants Table "+i);
return false;
}
//Date of Birth field
var date_regeemail_id = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
var dateofbirth = document.getElementById("iDOB"+i).value;
if(dateofbirth==null || dateofbirth=="" ){
alert("BirthDate field is empty! in infants Table "+i);  
return false; 
}
var today = new Date();
var year = today.getFullYear()-18;
Dom= dateofbirth.substr(0,4);
if(year<Dom){
  alert("make sure your date of birth field in 'YYYY/mm/dd' and 18+ in infants Table "+i);  
  return false; 
 }
}
}

   