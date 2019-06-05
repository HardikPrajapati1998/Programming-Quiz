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
        question: "1 - Which of the following is true about ng-init directive?"
        ,
        answers: {
          A: " ng-init directive initializes an AngularJS Application data.",
          B:"ng-init directive is used to put values to the variables to be used in the application.",
          C:"Both of the above.",
          D:"None of the above."
        },
        correctAnswer: "C"
      },
      {
        question: "2 - AngularJS application expressions are pure JavaScript expressions?",
        answers: {
          A: ' true',
          B: ' false',
        
        },
        correctAnswer: "A"
      },
      {
        question: "3 - Which of the following is true about ng-show directive?"
        ,
        answers: {
          A: "ng-show directive can show a given control.",
          B: " ng-show directive can hide a given control.",
          C: " Both of the above.",
          D: "None of the above."
        },
        correctAnswer: "C"
      },
      {
        question: "4 - Which of the following is true about $routeProvider?",
        answers: {
          A: " $routeProvider is the key service which set the configuration of urls. ",
          B: "$routeProvider maps Urls with the corresponding html page or ng-template.",
          C: "$routeProvider attaches a controller with the view.  ",
          D: "All of the above."
        },
        correctAnswer: "D"
      },
      {
        question: "5 - Using service method, we define a service and then assign method to it.?"
        ,
        answers: {
          A: " true ",
          B: " false",
          
        },
        correctAnswer: "D"
      },
      {
        question: "6 -  Is AngularJS extensible?"
        ,
        answers: {
          A: " true",
          B: "false",
          
        },
        correctAnswer: "A"
      },
      {
        question: "7 -  ng-bind binds the AngularJS Application data to HTML tags?"
      ,
        answers: {
          A: "true",
          B: " false",
          
        },
        correctAnswer: "A"
      },
      {
        question: "8 -  AngularJS Expressions are used to bind application data to html.?"
        ,
        answers: {
          A: "true",
          B: "false",
         
        },
        correctAnswer: "A"
      },
      {
        question: "9 -In controllers, model data is accessed via $scope object?"
       ,
        answers: {
          A: "  false ",
          B: " true",
         
        },
        correctAnswer: "B"
      },
      
    ];
  
    // display quiz right away
    buildQuiz();
  
    // on submit, show results
    submitButton.addEventListener("click", showResults);
  })();