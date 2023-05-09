function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		
        var myQuestions = [
            {
                question: // insert question
                answers: {
                    a: 
                    b: 
                    c: 
                },
                correctAnswer: 
            },
            {
                question: "What is 30/3?",
                answers: {
                    a: 
                    b: 
                    c: 
                },
                correctAnswer: 
            }
        ];
	}

	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}