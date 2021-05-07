const allLi = document.querySelectorAll(".question-box");
const contentBox = document.querySelector(".content");

const answers = [
  "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  "No more than 2GB. All files in your account must fit your allotted storage space.",
  "Click “Forgot password” from the login page or “Change password” from your profile page A reset link will be emailed to you.",
  "Yes! Send us a message and we’ll process your request no questions asked.",
  "  Chat and email support is available 24/7. Phone lines are open during normal business hours. ",
];

function createList(questionBox) {
  const pAnswer = questionBox.querySelector("p");
  if (!questionBox.contains(pAnswer)) {
    createCorrectAnswer(questionBox);
  } else {
    removeAnswear(questionBox, pAnswer);
  }
}

function createCorrectAnswer(questionBox) {
  const ans = document.createElement("p");
  const arrNum = Number(questionBox.dataset.id) - 1;
  ans.textContent = answers[arrNum];
  questionBox.appendChild(ans);
  let currentHeight = contentBox.offsetHeight;
  let windowsWidth = window.innerWidth;
  if (windowsWidth > 750) {
    currentHeight = currentHeight + 55;
  } else {
    currentHeight = currentHeight + 70;
  }
  contentBox.style.height = currentHeight + "px";
}

function removeAnswear(questionBox, pAnswer) {
  questionBox.removeChild(pAnswer);
  let currentHeight = contentBox.offsetHeight;
  //   currentHeight = currentHeight - 70;
  let windowsWidth = window.innerWidth;
  if (windowsWidth > 750) {
    currentHeight = currentHeight - 55;
  } else {
    currentHeight = currentHeight - 70;
  }

  contentBox.style.height = currentHeight + "px";
}

function transformArrow(questionBox) {
  const arrow = questionBox.querySelector(".arrow");
  arrow.classList.toggle("transform-arrow");
}

function highlightQuestion(questionBox) {
  const question = questionBox.querySelector(".question");
  question.classList.toggle("bold");
}

allLi.forEach((questionBox) => {
  questionBox.addEventListener("click", () => {
    highlightQuestion(questionBox);
    transformArrow(questionBox);
    createList(questionBox);
  });
});
