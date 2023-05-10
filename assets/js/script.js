var quizCont = document.getElementById("quiz-container");
var quizQuestions = document.getElementById('quiz')
var quizRules = document.getElementById("quiz-rules");
var startQuizBtn = document.getElementById("start-quiz");

quizRules.textContent =
  "Welcome to the Javascript fundamentals quiz! Answer the questions to test your Javascript knowledge. This quiz does have a time limit. If you answer the question incorrectly, you will be penalized with ten seconds off your timer. To begin the quiz, select Start Quiz below.";

quizRules.style.textAlign = "center";
quizRules.setAttribute("style", "color:black", "padding:15px");

quizCont.style.textAlign = 'center'

quizQuestions.style.textAlign = 'left'
quizQuestions.style.marginTop = '25px'
quizQuestions.style.marginLeft = '200px'


document.addEventListener("DOMContentLoaded", function(event){
    startQuizBtn.addEventListener('click', function(event) {
    buildQuiz()
    })
})

var hidden = false;
function action() {
    hidden = !hidden;
    if(hidden) {
        document.getElementById('start-quiz').style.visibility = 'hidden';
    } else {
        document.getElementById('start-quiz').style.visibility = 'visible';
    }
}

function buildQuiz() {
      const output = [];
    
      myQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
    
        for (var letter in currentQuestion.answers) {
          answers.push(
            `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
          );
        }
    
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
        );
      });
    
      quizContainer.innerHTML = output.join("");
    }
    
    
    var quizContainer = document.getElementById("quiz");
    var showQuizBtn = document.getElementById('start-quiz')
    var myQuestions = [{
        question: "Who is the strongest?",
        answers: {
          a: "Superman",
          b: "The Terminator",
          c: "Waluigi, obviously"
        },
        correctAnswer: "c"
      },
      {
        question: "What is the best site ever created?",
        answers: {
          a: "SitePoint",
          b: "Simple Steps Code",
          c: "Trick question; they're both the best"
        },
        correctAnswer: "c"
      }
    ]
    

