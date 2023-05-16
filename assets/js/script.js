var startQuizBtn = document.getElementById("start-quiz");
var resultsEl = document.getElementById("results");
var quizTimer = document.querySelector(".time");
var timer = 15;
var questionIndex = 0;

// start quiz button with a fuction to trigger the quiz questions (showQuestons())
startQuizBtn.onclick = function () {
  showQuestions(), countdownTimer();
  // reset timer and score
  userScore = 0;
};

// function that starts timer when you click start quiz
function countdownTimer() {
  var timeLeft = setInterval(() => {
    if (timer >= 0 || questionIndex < 3) {
      quizTimer.textContent = timer + " seconds left";
      timer--;
      questionIndex ++;
    } else {
      clearInterval(timeLeft);

      endQuiz(); 
    }
  }, 1000);
}
// the questions that will be asked during the quiz
var myQuestions = [
  {
    questionTitle: "Javascript is an _______ language?",
    options: [
      "Object-Oriented",
      "Object-Based",
      "Procedural",
      "None of the above",
    ],
    answer: "Object-Based",
  },
  {
    questionTitle:
      "Which of the following keywords is used to define a variable in Javascript?",
    options: ["var", "bar", "jar", "bob"],
    answer: "var",
  },
  {
    questionTitle:
      "Which of the following methods is used to access HTML elements using Javascript?",
    options: ["targetElement", "thatOneElement", "getElementById", "idElement"],
    answer: "getElementById",
  },
];

var answerBtn0 = document.querySelector("#option0");
var answerBtn1 = document.querySelector("#option1");
var answerBtn2 = document.querySelector("#option2");
var answerBtn3 = document.querySelector("#option3");

var answers = [answerBtn0, answerBtn1, answerBtn2, answerBtn3];

// main function to show quiz question in a sequential order after clicking start quiz
function showQuestions() {
  startQuizBtn.style.display = "none";
  var question = myQuestions[questionIndex];
  var answerOptions = question.options;

  var questionEl = document.querySelector("#questions");
  questionEl.textContent = question.questionTitle;

  for (var i = 0; i < answerOptions.length; i++) {
    var answerChoices = answerOptions[i];

    var answerBtn = answers[i];

    answerBtn.textContent = answerChoices;
  }
}

function correctAnswer(answerBtn) {
  var correct = question.answer;
  var question = myQuestions[questionIndex];
  return answerBtn.textContent === correct;
}

// 

function checkAnswer(event) {
  var answerBtn = event.target;
  // correct answer
  if (correctAnswer(answerBtn)) {
    score = score + 20;
  }
  // wrong answer
  else {
    if (timer > 10) {
      timer = timer - 10;
    } else {
      timer = 0;
      endQuiz();
    }
  }
  questionIndex++;

  // if no more questions, end quiz
  if (questionIndex < questions.length) {
    showQuestions();
  } else {
    endQuiz();
  }
}

document
  .querySelector("#answer-buttons")
  .addEventListener("click", checkAnswer);

function endQuiz() {
  var finalScore = document.querySelector("#score");
  finalScore.textContent = "You scored " + score;
}




// function userScore() {
  //   var quizAnswers = document.getElementById("answers");
  //   quizAnswers.textContent = "";
  //   var index = answerBtn.dataset.id;
  //   var selectedAnswer = index;
  //   var correct = myQuestions[questionIndex].correctId;
  
  //   if (selectedAnswer === correct) {
  //     scoreCounter = scoreCounter + 1;
  //   }
  // }