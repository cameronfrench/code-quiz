var startQuizBtn = document.getElementById("start-quiz"); 

startQuizBtn.onclick = function () {
  console.log('button click')
  showQuestions();
};

var myQuestions = [
  {
    question: "Javascript is an _______ language?",
    answers: ["Object-Oriented", "Object-Based", "Procedural", "None of the above"],
    correctAnswer: 1,
  },
  {
    question: "Which of the following keywords is used to define a variable in Javascript?",
    answers: ["var", "bar", "jar", "bob"],
    correctAnswer: 1,
  },
  {
    question: "Which of the following methods is used to access HTML elements using Javascript?",
    answers: ["targetElement", "thatOneElement", "getElementById", "idElement"],
    correctAnswer: 3,
  },
];

// for (var i = 0; myQuestions.answers.length; i++) {
//   var liEl = document.createElement("li"); 
//   liEl.textContent = myQuestions.answers[i].text; 
//   liEl.appendChild(liEl); 
// }

var questionIndex = 0 

console.log(myQuestions[questionIndex])
console.log(myQuestions[questionIndex].question)

function showQuestions() {

  startQuizBtn.style.display = "none"; 

  var quizAnswers = document.getElementById("answers"); 

  var questionTitle = myQuestions[questionIndex].question

  var questionh3 = document.getElementById("questions")

  questionh3.textContent = questionTitle
  quizAnswers.textContent = ""

  myQuestions[questionIndex].answers.forEach(function(q) {

  // var answerBtn = document.createElement("button");
  var ul = document.getElementById("answers");
  var li = document.createElement("li");
  var answerBtn = document.createElement("button");
  li.appendChild(answerBtn); 
  ul.appendChild(li)

  answerBtn.textContent = q
  answerBtn.style.padding = "10px"
  li.style.listStyle = "none"
  li.style.marginTop = "5px"
  li.style.marginBottom = "5px"


  quizAnswers.appendChild(answerBtn)

  answerBtn.addEventListener("click", checkAnswer)

console.log(q)
} )

}

function checkAnswer () {

questionIndex++

showQuestions()

}








// create another function to have the question increase in index by one and then call show questions again so the questions can be updated




// document.addEventListener("DOMContentLoaded", function(event){
//     startQuizBtn.addEventListener('click', function(event) {
//     buildQuiz()
//     })
// })

//   function buildQuiz() {

//       var output = [];

//       myQuestions.forEach((currentQuestion, questionNumber) => {
//         const answers = [];

//         for (var letter in currentQuestion.answers) {
//           answers.push(
//             `<label>
//             <input type="radio" name="question${questionNumber}" value="${letter}">
//             ${letter} :
//             ${currentQuestion.answers[letter]}
//           </label>`
//           );
//         }

//         output.push(
//           `<div class="question"> ${currentQuestion.question} </div>
//         <div class="answers"> ${answers.join("")} </div>`
//         );
//       });

//       quizContainer.innerHTML = output.join("");
//     }

//     var myQuestions = [ {
//         question: "What is an array?",
//         answers: {
//           a: "",
//           b: "",
//           c: ""
//         },
//         correctAnswer: ""
//       },
//       {
//         question: "",
//         answers: {
//           a: "",
//           b: "",
//           c: ""
//         },
//         correctAnswer: "c"
//       },
//       {
//         question: "",
//         answers: {
//           a: "",
//           b: "",
//           c: ""
//         },
//         correctAnswer: "c"
//       }
//     ]
