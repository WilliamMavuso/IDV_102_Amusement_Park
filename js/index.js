function lengthConverter() {

 var km = +document.getElementById("inputMeters").value;
 var calculation = Math.round(km * 0.621371);  

 console.log(calculation)
 
  
 
 if (calculation == 1){
  document.getElementById("outputMeters").innerHTML = "= " + calculation + " mile";
 }
 else{
  document.getElementById("outputMeters").innerHTML = "= " + calculation + " miles";
 }
}
