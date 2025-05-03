let user = [];
let game = [];
let btns = ["color1", "color2", "color3", "color4"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    started = true;
    levelUp();
  }
});

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function levelUp() {
  user = [];
  level++;

  h2.innerText = `level ${level}`;
  let ranIdx = Math.floor(Math.random() * 3);
  let randColor = btns[ranIdx];
  let randBtn = document.querySelector(`.${randColor}`);

  game.push(randColor);
  btnFlash(randBtn);
}

function checkAns() {
  for (let i = 0; i < user.length; i++) {
    if (user[i] !== game[i]) {
      h2.innerText = "Game over!, press any key to restart";
      reset();
      return;
    }
  }

  setTimeout(levelUp, 1000);
}

function btnPress() {
  let btn = this;
  btnFlash(btn);
  let userColor = btn.getAttribute("id");
  user.push(userColor);

  if (user.length === game.length) {
    checkAns();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let allBtns = document.querySelectorAll(".btn");
  for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
  }
});

function reset() {
  started = false;
  game = [];
  user = [];
  level = 0;
}