document.querySelector(".massage").textContent = "Are you ready!😉";
let startguess = Math.trunc(Math.random() * 30 + 1);
let scores = 30;
let highscore = 0;
function displaymassage(massage) {
  document.querySelector(".massage").textContent = massage;
}
document.querySelector(".score").textContent = scores;
document.querySelector(".check").addEventListener("click", function () {
  const guessnumber = Number(document.querySelector(".guess").value);
  if (!guessnumber) {
    displaymassage("No Number!😯");
  }
  //Hight number
  else if (startguess !== guessnumber) {
    if (scores > 1) {
      displaymassage(
        startguess < guessnumber
          ? "Your Number Is Hihgt😏"
          : "Your Number Is Low😏"
      );
      scores--;
      document.querySelector(".score").textContent = scores;
    } else {
      document.querySelector(".label-score").textContent = "SORRY You Lost 🤦‍♀️";
    }
  }

  //win
  else if (startguess === guessnumber) {
    displaymassage("THE BAST GUESS😁");
    document.querySelector("body").style.backgroundColor = "gray";
    if (scores > highscore) {
      highscore = scores;
      document.querySelector(".hightscore").textContent = scores;
    }
    document.querySelector(".number").style.width = "30rem";
  }
});
//again button
document.querySelector(".again").addEventListener("click", function () {
  startguess = Math.trunc(Math.random() * 30 + 1);
  scores = 30;
  document.querySelector(".score").textContent = scores;
  displaymassage("Are you ready!😉");
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
});
