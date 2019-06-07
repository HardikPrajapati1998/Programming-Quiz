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
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length} <form  action="/bootstrapprosee" class="Start this course-course" method="post">
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
        question: "1 -  Which of the following is correct about Bootstrap Responsive Images?"
        ,
        answers: {
          A: "Bootstrap 3 allows you to make the images responsive by adding a class ..img-responsive to the <.img> tag.",
          B: " ..img-responsive class applies max-width: 100%; and height: auto; to the image so that it scales nicely to the parent element.",
          C: "  Both of the above..",
          D: "  None of the above."
        },
        correctAnswer: "C"
      },
      {
        question: "2 -  Which of the following class styles a table as a nice basic table with stripes on rows?",
        answers: {
          A: '   .table',
          B: ' .table-striped',
          C: '.table-bordered',
          D: '  .table-hover  ',
          
        },
        correctAnswer: "B"
      },
      {
        question: "3 -Which of the following is correct about jQuery selector?"
       ,
        answers: {
          A: ".btn",
          B: " .btn-primary",
          C: ".btn-success",
          D: ".btn-info "
        },
        correctAnswer: "A"
      },
      {
        question: "4 - Which of the following bootstrap style of image gives the image rounded corners?",
        answers: {
          A: " .img-rounded",
          B: "  .img-circle",
          C: ".img-thumbnail ",
          D: "None of the above."
        },
        correctAnswer: " A"
      },
      {
        question: "5 - Which of the following bootstrap style is used to add text to .navbar?",
        answers: {
          A: "   .navbar-text",
          B: "  .text ",
          C: "  .form-text ",
          D: "None of the above."
         
        },
        correctAnswer: "A"
      },
      {
        question: "6 -  Which of the following bootstrap style is to be used if you want to create an inverted .navbar with a black background and with white text?"
        ,
        answers: {
          A: " .navbar-reverse ",
          B: "  .navbar-inverse ",
          C: " .navbar-inverted",
          D: " None of the above."
        },
        correctAnswer: "B"
      },
      {
        question: "7 - Which of the following bootstrap style can be used to get a muted look on a pager buttons?"
       ,
        answers: {
          A: ".pager-disabled",
          B: "  .disabled",
          C: ".link-disabled ",
          D: " None of the above."
        },
        correctAnswer: "B"
      },
      {
        question: "8 - Which of the following is correct about bootstrap media objects?"
        ,
        answers: {
          A: "  These are abstract object styles for building various types of components (like blog comments, Tweets, etc.) that feature a left-aligned or right-aligned image alongside the textual content.",
          B: "The goal of the media object is to make the code for developing these blocks of information drastically shorter.",
          C: "Both of the above.",
          D: "None of the above."
        },
        correctAnswer: "C"
      },
      {
        question: "9 -Which of the following is correct about data-html Data attribute of Tooltip Plugin?"
        ,
        answers: {
          A: "  Applies a CSS fade transition to the tooltip.",
          B: "    Inserts HTML into the tooltip. If false, jQuery's text method will be used to insert content into the dom.",
          C: "Specifies how to position the tooltip (i.e., top|bottom|left|right|auto). ",
          D: "Delegates to the specified targets."
         
        },
        correctAnswer: "B"
      },
      {
        question: "10 -Which of the following is correct about data-animation Data attribute of Popover Plugin?" 
      ,
        answers: {
          A: " Applies a CSS fade transition to the popover.",
          B: " Inserts HTML into the popover. If false, jQuery's text method will be used to insert content into the dom.",
          C: " Specifies how to position the popover (i.e., top|bottom|left|right|auto). ",
          D: " Delegates to the specified targets."
        },
        correctAnswer: "A"
      }
    ];
  
    // display quiz right away
    buildQuiz();
  
    // on submit, show results
    submitButton.addEventListener("click", showResults);
  })();