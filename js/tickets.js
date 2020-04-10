function getTicketInfo(){
    
    var ticketSelection = document.getElementById("ticketOptions").value;
    
     var ticketCost = 0;
    
    if(ticketSelection === "- - -"){
    } else if(ticketSelection === "single's package"){
            
        for(var i = 0; i < ticketOptions.length; i++){
            
            if(ticketOptions[i].ticketType === "single"){
            ticketCost = ticketCost + ticketOptions[i].ticketPrice;
                
            }      
        }    
    } else if(ticketSelection === "couple's package"){
            
        for(var i = 0; i < ticketOptions.length; i++){
            
            if(ticketOptions[i].ticketType === "couple"){
            ticketCost = ticketCost + ticketOptions[i].ticketPrice;
                
            }      
        }    
    } else if(ticketSelection === "friendship package"){
            
        for(var i = 0; i < ticketOptions.length; i++){
            
            if(ticketOptions[i].ticketType === "friends"){
            ticketCost = ticketCost + ticketOptions[i].ticketPrice;
                
            }      
        }    
    }
    else if(ticketSelection === "family package"){
            
        for(var i = 0; i < ticketOptions.length; i++){
            
            if(ticketOptions[i].ticketType === "family"){
            ticketCost = ticketCost + ticketOptions[i].ticketPrice;
                
            }      
        }    
    }
              
              
    document.getElementById("ticketTotalOutput").textContent = ticketCost;   
    return ticketCost;
    
    
    
} // End of getTicketInfo function
   


function getTotalTicketCost(){
    
    var ticketTypeCost = getTicketInfo();
    var ticketInput = +document.getElementById("ticketRange").value;
    
    var updatedPrice = Math.round(ticketTypeCost * ticketInput);
    
    
     document.getElementById("ticketTotalOutput").textContent = updatedPrice; 

}
    
    
    
    
    
    
    
    
    
    
    
    
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
    