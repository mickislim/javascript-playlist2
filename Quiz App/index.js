const questions = [
  {
    question: "which is the largest animal in the world?",
    answer: [
      {
        text: "shark",
        correct: false,
      },

      {
        text: "Blue whale",
        correct: true,
      },

      {
        text: "elephant",
        correct: false,
      },

      {
        text: "Giraffe",
        correct: false,
      },
    ],
  },

  {
    question: "which is the smallest country in the world?",
    answer: [
      {
        text: "Vatican city",
        correct: true,
      },

      {
        text: "Bhutan",
        correct: false,
      },

      {
        text: "Nepal",
        correct: false,
      },

      {
        text: "Sri Lanka",
        correct: false,
      },
    ],
  },

  {
    question: "which is the largest desert in the world?",
    answer: [
      {
        text: "Kalahari",
        correct: false,
      },

      {
        text: "Gobi",
        correct: false,
      },

      {
        text: "Sahara",
        correct: false,
      },

      {
        text: "Antarctica",
        correct: true,
      },
    ],
  },

  {
    question: "which is the Smallest continent in the world?",
    answer: [
      {
        text: "Asia",
        correct: false,
      },

      {
        text: "Australia",
        correct: true,
      },

      {
        text: "Arctic",
        correct: false,
      },

      {
        text: "Africa",
        correct: false,
      },
    ],
  },
];

const questionEl = document.getElementById("question");
const answerBtns = document.querySelector(".answer-btns");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;

  nextBtn.innerHTML = `Next`;
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionEl.innerHTML = questionNo + "," + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerBtns.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextBtn.style.display = "none";
  while (answerBtns.childNodes.length > 0) {
    answerBtns.removeChild(answerBtns.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerBtns.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
      score++;
    }
    button.disabled = true;
  });
  nextBtn.style.display = "block";
}
function showScore() {
  resetState();
  questionEl.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextBtn.innerHTML = `Play again`;
  nextBtn.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

// ... (existing code)

startQuiz();

