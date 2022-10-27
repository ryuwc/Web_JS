// 코드를 작성해 주세요
const cases = ["scissors", "rock", "paper"];

const scissorsButton = document.getElementById("scissors-button");
const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById("paper-button");
console.log(scissorsButton);

let player1Img = document.querySelector("#player1-img");
let player2Img = document.querySelector("#player2-img");
let p1Card;
let p2Card;
let result;
let flag = false;

const count1 = document.querySelector(".countA");
const count2 = document.querySelector(".countB");
let resultCount1 = 0;
let resultCount2 = 0;

const caseSci = document.querySelector("#scissors-button");
const caseRock = document.querySelector("#rock-button");
const casePaper = document.querySelector("#paper-button");
console.log(caseSci);

console.log(caseSci === scissorsButton);

const section = document.querySelector("section");

let i = 0;
const spin = function () {
  i = (i + 1) % 3;
  player2Img.setAttribute("src", `./img/${cases[i]}.png`);
};

section.addEventListener("click", function (event) {
  if (flag) {
    return;
  }
  flag = true;
  const nowClick = event.target.getAttribute("src");
  console.log(event.target);
  player1Img.setAttribute("src", nowClick);
  const p1Status = player1Img.getAttribute("src");
  if (p1Status === "./img/scissors.png") {
    p1Card = "scissors";
  } else if (p1Status === "./img/rock.png") {
    p1Card = "rock";
  } else if (p1Status === "./img/paper.png") {
    p1Card = "paper";
  }
  // console.log(p1Card);
  let spinCon = setInterval(spin, 100);
  setTimeout(() => {
    clearInterval(spinCon);
    const p2Status = player2Img.getAttribute("src");
    // console.log(p2Status);
    if (p2Status === "./img/scissors.png") {
      p2Card = "scissors";
    } else if (p2Status === "./img/rock.png") {
      p2Card = "rock";
    } else if (p2Status === "./img/paper.png") {
      p2Card = "paper";
    }
    // console.log(p2Card);
    if (p1Card === "rock" && p2Card === "paper") {
      result = 2;
      resultCount2 += 1;
      count2.innerText = resultCount2;
    } else if (p1Card === "paper" && p2Card === "scissors") {
      result = 2;
      resultCount2 += 1;
      count2.innerText = resultCount2;
    } else if (p1Card === "scissors" && p2Card === "rock") {
      result = 2;
      resultCount2 += 1;
      count2.innerText = resultCount2;
    } else if (p1Card === "paper" && p2Card === "rock") {
      result = 1;
      resultCount1 += 1;
      count1.innerText = resultCount1;
    } else if (p1Card === "scissors" && p2Card === "paper") {
      result = 1;
      resultCount1 += 1;
      count1.innerText = resultCount1;
    } else if (p1Card === "rock" && p2Card === "scissors") {
      result = 1;
      resultCount1 += 1;
      count1.innerText = resultCount1;
    } else if (p1Card === p2Card) {
      result = 0;
    }

    const modal = document.querySelector(".modal");
    const modalContent = document.querySelector(".modal-content");

    console.log(result);
    if (result === 0) {
      modalContent.innerText = "무승부";
      modal.style.display = "flex";
    } else if (result === 1) {
      modalContent.innerText = "플레이어 1의 승리";
      modal.style.display = "flex";
    } else if (result === 2) {
      modalContent.innerText = "플레이어 2의 승리";
      modal.style.display = "flex";
    }
    document.body.addEventListener("click", function (event) {
      modal.style.display = "none";
    });
    flag = false;
  }, 3000);
});
