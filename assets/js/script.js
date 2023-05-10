var quizEl = document.getElementById("quiz")
var quizRules = document.getElementById("quiz-rules")
var startQuiz = document.getElementById('start-quiz')
var submitBtn = document.getElementById("submit")


quizRules.textContent = "Welcome to the Javascript fundamentals quiz! Answer the questions to test your Javascript knowledge. This quiz does have a time limit. If you answer the question incorrectly, you will be penalized with ten seconds off your timer. To begin the quiz, select Start Quiz below."; 

quizRules.style.textAlign = "center"; 
quizRules.setAttribute("style", "color:black", "padding:15px"); 
startQuiz.addEventListener("click", javaQuiz()); 


function javaQuiz() {

    var quizQuestions = [
        {
        question: "What is the purpose of an array in Javascript?", 
        answers: {
                a: "text here",
                b: "text here",
                c: "text here"
            },
            correctAnswer: "a"
        },
        {
            question: "What is the purpose of an array in Javascript?", 
            answers: {
                    a: "text here",
                    b: "text here",
                    c: "text here"
                },
                correctAnswer: "a"
            },
        {
            question: "What is the purpose of an array in Javascript?", 
            answers: {
                    a: "text here",
                    b: "text here",
                    c: "text here"
                },
                correctAnswer: "a"
            },
    ];
}