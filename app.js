//Toglogchiin eeljiig hadgalah huwisagch, negdugeer toglogch 0, 2 aar toglogchiig 1 gej temdegley
var activePlayer = 1;
//Toglogchdiin tsugluulsan onoog hadgalah huwisagch
var score = [0, 0];
//Toglogchiin eeljindee tsugluulsan onoog hadgalah huwisagch
var roundScore = 0;
//Shoonii ali talaaraa buusaniig hadgalah huwisagch 1-6 gesn utgiig ene huwisagchid sanamsargui uisgej ugnu
var dice = Math.floor(Math.random() * 6) + 1;
//window.document.querySelector("#score-0").textContent = dice;

//document.querySelector("#score-1").innerHTML = "<em>Yes!</em>";

//Program ehlehed beldey
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;

document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;

document.querySelector(".dice").style.display = "none";

console.log("Shoo:  " + dice);
