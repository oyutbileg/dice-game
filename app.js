var diceDom = document.querySelector(".dice");
var activePlayer;
var score;
var roundScore = 0;
var isNewGame;
//Togloomiig ehluuleh
initGame();
//Shine togloom ehluuleh event listiner
function initGame() {
  //toglool ehellee gedeg tuluwd orno
  isNewGame = true;
  //Toglogchiin eeljiig hadgalah huwisagch, negdugeer toglogch 0, 2 aar toglogchiig 1 gej temdegley
  activePlayer = 0;
  //Toglogchdiin niit tsugluulsan onoog hadgalah huwisagch
  score = [0, 0];
  //Toglogchiin eeljindee tsugluulsan onoog hadgalah huwisagch
  roundScore = 0;

  //Program ehlehed beldey
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  //toglogchdiin neriig butsaad gargah
  document.getElementById("name-0").textContent = "Player-1";
  document.getElementById("name-1").textContent = "Player-2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
  diceDom.style.display = "none";
}
// Shoog shideh even listener
document.querySelector(".btn-roll").addEventListener("click", function() {
  if (isNewGame === true) {
    //1 ees 6 hurtel sanamsargui neg toog gargaj avna
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    //shoonii zurgiig web deer gargaj irne
    diceDom.style.display = "block";
    //buusan sanamsargui toond hargalzah shoonii zurgiig web deer gargaj irne
    diceDom.src = "dice-" + diceNumber + ".png";
    //Toglogchiin eeljiin onoog uurchluh
    if (diceNumber !== 1) {
      roundScore = roundScore + diceNumber;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      //switch to next player
      switchToNextPlayer();
    }
  }
});
//Tsugluulsan onoogoogoo hadgalah Hold button
document.querySelector(".btn-hold").addEventListener("click", function() {
  if (isNewGame) {
    //Tsugluulsan onoog gloabal onoond ni nemne
    // if (activePlayer === 0) {
    //   score[0] = score[0] + roundScore;
    // } else {
    //   score[1] = score[1] + roundScore;
    // }
    score[activePlayer] = score[activePlayer] + roundScore;
    //Hojson esehiig shalgah
    document.getElementById("score-" + activePlayer).textContent =
      score[activePlayer];
    if (score[activePlayer] >= 15) {
      //togloomiig duussan tuluwd oruulna
      isNewGame = false;
      document.getElementById("name-" + activePlayer).textContent =
        "WINNER!!!!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
    } else {
      //toglogchiin eeljiig solih
      switchToNextPlayer();
    }
  }
});
//Eelj solidog
function switchToNextPlayer() {
  //Eeljiin onoog 0 lon
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
//new game event listener
document.querySelector(".btn-new").addEventListener("click", initGame);
