var name = window.prompt("Hello! Please enter your name");
document.getElementById("greeting").innerHTML += ", "+name;
var enterDays = document.getElementById("enterDays");
var images = ["CostaRicaManuelAntonio.jpg", "CostaRicaManuelAntonio2.jpg", "CostaRicaManuelAntonio3.jpg", "CostaRicaManuelAntonio4.jpg" ];
var currentImage = 0;
setInterval(changeImage, 5000);
enterDays.onclick = calculateDays;

function changeImage(){
    currentImage++;
    if(currentImage > images.length - 1){
        currentImage = 0;
    }
    document.body.style.backgroundImage = "url(" + images[currentImage] + ")";
}
function calculateDays(){
    var daysInput = document.getElementById("days");
    var days = daysInput.value;
    var daysMessage = document.getElementById("daysMessage");
    if(days < 4){
        daysMessage.innerHTML = "Short trips are always worth it!";
    }
    else if(days < 7){
        daysMessage.innerHTML = "Cool, you'll be there for almost a week!";
    }
    else{
        daysMessage.innerHTML = "You'll have plenty of time to relax and have fun!";
    }
    var hours = days * 24;
    var minutes = hours * 60;
    var seconds = minutes * 60;
    var hoursMessage = document.getElementById("hoursMessage");
    hoursMessage.innerHTML = "That means you will be traveling for " + hours + " hours";
    var minutesMessage = document.getElementById("minutesMessage");
    minutesMessage.innerHTML = "That means you will be traveling for " + minutes + " minutes";
    var secondsMessage = document.getElementById("secondsMessage");
    secondsMessage.innerHTML = "That means you will be traveling for " + seconds + " seconds";
    var timingNext = document.getElementById("timingNext");
    timingNext.removeAttribute("hidden");
    timingNext.onclick = showBudget;
     }
     
     function showBudget() {
        var vbudgetSection = document.getElementById("budgetSection");
        vbudgetSection.removeAttribute("hidden");
        var enterBudget = document.getElementById("enterBudget");
        enterBudget.onclick = CalculateBudget;
    }
    function CalculateBudget(){
        var daysInput = document.getElementById("days");
        var days = daysInput.value;
        var tripBudget = document.getElementById("dailyBudget"); 
        var tripBudgetUSD = tripBudget.value;
        var tripExchange= tripBudgetUSD * 572;
        var tripDailyBudget = tripExchange / days;
        var tripExchangeMsg = document.getElementById("tripExchangeMsg");
        tripExchangeMsg.innerHTML = "Colones budget is " + tripExchange + " CRC";
        var dailyExchangeMsg = document.getElementById("dailyExchangeMsg");
        dailyExchangeMsg.innerHTML = "Colones budget daily " + tripDailyBudget + " CRC";

    }