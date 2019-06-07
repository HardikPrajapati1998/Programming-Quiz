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
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length} <form  action="/jqueryprosee" class="Start this course-course" method="post">
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
        question: "1 -  Which of the following type of variable is visible everywhere in your JavaScript code?"
        ,
        answers: {
          A: "global variable",
          B: "  local variable",
          C: "  Both of the above..",
          D: "  None of the above."
        },
        correctAnswer: "A"
      },
      {
        question: "2 -  Which of the following type of variable takes precedence over other if names are same?",
        answers: {
          A: '  global variable',
          B: ' local variable',
          C: 'Both of the above.',
          D: '  None of the above.',
          
        },
        correctAnswer: "B"
      },
      {
        question: "3 -Which of the following is correct about jQuery selector?"
       ,
        answers: {
          A: "A jQuery Selector is a function which makes use of expressions to find out matching elements from a DOM based on the given criteria.",
          B: " jQuery selectors are used to select one or more HTML elements using jQuery.l",
          C: "jQuery selectors start with the dollar sign and parentheses - $()",
          D: "All of the above.  "
        },
        correctAnswer: "D"
      },
      {
        question: "4 - Which of the following jQuery method adds the specified class if it is not present, remove the specified class if it is present?",
        answers: {
          A: " toggleStyleClass( class )",
          B: "  toggleClass( class )",
          C: "toggleCSSClass( class ) ",
          D: "None of the above.."
        },
        correctAnswer: " B"
      },
      {
        question: "5 - Which of the following jQuery method returns a jQuery collection with the positioned parent of the first matched element?",
        answers: {
          A: "  offsetParent( selector )",
          B: "  offset( selector) ",
          C: "  parent( selector ) ",
          D: " None of the above."
         
        },
        correctAnswer: "D"
      },
      {
        question: "6 -  Which of the following jQuery method adds the previous selection to the current selection?"
        ,
        answers: {
          A: " add( selector ) ",
          B: " andSelf( )",
          C: " append(selector)",
          D: "None of the above."
        },
        correctAnswer: "B"
      },
      {
        question: "7 -  Which of the following jQuery method finds all sibling elements in front of the current element?"
       ,
        answers: {
          A: "parents( selector )",
          B: "  prevAll( selector).",
          C: "siblings( selector ) ",
          D: "None of the above."
        },
        correctAnswer: "B"
      },
      {
        question: "8 - Which of the following jQuery method removes set of matched elements?"
        ,
        answers: {
          A: " empty( )",
          B: " delete( )",
          C: "remove( expr )",
          D: "None of the above."
        },
        correctAnswer: "C"
      },
      {
        question: "9 -Which of the following jQuery method binds a function to be executed whenever the DOM is ready to be traversed and manipulated?"
        ,
        answers: {
          A: " ready(fn)",
          B: "   load(fn)",
          C: "reload(fn) ",
          D: "None of the above."
         
        },
        correctAnswer: "A"
      },
      {
        question: "10 -Which of the following jQuery method setups global settings for AJAX requests?" 
      ,
        answers: {
          A: "jQuery.ajax( options )",
          B: " jQuery.ajaxSetup( options )",
          C: " serialize( ) ",
          D: " serializeArray( )"
        },
        correctAnswer: "B"
      }
    ];
  
    // display quiz right away
    buildQuiz();
  
    // on submit, show results
    submitButton.addEventListener("click", showResults);
  })();