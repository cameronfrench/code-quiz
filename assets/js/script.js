var startQuizBtn = document.getElementById("start-quiz"); 

// start quiz button with a fuction to trigger the quiz questions (showQuestons())
startQuizBtn.onclick = function () {
  console.log('button click')
  showQuestions(), setTime();
};

var timeEl = document.querySelector(".time");

var resultsEl = document.getElementById("results");

var secondsLeft = 15;
// function that starts timer when you click start quiz
function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft; 

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append results of quiz
    }

  }, 1000);
}


// the questions that will be asked during the quiz 
var myQuestions = [
  {
    question: "Javascript is an _______ language?",
    answers: ["Object-Oriented", "Object-Based", "Procedural", "None of the above"],
    correctId: 1,
  },
  {
    question: "Which of the following keywords is used to define a variable in Javascript?",
    answers: ["var", "bar", "jar", "bob"],
    correctId: 1,
  },
  {
    question: "Which of the following methods is used to access HTML elements using Javascript?",
    answers: ["targetElement", "thatOneElement", "getElementById", "idElement"],
    correctId: 3,
  },
];

var questionIndex = 0 

console.log(myQuestions[questionIndex])
console.log(myQuestions[questionIndex].question)

// main function to show quiz question in a sequential order after clicking start quiz 
function showQuestions() {
  
  startQuizBtn.style.display = "none"; 

  var quizAnswers = document.getElementById("answers"); 

  var questionTitle = myQuestions[questionIndex].question

  var questionh3 = document.getElementById("questions")

  questionh3.textContent = questionTitle
  quizAnswers.textContent = ""

  myQuestions[questionIndex].answers.forEach(function(q) {

  // takes answers and turns them into buttons below questions
  var ul = document.getElementById("answers");
  var li = document.createElement("li");
  var answerBtn = document.createElement("button");
  li.appendChild(answerBtn); 
  ul.appendChild(li)
// button styling
  answerBtn.textContent = q
  answerBtn.style.padding = "10px"
  li.style.listStyle = "none"
  li.style.marginTop = "5px"
  li.style.marginBottom = "5px"

  quizAnswers.appendChild(answerBtn)

  answerBtn.addEventListener("click", checkAnswer)
})
}

var scoreCounter = 0;
var answerIndex = 0;

function userScore() {

  var quizAnswers = document.getElementById("answers");
  quizAnswers.textContent = ""
  var index = answerBtn.dataset.id
  var selectedAnswer = index;
  var correct = myQuestions[questionIndex].correctId;

  if (selectedAnswer === correct) {
    scoreCounter = scoreCounter + 1;
  }
  


}

function checkAnswer() {
  questionIndex++
showQuestions()

}
  
