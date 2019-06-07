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
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length} <form  action="/cssprosee" class="Start this course-course" method="post">
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
        question: "1 -  If we want define style for an unique element, then which css selector will we use?"
        ,
        answers: {
          A: "Id.",
          B: " text.",
          C: "  class.",
          D: "  name"
        },
        correctAnswer: "A"
      },
      {
        question: "2 -  If we don't want to allow a floating div to the left side of an element, which css property will we use?",
        answers: {
          A: '   margin',
          B: ' clear',
          C: 'float',
          D: '  padding  ',
          
        },
        correctAnswer: "B"
      },
      {
        question: "3 -	Suppose we want to arragnge five nos. of DIVs so that DIV4 is placed above DIV1. Now, which css property will we use to control the order of stack?"
       ,
        answers: {
          A: "d-index",
          B: " s-index",
          C: "x-index",
          D: "z-index "
        },
        correctAnswer: "D"
      },
      {
        question: "4 - Can we align a Block element by setting the left and right margins?",
        answers: {
          A: " Yes, we can",
          B: "  Not Possible",
         
        },
        correctAnswer: " B"
      },
      {
        question: "5 - 	If we want to wrap a block of text around an image, which css property will we use?",
        answers: {
          A: "   wrap",
          B: "  push ",
          C: " float ",
          D: "align"
         
        },
        correctAnswer: "C"
      },
      {
        question: "6 -  	Can we define the text direction via css property?"
        ,
        answers: {
          A: " Yes, we can ",
          B: "  No, we can't",
          
        },
        correctAnswer: "A"
      },
      {
        question: "7 - Is it possible to declare font-weight, font-face & font-size by using ONLY ONE css propery?"
       ,
        answers: {
          A: "Yes, it's possible",
          B: "  No, not possible",
          
        },
        correctAnswer: "A"
      },
      {
        question: "8 - 	If we want to show an Arrow as cursor, then which value we will use?"
        ,
        answers: {
          A: "  pointer",
          B: "default",
          C: "arrow",
          D: "arr"
        },
        correctAnswer: "B"
      },
      {
        question: "9 -	  If we want to use a nice looking green dotted border around an image, which css property will we use?"
        ,
        answers: {
          A: "  border-color",
          B: "   border-decoration",
          C: "border-style",
          D: "border-line"
         
        },
        correctAnswer: " C"
      },
      {
        question: "10 -Which of the following properties will we use to display border around a cell without any content?" 
      ,
        answers: {
          A: " empty-cell",
          B: " blank-cell",
          C: " noncontent-cell ",
          D: " void-cell"
        },
        correctAnswer: "A"
      }
    ];
  
    // display quiz right away
    buildQuiz();
  
    // on submit, show results
    submitButton.addEventListener("click", showResults);
  })();