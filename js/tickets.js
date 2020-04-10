// function getTicketInfo(){
    
//     var ticketSelection = document.getElementById("ticketOptions").value;
    
//      var ticketCost = 0;
    
//     if(ticketSelection === "- - -"){
//     } else if(ticketSelection === "single's package"){
            
//         for(var i = 0; i < ticketOptions.length; i++){
            
//             if(ticketOptions[i].ticketType === "single"){
//             ticketCost = ticketCost + ticketOptions[i].ticketPrice;
                
//             }      
//         }    
//     } else if(ticketSelection === "couple's package"){
            
//         for(var i = 0; i < ticketOptions.length; i++){
            
//             if(ticketOptions[i].ticketType === "couple"){
//             ticketCost = ticketCost + ticketOptions[i].ticketPrice;
                
//             }      
//         }    
//     } else if(ticketSelection === "friendship package"){
            
//         for(var i = 0; i < ticketOptions.length; i++){
            
//             if(ticketOptions[i].ticketType === "friends"){
//             ticketCost = ticketCost + ticketOptions[i].ticketPrice;
                
//             }      
//         }    
//     }
//     else if(ticketSelection === "family package"){
            
//         for(var i = 0; i < ticketOptions.length; i++){
            
//             if(ticketOptions[i].ticketType === "family"){
//             ticketCost = ticketCost + ticketOptions[i].ticketPrice;
                
//             }      
//         }    
//     }
              
              
//     document.getElementById("ticketTotalOutput").textContent = ticketCost;   
//     return ticketCost;
    
    
    
// } // End of getTicketInfo function
   


// function getTotalTicketCost(){
    
//     var ticketTypeCost = getTicketInfo();
//     var ticketInput = +document.getElementById("ticketRange").value;
    
//     var updatedPrice = Math.round(ticketTypeCost * ticketInput);
    
    
//      document.getElementById("ticketTotalOutput").textContent = updatedPrice; 

// }
    
    

    
    /*
    
    var ticket = 0;
    var ticketCost = 0;
    
    for(var i = 0; i < ticketOptions.length; i++){
        if(ticketOptions[i].ticketType === ticketSelection){
            
        }
    }
    
    for(var i = 0; i < ticketOptions.length; i++){
        if(ticketOptions[i].ticketPrice === ticket){
            ticketCost = ticketOptions[i].ticketPrice;
        }
    }
    
    var totalTicketCost = ticket + ticketCost;
    
    document.getElementById("total-here").textContent = "R " + totalTicketCost;
}

*/
    // console.log(addTicketsTotal());
//     console.log("working");

//     var form = document.getElementById("form");

//     form.onload = function (){
//         singlesQuanitity = document.getElementById("singles-quantity");
//         singleType = document.getElementById("single-type");
//        console.log(singlesQuanitity);
//     }


// // console.log(singleType);

// var couplesQuanitity = document.getElementById("couples-quantity") ;
// var friendsQuanitity = document.getElementById("friends-quantity");
// var familyQuanitity = document.getElementById("family-quantity");

// function test(){
//     console.log(singlesQuanitity.value);
// }

// var Quantities = [singlesQuanitity, couplesQuanitity, friendsQuanitity, familyQuanitity];

// addTicketsTotal();

// function addTicketsTotal (){

// var total = singlesQuanitity + couplesQuanitity + friendsQuanitity + familyQuanitity;
// return total;

// }

// var output = addTicketsTotal.value;

function test (){
    var singlesQuantity = +document.getElementById("singles-quantity").value;
    var couplesQuantity = +document.getElementById("couples-quantity").value;
    var friendsQuantity = +document.getElementById("friends-quantity").value;
    var familyQuantity = +document.getElementById("family-quantity").value;
    var totalTickets = document.getElementById("total-ticket-output");
    var totalFamilyTickets = document.getElementById("total-family-ticket-output");
    var totalPrice = document.getElementById("total-price-output");
    var singlesPrice = 100;
    var couplesPrice = 150;
    var friendsPrice = 200;
    var familyPrice = 250;
    
    var ticketCalculation = singlesQuantity + couplesQuantity * 2 + friendsQuantity * 3 + familyQuantity * 5;
    totalTickets.innerHTML = ticketCalculation;
    totalFamilyTickets.innerHTML = familyQuantity * 5;

    var priceCalculation = singlesQuantity * singlesPrice + couplesQuantity  * couplesPrice + friendsQuantity  * friendsPrice + familyQuantity  * familyPrice;
    totalPrice.innerHTML = priceCalculation;
  
}

// function getSinglesQuantity(){
//         var singlesQuantity = document.getElementById("singles-quantity").value;
//     console.log(singlesQuantity);
//     return singlesQuantity;
// }

// function getCouplesQuantity(){
//     var couplesQuantity = document.getElementById("couples-quantity").value;
// console.log(couplesQuantity);
// return couplesQuantity;
// }

// function getFriendsQuantity(){
//     var friendsQuantity = document.getElementById("friends-quantity").value;
// console.log(friendsQuantity);
// return friendsQuantity;
// }

// function getFamilyQuantity(){
//     var familyQuantity = document.getElementById("family-quantity").value;
// console.log(familyQuantity);
// return familyQuantity;
// }

// function addQuantities(singlesQuanitity, couplesQuanitity, friendsQuanitity, familyQuanitity){
//     this.singlesQuanitity = getSinglesQuantity();
//     this.couplesQuanitity = getCouplesQuantity();
//     this.friendsQuanitity = getFriendsQuantity();
//     this.familyQuanitity = getFamilyQuantity();

//     var calculation = singlesQuanitity + couplesQuanitity + friendsQuanitity + familyQuanitity;
    
// }

// console.log(addQuantities);