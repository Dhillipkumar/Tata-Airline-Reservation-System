var city=localStorage.getItem("textvalue");
document.getElementById("city_1").innerHTML=city;

var city2=localStorage.getItem("textvalue1");
document.getElementById("city_2").innerHTML=city2;
var adults=localStorage.getItem("adults");
var Children=localStorage.getItem("Children");
var infants=localStorage.getItem("infants");
var total_amount=localStorage.getItem("total_amount");
var discount=localStorage.getItem("datefordiscount");

document.getElementById("total_adults").innerHTML=adults;
document.getElementById("total_children").innerHTML=Children;
document.getElementById("total_infants").innerHTML=infants;

total_passenger=parseInt(adults)+parseInt(Children)+parseInt(infants);
console.log(total_passenger);
var ps=localStorage.getItem("ps_firstname");

var oneway=localStorage.getItem("textvalue2");
var roundtrip=localStorage.getItem("textvalue3");


var price=localStorage.getItem("priceperhead");
document.getElementById("perhead").innerHTML=price;

if(Children=="0"){
    
}
else{
    document.getElementById("perhead1").innerHTML=price;
}   



if(roundtrip==""){
    adults_1=adults*price;
    Children_1=Children*price;

    //total number of passenger's
    var passenger_total=adults_1+Children_1;
    //for appling tax
    var taxfee=1200;
    adults_fee=adults*taxfee;
    Children_fee=Children*taxfee;
 
    var tax_total=adults_fee+Children_fee;
    var total_money=passenger_total+tax_total;
    document.getElementById("total_money").innerHTML=total_money;

}else{
    document.getElementById("discount").innerHTML="Discount : INR 2000"
    var price_roundtrip=price*2;
    adults_1=adults*price_roundtrip;
    Children_1=Children*price_roundtrip;

    //total number of passenger's
    var passenger_total=adults_1+Children_1;
    //for appling tax
    var taxfee=2400;
    adults_fee=adults*taxfee;
    Children_fee=Children*taxfee;
 
    var tax_total=adults_fee+Children_fee;
    var total_money=passenger_total+tax_total-2000;
    document.getElementById("total_money").innerHTML=total_money;
}

function cancelpayment(){
    window.open("cancelpayment.php","_parent");
  }

if(roundtrip==""){
    document.getElementById("img").src='Image/right-arrow.png';}
    else{
        document.getElementById("img").src='Image/two-arrows.png';
    }
    
          var date=new Date();
          var tdate=date.getDate();
          var month=date.getMonth()+1;
          if(tdate<10){
              tdate='0' + tdate;
          }
          if(month<10){
              month='0' + month;
          }
          var year=date.getUTCFullYear();
          var year=year;
          var month=month;
          console.log(year);
          console.log(month);
             
    let x = Math.floor((Math.random() * 1000000000000) + 1);
          var city=localStorage.getItem("textvalue");
          var city2=localStorage.getItem("textvalue1");
          var oneway=localStorage.getItem("textvalue2");
          var roundtrip=localStorage.getItem("textvalue3");;
          var onewaytiming=localStorage.getItem("onewaytiming");
          var twowaytiming1=localStorage.getItem("twotiming");


          console.log(onewaytiming);
          console.log(twowaytiming1);

          document.getElementById("pnrnumber").value=x;
          document.getElementById("citynameform").value=city;
          document.getElementById("citynameto").value=city2;

          if(roundtrip==""){
            document.getElementById("type").value="Oneway";
            document.getElementById("oneway_Date").value=oneway;
            document.getElementById("flighttiming").value=onewaytiming;
            document.getElementById("RoundTrip_date").value="-";
            document.getElementById("returnflight_timing").value="-";
          }else{
            document.getElementById("type").value="RoundTrip";
            document.getElementById("oneway_Date").value=oneway;
            document.getElementById("flighttiming").value=onewaytiming;
            document.getElementById("RoundTrip_date").value=roundtrip;
            document.getElementById("returnflight_timing").value=twowaytiming1;
          }
          document.getElementById("Total_passengers").value=total_passenger;
        document.getElementById("Total_Amount").value=total_money;

function validation(){
    letters=/^[A-Za-z]+$/;
    var phoneno = /^\d{12}$/;
    
    if(document.paynameForm.Name.value==""||document.paynameForm.Name.value==null){
        alert("Name field is empty!");
        return false;
    }
    if(!letters.test(document.paynameForm.Name.value)){
        alert("name should contain alphabets only!");
        return false;
    }
     if(document.paynameForm.card.value==""||document.paynameForm.card.value==null){
        alert("card field is empty!");
        return false;
    }
    if(!document.paynameForm.card.value.match(phoneno)){
        alert("card number is invaild!");
        return false;
    }
    if(document.paynameForm.Month.value==""||document.paynameForm.Month.value==null){
        alert("Month field is empty!");
        return false;
    }
    if(isNaN(document.paynameForm.Month.value))
    {
        alert("Month must be Number only");
        return false;
    }
   
   if(document.paynameForm.Year.value==""||document.paynameForm.Year.value==null){
        alert("Year field is empty!");
        return false;
    }
    if(isNaN(document.paynameForm.Year.value))
    {
        alert("Year must be Number only");
        return false;
    }
    if(document.paynameForm.Year.value<year){
        alert("your card is experied");
        return false;
    }
     if(document.paynameForm.Year.value==year && document.paynameForm.Month.value<month){
        alert("your card is experied");
        return false;
    }

  if(document.paynameForm.cvv.value==""||document.paynameForm.cvv.value==null){
        alert("cvv field is empty!!!");
        return false;
    }
    if(isNaN(document.paynameForm.cvv.value))
    {
        alert(document.paynameForm.Year.value+year+month+document.paynameForm.Month.value);
        alert("cvv number must be Number only!!!");
        return false;
    }
    
          var city=localStorage.getItem("textvalue");
          var city2=localStorage.getItem("textvalue1");
          var oneway=localStorage.getItem("textvalue2");
          var roundtrip=localStorage.getItem("textvalue3");;
          var timing=localStorage.getItem("onewaytiming");
          var timing1=localStorage.getItem("twotiming");

if(roundtrip==""){
    let total1=+adults;
    let total=+Children;

    var s = "";
    for(var i = 1; i <=total1; i += 1) {
        var s1 = "";
         for(var j = 1; j <=total; j += 1) {
        s1 += "L1-" + j + ",";
        }
        s += "L" + i + ",";
      }



    var oneway_finall="Flight Form "+city+" To "+city2+" ,"+oneway+""+timing;
   
}else{


    let total1=+adults;
    let total=+Children;
    
    var s = "";
    for(var i = 1; i <=total; i += 1) {
        var s1 = "";
         for(var j = 1; j <=total1; j += 1) {
        s1 += "L1-" + j + ",";
        }
        s += "L" + i + ",";
      }

       
        alert("                 "+"THANK YOU FOR BOOKING TICKETS"+"\n_______________________________________________________"+
    "\nYour PNR number  : "+
    "\nYour Seat number  : Will Intimate at boarding time"+
    "\nNote:"+
    "\n"+oneway_finall+"\n"+roundtrip_finall+"\n_______________________________________________________"+
    "\n                 HAPPY JOURNEY! FLY AGAIN!"
    

    );
   
        }
        
      
      

       
       

       document.getElementById("pnrnumber").value=x;
}
