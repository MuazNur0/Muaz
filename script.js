const questions = [
    {
        question: "which animal is the largest is the world?",
        answers: [
            { Text: "shark", correct: false},
            { Text: "Blue Whale", correct: true},
            { Text: "Lion", correct: false},
            { Text: "Elephant", correct: false},
        ]
    },
    {
        question: "which animal is the largest is the world?",
        answers: [
            { Text: "shark", correct: false},
            { Text: "Blue Whale", correct: true},
            { Text: "Lion", correct: false},
            { Text: "Elephant", correct: false},
        ]
    },
    {
        question: "which animal is the largest is the world?",
        answers: [
            { Text: "shark", correct: false},
            { Text: "Blue Whale", correct: true},
            { Text: "Lion", correct: false},
            { Text: "Elephant", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn"); 

let currentQuestionIndex = 0
let score 0;
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "next";
    showQuestion();
}
function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ".  " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.Text
        button.classList.add("btn");
        answerButton.appendChild(button)
    });
} 
startQuiz();


