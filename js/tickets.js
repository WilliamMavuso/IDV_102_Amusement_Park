
function ticketAdmin ()
{

    //Quantity variables
    var singlesQuantity = +document.getElementById("singles-quantity").value;
    var couplesQuantity = +document.getElementById("couples-quantity").value;
    var friendsQuantity = +document.getElementById("friends-quantity").value;
    var familyQuantity = +document.getElementById("family-quantity").value;

    //Output variables
    var totalTickets = document.getElementById("total-ticket-output");
    var totalSingleTickets = document.getElementById("total-single-ticket-output");
    var totalCoupleTickets = document.getElementById("total-couple-ticket-output");
    var totalFriendsTickets = document.getElementById("total-friends-ticket-output");
    var totalFamilyTickets = document.getElementById("total-family-ticket-output");
    var totalPrice = document.getElementById("total-price-output");

    //Price variables
    var singlesPrice = 100;
    var couplesPrice = 150;
    var friendsPrice = 200;
    var familyPrice = 250;
    
    // Ticket calculation that adds the quantity of all tickets, multiplied by the x value of each package, inorder to get the total number of tickets sold.
    var ticketCalculation = singlesQuantity + couplesQuantity * 2 + friendsQuantity * 3 + familyQuantity * 5;

    //Set the ticketCalculation to an output
    totalTickets.innerHTML = ticketCalculation;
    totalSingleTickets.innerHTML = singlesQuantity;
    totalCoupleTickets.innerHTML = couplesQuantity * 2;
    totalFriendsTickets.innerHTML = friendsQuantity * 3;
    totalFamilyTickets.innerHTML = familyQuantity * 5;

    // Price calculation that adds the quantity of all tickets, multiplied by the accompanying price, inorder to get the total price of all the tickets sold/purchased.
    var priceCalculation = singlesQuantity * singlesPrice + couplesQuantity  * couplesPrice + friendsQuantity  * friendsPrice + familyQuantity  * familyPrice;
    totalPrice.innerHTML = "R " + priceCalculation + ".00";

}

function ticketGenerator()
{
        //Quantity variables
        var singlesQuantity = +document.getElementById("singles-quantity").value;
        var couplesQuantity = +document.getElementById("couples-quantity").value;
        var friendsQuantity = +document.getElementById("friends-quantity").value;
        var familyQuantity = +document.getElementById("family-quantity").value;

            //Ticket generator that adds purchased tickets to the ticket-sales array
    var ticketSales = [];

    ticketSales.push(singlesQuantity, couplesQuantity, friendsQuantity, familyQuantity);
    console.log(ticketSales);
    
    // Ticket calculation that adds the quantity of all tickets, multiplied by the x value of each package, inorder to get the total number of tickets sold.
    var ticketCalculation = singlesQuantity + couplesQuantity * 2 + friendsQuantity * 3 + familyQuantity * 5;
    
    var form = document.getElementById("form");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);
    
}

function clearText()
{
    //Output variables
    var totalTickets = document.getElementById("total-ticket-output");
    var totalFamilyTickets = document.getElementById("total-family-ticket-output");
    var totalPrice = document.getElementById("total-price-output");

    totalTickets.innerHTML= 0;
    totalFamilyTickets.innerHTML = 0;
    totalPrice.innerHTML = "R .00";
}