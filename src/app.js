/* eslint-disable */
import "bootstrap";
import "./style.css";

/*import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";*/

window.onload = function() {
  //write your code here
  newCard();

  setInterval(newCard, 10000);
};

var cardSuit = "";
var cardNum = 0;

//const button = document.getElementById("btn1");
//const buttonTwo = document.getElementById("btn2");
const buttonThree = document.getElementById("btn3");
const buttonFour = document.getElementById("btn4");

var rndSuit = Math.floor(Math.random() * (4 - 0));
var rndNum = Math.floor(Math.random() * (13 - 1));

cardNum = rndNum;
setSuit(rndSuit);

//button.addEventListener("click", replaceSuit);
//buttonTwo.addEventListener("click", replaceNum);
buttonThree.addEventListener("click", newCard);
buttonFour.addEventListener("click", changeSize);

/*function alertRnd() {
  alert(target.target);
}*/

function setSuit(num) {
  switch (num) {
    case 0:
      cardSuit = "<span class='diamond'>♦</span>";
      return cardSuit;

    case 1:
      cardSuit = "<span class='heart'>♥</span>";
      return cardSuit;

    case 2:
      cardSuit = "<span class='spade'>♠</span>";
      return cardSuit;

    case 3:
      cardSuit = "<span class='club'>♣</span>";
      return cardSuit;

    default:
      cardSuit = "Algo falla";
      return cardSuit;
  }
}

/*function replaceSuit() {
  let result = cardSuit;

  //alert(cardSuit);

  let target = document.querySelectorAll("#suit");
  for (let i = 0; i < target.length; i++) {
    target[i].innerHTML = result;
  }
}

function replaceNum() {
  let result = cardNum;
  let target = document.querySelector("#number");
  target.innerHTML = result;
}*/

function newCard() {
  let newRndSuit = Math.floor(Math.random() * (3 - 0));
  let newRndCard = Math.floor(Math.random() * (13 - 0) + 1);
  if (newRndCard === 0) {
    newRndCard = 1;
  }

  setSuit(newRndSuit);

  let newSuit = cardSuit;
  let newNum = newRndCard;

  let target = document.querySelectorAll("#suit");
  for (let i = 0; i < target.length; i++) {
    target[i].innerHTML = newSuit;
  }

  let targetTwo = document.querySelector("#number");
  targetTwo.innerHTML = newNum;
}

function changeSize() {
  let getWidth = document.getElementById("getWidth").value;
  let getHeight = document.getElementById("getHeight").value;

  getWidth = parseInt(getWidth);
  getHeight = parseInt(getHeight);

  document.querySelector(".card").style.width = getWidth + "px";
  document.querySelector(".card").style.height = getHeight + "px";
}
