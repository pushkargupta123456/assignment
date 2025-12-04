
// Array of quiz questions and answers
const quizQuestions = [
    { question: "What is the capital of India?", answer: "delhi" },
    { question: "Which language runs in a web browser?", answer: "javascript" },
    { question: "What keyword is used to declare a variable in JavaScript?", answer: "let" },
    { question: "What does HTML stand for?", answer: "hypertext markup language" },
    { question: "Which method is used to convert text to lowercase?", answer: "tolowercase" }
];

// Function to run the quiz
function runQuiz() {

    let score = 0;  // Score starts at 0

    // Loop through all questions
    for (let i = 0; i < quizQuestions.length; i++) {

        let userAnswer = prompt(quizQuestions[i].question);

        // If the user closes the prompt
        if (userAnswer === null) {
            alert("Quiz stopped!");
            return;
        }

        // Normalize the input
        userAnswer = userAnswer.toLowerCase().trim();

        // Check answer
        if (userAnswer === quizQuestions[i].answer) {
            alert("Correct!");
            score++;
        } else {
            alert("Wrong! The correct answer is: " + quizQuestions[i].answer);
        }
    }

    // Final score display
    alert("Quiz completed!\nYour final score: " + score + "/" + quizQuestions.length);
}

// Run the quiz
runQuiz();
