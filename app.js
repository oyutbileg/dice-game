//Toglogchiin eeljiig hadgalah huwisagch, negdugeer toglogch 0, 2 aar toglogchiig 1 gej temdegley
var activePlayer = 1;
//Toglogchdiin tsugluulsan onoog hadgalah huwisagch
var score = [0, 0];
//Toglogchiin eeljindee tsugluulsan onoog hadgalah huwisagch
var roundScore = 0;
//Shoonii ali talaaraa buusaniig hadgalah huwisagch 1-6 gesn utgiig ene huwisagchid sanamsargui uisgej ugnu
var diceNumber = Math.floor(Math.random() * 6) + 1;

//Program ehlehed beldey
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";

document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function() {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
});
