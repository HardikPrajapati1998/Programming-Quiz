(function() {
    function buildQuiz() {
      // we'll need a place to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // we'll want to store the list of answer choices
        const answers = [];
  
        // and for each available answer...
        for (letter in currentQuestion.answers) {
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>`
        );
      });
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join("");
    }
  
    function showResults() {
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll(".answers");
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = "lightgreen";
        } else {
          // if answer is wrong or blank
          // color the answers red
          answerContainers[questionNumber].style.color = "red";
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length} <form  action="/cprosee" class="Start this course-course" method="post">
      <input type="text"  name="User_marks" value="${numCorrect}" hidden><button class="lp-button button button-purchase-course" style="margin-top:10px;" type="submit">
			Save And Check Result </button>
   
  </form>
  
</div>`;
      
   
    }
  
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results") ;
    const submitButton = document.getElementById("submit");
    const myQuestions = [
      {
        question: "1 - Which of the following is correct about PHP?"
        ,
        answers: {
          A: " PHP can access cookies variables and set cookies.",
          B:"Using PHP, you can restrict users to access some pages of your website",
          C:"It can encrypt data.",
          D:"All of the above."
        },
        correctAnswer: "D"
      },
      {
        question: "2 - Which of the following type of variables are special variables that hold references to resources external to PHP (such as database connections)?",
        answers: {
          A: ' Strings',
          B: ' Arrays',
          C: 'Objects',
          D: 'Resources'
        },
        correctAnswer: "D"
      },
      {
        question: "3 - Which of the following is correct about determine the"+"truth"+ "of any value not already of the Boolean type?"
        ,
        answers: {
          A: "If the value is an array, it is false if it contains no other values, and it is true otherwise. For an object, containing a value means having a member variable that has been assigned a value.",
          B: " Valid resources are true (although some functions that return resources when they are successful will return FALSE when unsuccessful).",
          C: " Don't use double as Booleans.",
          D: "All of the above."
        },
        correctAnswer: "D"
      },
      {
        question: "4 - Which of the following operator is used to concatenate two strings?",
        answers: {
          A: ". ",
          B: "+",
          C: "append ",
          D: "None of the above."
        },
        correctAnswer: "A"
      },
      {
        question: "5 - Which of the following function is used to get environment variables in PHP?"
        ,
        answers: {
          A: " search() ",
          B: "  environment()",
          C: " env() ",
          D: "getenv()"
        },
        correctAnswer: "D"
      },
      {
        question: "6 -  Doubly quoted strings are treated almost literally, whereas singly quoted strings replace variables with their values as well as specially interpreting certain character sequences?"
        ,
        answers: {
          A: " true",
          B: "false",
          
        },
        correctAnswer: "B"
      },
      {
        question: "7 -  Which of the following is used to check that a cookie is set or not.?"
      ,
        answers: {
          A: "getcookie() function",
          B: " $_COOKIE variable",
          C: " isset() function",
          D: "None of the above."
        },
        correctAnswer: "C"
      },
      {
        question: "8 -  Which of the following provides access to the uploaded file in the temporary directory on the web server?"
        ,
        answers: {
          A: "$_FILES['file']['tmp_name'] ",
          B: "$_FILES['file']['name']",
          C: "$_FILES['file']['size'] ",
          D: " $_FILES['file']['type']"
        },
        correctAnswer: "A"
      },
      {
        question: "9 -Which of the following method of Exception class retrieve the error message when error occured?"
       ,
        answers: {
          A: " getMessage() ",
          B: "getCode()",
          C: " getFile()  ",
          D: " getLine()"
        },
        correctAnswer: "A"
      },
      {
        question: "10 -Which of the following method can be used to create a MySql database using PHP?" 
       ,
        answers: {
          A: " mysql_connect()",
          B: "  mysql_query()",
          C: "mysql_close() ",
          D: "  None of the above"
        },
        correctAnswer: "B"
      }
    ];
  
    // display quiz right away
    buildQuiz();
  
    // on submit, show results
    submitButton.addEventListener("click", showResults);
  })();