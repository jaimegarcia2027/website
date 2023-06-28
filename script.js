var firstname = "Jaime";
var lastname = "Garcia";
var numberOfSibilings = 4;
var hasPets = false;


console.log(firstname);
console.log(lastname);
console.log(numberOfSibilings);
console.log(hasPets); 
if(hasPets === true){
console.log("They are playful -- dogs have four legs");

}


if (hasPets === false){
    console.log("Humans are the Goat");

}
var number = 0;
while (number < 15){ 
    console.log("1 2 3 4 5 6 7 8 9 10 11 12 13 14 15");
    number++;

}
var button = document.getElementById("kansascity");
var h1 = document.getElementById("KCMO")
var body = document.body;

button.addEventListener("click", function(){

h1.innerHTML = "jaime";
}) 