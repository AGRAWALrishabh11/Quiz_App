const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Dog", correct: false },
            { text: "Cow", correct: false },
            { text: "Blue Whale", correct: true },
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Antarctica", correct: false },
            { text: "Australia", correct: true },
            { text: "Africa", correct: false },
        ]
    },
    {
        question: "Which is the largest state in India?",
        answers: [
            { text: "Kerala", correct: false },
            { text: "Rajasthan", correct: true },
            { text: "UP", correct: false },
            { text: "Delhi", correct: false },
        ]
    },
    {
        question: "Which is the largest city in India?",
        answers: [
            { text: "Mumbai", correct: true },
            { text: "Delhi", correct: false },
            { text: "Lucknow", correct: false },
            { text: "Bhopal", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next"); // Assuming "next" is an ID

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerText = "Next";
    nextButton.style.display = "none";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    answerButtons.innerHTML = "";
}

function selectAnswer(answer) {
    if (answer.correct) {
        score++;
    }
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
        if (button.innerText === answer.text) {
            button.style.backgroundColor = answer.correct ? "green" : "red";
        }
    });
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        questionElement.innerText = `Quiz Over! Your score is ${score}/${questions.length}`;
        nextButton.innerText = "Restart";
        nextButton.addEventListener("click", startQuiz);
    }
});

startQuiz();
