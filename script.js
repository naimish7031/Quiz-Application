const quizData = [
    {
      question: "What is the capital of India?",
      options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
      answer: "Delhi"
    },
    {
      question: "Which language runs in the browser?",
      options: ["Python", "C", "JavaScript", "Java"],
      answer: "JavaScript"
    },
    {
      question: "What does HTML stand for?",
      options: ["HyperText Markup Language", "HighText Machine Language", "Hyperlink and Text Markup Language", "None of these"],
      answer: "HyperText Markup Language"
    },
    { 
    question:"what does CSS stand for?",
    options:["Computer Style Sheets","Cascading Style Sheets","Creative Style Sheets","Colorful Style Sheets"],
    answer:"Cascading Style Sheets"
    },
    {  
    question:"Which tag is used to create a hyperlink in HTML?",
    options:["<link>","<hyperlink>","<a>","<href"],
    answer:"<a>"
    }
  ];
  
  let currentQuestion = 0;
  
  function loadQuestion() {
    const questionData = quizData[currentQuestion];
    document.getElementById('question').innerText = questionData.question;
  
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
  
    questionData.options.forEach(option => {
      const button = document.createElement('button');
      button.classList.add('option-btn');
      button.innerText = option;
      button.onclick = () => checkAnswer(option);
      optionsContainer.appendChild(button);
    });
  }
  
  function checkAnswer(selectedOption) {
    const correctAnswer = quizData[currentQuestion].answer;
    const feedback = document.getElementById('feedback');
  
    if (selectedOption === correctAnswer) {
      feedback.innerText = "Correct!";
      feedback.style.color = "green";
    } else {
      feedback.innerText = " Wrong! Correct Answer: " + correctAnswer;
      feedback.style.color = "red";
    }
  
    setTimeout(() => {
      currentQuestion++;
      if (currentQuestion < quizData.length) {
        feedback.innerText = '';
        loadQuestion();
      } else {
        document.querySelector('.quiz-container').innerHTML = "<h2> Quiz Completed! </h2>";
      }
    }, 2000);
  }
  
  loadQuestion();
  