
   function oneway(x) {
     if(x==0){
     document.myform_1.myDate.disabled = true;
     document.myform_1.myDate.style.borderColor = "lightblue"
     document.myform_1.myDate.style.background="rgba(255, 255, 255, 0.856)"
     
     }
     else{
      document.myform_1.myDate.disabled = false;
      document.myform_1.myDate.style.borderColor="Black"; 
   }}

   
function validateform_index(){


//departure airport and arrival airport field
    if(document.myform_1.city.selectedIndex==0)
    { 
      alert("Please select Departure Airport!!!");
    return false;
    }
    if(document.myform_1.City1.selectedIndex==0)
    { 
      alert("Please select Arrival Airport!");
    return false;
    }

    var Sel1=document.myform_1.city.value;  
    var Sel2=document.myform_1.City1.value; 
    if(Sel1==Sel2){
        alert("Both Departure and Arrival Shouldn't be Same!");
        return false;
     }

//departure date and arrivel date

    if(document.myform_1.Departure.value=="")
     { 
       alert("Please select Arrival DATE!");
     return false;
     }
    //arr=document.getElementById("date").value;
    //var CurrentDate = new Date();
    //arr1 = new Date(arr);
  

   // if(arr1 < CurrentDate){
    //    alert('Please give a valid Arrial Date');
    //    return false;
   // }

 // var firstRadio = document.getElementById('date1');
 // if (firstRadio) {
  //  dep=document.getElementById("date1").value;
  //  dep1 = new Date(arr)
 // }

 
     var from=document.myform_1.city.value; 
     var To=document.myform_1.City1.value; 

     localStorage.setItem("textvalue",from);
     localStorage.setItem("textvalue1",To);

     var date=document.myform_1.Departure.value; 
     localStorage.setItem("textvalue2",date);

     var myDate=document.myform_1.myDate.value; 
     localStorage.setItem("textvalue3",myDate);
}
   