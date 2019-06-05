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
        question: "1 -  Is it possible to have an activity without UI to perform action/actions?"
        ,
        answers: {
          A: "Not possible",
          B: " Wrong question",
          C: " Yes, it is possible",
          D:"None of the above"
        },
        correctAnswer: "C"
      },
      {
        question: "2 - WHich of the following is/are are the subclasses in Android?",
        answers: {
          A: ' Action Bar Activity',
          B: 'Launcher Activity',
          C: 'Preference Activity',
          D: 'Tab Activity',
          E: 'All of above'
        },
        correctAnswer: "E"
      },
      {
        question: "3 - On which thread broadcast receivers will work in android?"
       ,
        answers: {
          A: "Worker Thread",
          B: " Main Thread",
          C: "Activity Thread",
          D: "None of the Above  "
        },
        correctAnswer: "B"
      },
      {
        question: "4 - How many applications are there in a given task in android?",
        answers: {
          A: " Two ",
          B: " One",
          C: "Many ",
          D: "Zero"
        },
        correctAnswer: " C"
      },
      {
        question: "5 - What is JNI in android?",
        answers: {
          A: " Java network interface ",
          B: "  Java interface",
          C: " Image editable tool ",
          D: "Java native interface."
         
        },
        correctAnswer: "D"
      },
      {
        question: "6 -  What is a base adapter in android?"
        ,
        answers: {
          A: " Base Adapter is a common class for any adapter, which can we use for both ListView and spinner ",
          B: " A kind of adapter",
          C: " Data storage space",
          D: " None of the above."
        },
        correctAnswer: "A"
      },
      {
        question: "7 -  How to fix crash using log cat in android?"
       ,
        answers: {
          A: "Gmail",
          B: " log cat contains the exception name along with the line number",
          C: "Google search ",
          D: "None of the above."
        },
        correctAnswer: "B"
      },
      {
        question: "8 - What is a GCM in android?"
        ,
        answers: {
          A: "Goggle Could Messaging for chrome ",
          B: " Goggle Count Messaging",
          C: "Goggle Message pack ",
          D: "None of the above"
        },
        correctAnswer: "A"
      },
      {
        question: "9 - Is it mandatory to call onCreate() and onStart() in android?"
        ,
        answers: {
          A: "No, we can write the program without writing onCreate() and onStart()",
          B: "  Yes, we should call onCreate() and onStart() to write the program",
          C: "At least we need to call onCreate() once ",
          D: "None of the above."
         
        },
        correctAnswer: "A"
      },
      {
        question: "10 -What is anchor view" ,
        answers: {
          A: "Same as list view",
          B: " provides the information on respective relative positions",
          C: " Same as relative layout ",
          D: "None of the above"
        },
        correctAnswer: "B"
      }
    ];
  
    // display quiz right away
    buildQuiz();
  
    // on submit, show results
    submitButton.addEventListener("click", showResults);
  })();