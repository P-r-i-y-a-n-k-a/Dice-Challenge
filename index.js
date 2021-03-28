var randomNumber1 = Math.floor((Math.random()*6)+1);//1-6

var randomDice = "dice" + randomNumber1 + ".png";

var imgj = "images/" + randomDice;//dicen.png

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src" , imgj);
 
var randomNumber2 = Math.floor((Math.random()*6)+1);

var randomDice2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src" , randomDice2);

if(randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML = "<em>Draw</em>";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "<em>Player 2 wins</em>";
}
else if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "<em>Player 1 Wins</em>";
}