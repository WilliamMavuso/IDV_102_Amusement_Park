console.log("Working");

// class Ride {
//     constructor (title, rating,rides)
//     {
//         this.title = title;
//         this.rating = rating;
//         this.rides = rides;
//     }
// }

// var bumperCars = new Ride("bumperCars", 5, rideInputFromUser);
// var carousel = new Ride("Carousel", 4, rideInputFromUser);
// var theHauntedMansion = new Ride("theHauntedMansion", 3, rideInputFromUser);
// var loveSupreme = new Ride("loveSupreme", 2, rideInputFromUser);
// var rollerCoaster = new Ride("rollerCoaster", 1, rideInputFromUser);

// function getRatings()
// {
//     var ratings = [];
//     ratings.push(bumperCars.rating, carousel.rating, theHauntedMansion.rating, loveSupreme.rating, rollerCoaster.rating);
//     console.log(ratings);
// }

// getRatings();

// console.log(bumperCars);

function getTotalPrice(){

    //price variables
    var bumperPrice = 20;
    var carouselPrice = 40;
    var mansionPrice = 60;
    var lovePrice = 80;
    var rollerCoasterPrice = 100;

    //Ride quantities
    var bumperRide = +document.getElementById("bumper-ride").value;
    var carouselRide = +document.getElementById("carousel-ride").value;
    var mansionRide = +document.getElementById("mansion-ride").value;
    var loveRide = +document.getElementById("love-ride").value;
    var rollerCoasterRide = +document.getElementById("roller-ride").value;

    // console.log(bumperRide * bumperPrice +);

    //Output variable
    var totalOutput = document.getElementById("total");
   

    //Price calculations
    var bumperTotal = bumperRide * bumperPrice; 
    var carouselTotal =  carouselRide * carouselPrice;
    var mansionTotal =  mansionRide * mansionPrice; 
    var loveTotal = loveRide * lovePrice;
    var rollerCoasterTotal = rollerCoasterRide * rollerCoasterPrice;

    var total = bumperTotal + carouselTotal + mansionTotal + loveTotal + rollerCoasterTotal;

    totalOutput.innerHTML = "R" + total + ". 00";
    console.log(total);

}

function getRideRatings(){
    
}

function main()
{
            //Prevent form default behaviour onSubmit
            var form = document.getElementById("form");
            function handleForm(event) { event.preventDefault(); } 
            form.addEventListener('submit', handleForm);
}

