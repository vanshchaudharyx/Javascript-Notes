// SIMON Says Game =>

let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;

let btns = ["yellow", "red", "purple", "green"];

let h2 = document.querySelector("h2");

// Detect key press to start the game
document.addEventListener("keydown", function () {
  if (started == false) {
    console.log("Game Started");
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
  userSeq = [];

  level++;

  h2.innerText = `Level ${level}`;

  // Random button choose
  let randIdx = Math.floor(Math.random() * 4);
  let randColor = btns[randIdx];

  let randbtn = document.querySelector(`.${randColor}`);

  gameSeq.push(randColor);

  console.log(gameSeq);

  // Button flash
  btnFlash(randbtn);
}

function checkAns(idx) {
  console.log("curr level", level);

  if (userSeq[idx] == gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game Over! Your score was <b>${level}</b><br>Press any key to start`;

    reset();
  }
}

function btnPress() {
  let btn = this;

  btnFlash(btn);

  let userColor = btn.getAttribute("id");

  userSeq.push(userColor);

  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");

for (let btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
