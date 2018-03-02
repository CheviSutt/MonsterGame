// JavaScript Document
// create an array of food items for the monster to eat
let foodarr = ["Taco", "Rice", "Chicken", "BB8", "Apple", "War Heads"];
let currentfood = " ";
// start the game with a function
function rungame(){
    getfood();
}
// randomly select a food to put in the box
function getfood(){
    let randomfood = Math.floor((Math.random() * foodarr.length) + 0);
    setfood(foodarr[randomfood]);
}
// put the food in the box
function setfood(food){
    currentfood = food;
    document.getElementById("foodbox").innerHTML = food;
}

function eatit(){
    //if the food is good
    if(currentfood == "Taco" || currentfood == "Rice" || currentfood == "Chicken"){
        document.getElementById("commentbox").innerHTML = "Delicious";
    }
    // if the food is bad
    else{
        document.getElementById("commentbox").innerHTML = "Disgusting";
    }
    getfood();
}
function trashit(){
    //if the food is good
    if(currentfood == "BB8" || currentfood == "Apple" || currentfood == "War Heads"){
        document.getElementById("commentbox").innerHTML = "Delicious";

    }
    // if the food is bad
    else{
        document.getElementById("commentbox").innerHTML = "Disgusting";
    }
     getfood(); 
}

//function calculate(){
   // var boxone = document.getElementById("numberone").value;
    //var boxtwo = document.getElementById("numbertwo").value;
    //var finalAnswer = runThis(boxone, boxtwo);
    //document.getElementById("answer").innerHTML = finalAnswer;
//}
//function runThis(value1, value2){
    //console.log(value1);
    //return Number(value1) + Number(value2);
//}