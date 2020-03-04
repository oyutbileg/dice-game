//Toglogchiin eeljiig hadgalah huwisagch, negdugeer toglogch 0, 2 aar toglogchiig 1 gej temdegley
var activePlayer = 0;
//Toglogchdiin niit tsugluulsan onoog hadgalah huwisagch
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
// Shoog shideh even listener
document.querySelector(".btn-roll").addEventListener("click", function() {
  //1 ees 6 hurtel sanamsargui neg toog gargaj avna
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  //shoonii zurgiig web deer gargaj irne
  diceDom.style.display = "block";
  //buusan sanamsargui toond hargalzah shoonii zurgiig web deer gargaj irne
  diceDom.src = "dice-" + diceNumber + ".png";
  //Toglogchiin eeljiin onoog uurchluh
  if (diceNumber !== 1) {
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    //1 buusan bol toglogchiin eeljiig solih
    //Toglogchiin onoog 0 bolgon
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;
    //3 valsan operator ashiglay
    //activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    if (activePlayer === 0) {
      activePlayer = 1;
    } else {
      activePlayer = 0;
    }
    //Ulaan tsegiig shiluuleh

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    //Shoog tur alga bolgoh
    diceDom.style.display = "none";
  }
});
