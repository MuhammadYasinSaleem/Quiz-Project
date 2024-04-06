const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Rome"],
      answer: "Paris"
    },
    {
      question: "What is the largest planet in our solar system?",
      choices: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Jupiter"
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      choices: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
      answer: "William Shakespeare"
    }
  ];

  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");
  const submitButton = document.getElementById("submit");
  const resultElement = document.getElementById("result");

  let currentQuestion = 0;
  let score = 0;

  function loadQuestion() {
    const q = questions[currentQuestion];
    questionElement.textContent = q.question;
    choicesElement.innerHTML = "";
    q.choices.forEach(choice => {
      const li = document.createElement("li");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "choice";
      input.value = choice;
      li.appendChild(input);
      li.appendChild(document.createTextNode(choice));
      choicesElement.appendChild(li);
    });
  }

  function checkAnswer() {
    const userAnswer = document.querySelector("input[name='choice']:checked");
    if (!userAnswer) {
      resultElement.textContent = "Please select an answer";
      return;
    }
    if (userAnswer.value === questions[currentQuestion].answer) {
      score++;
      resultElement.textContent = "Correct!";
    } else {
      resultElement.textContent = "Incorrect!";
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      resultElement.textContent = `Quiz completed! Your score: ${score}/${questions.length}`;
      submitButton.disabled = true;
    }
  }

  submitButton.addEventListener("click", checkAnswer);

  loadQuestion();