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
        question: "1 -  Which of the following is not a keyword in java?"
        ,
        answers: {
          A: "static",
          B: " Boolean",
          C: " void",
          D:"private"
        },
        correctAnswer: "B"
      },
      {
        question: "2 - What is the size of int variable?",
        answers: {
          A: '8 bit',
          B: '16 bit',
          C: '32 bit',
          D: '64 bit'
        },
        correctAnswer: "C"
      },
      {
        question: "3 - What is the default value of short variable?"
       ,
        answers: {
          A: "0.0",
          B: " 0",
          C: "null",
          D: "not defined"
        },
        correctAnswer: "B"
      },
      {
        question: "4 - Which of the following is true about public access modifier?",
        answers: {
          A: "Variables, methods and constructors which are declared public can be accessed by any class. ",
          B: " Variables, methods and constructors which are declared public can be accessed by any class lying in same package.",
          C: "Variables, methods and constructors which are declared public in the superclass can be accessed only by its child class. ",
          D: "None of the above."
        },
        correctAnswer: "A"
      },
      {
        question: "5 - Inheritance represents?",
        answers: {
          A: " HAS-A relationship. ",
          B: " IS-A relationship.",
         
        },
        correctAnswer: "B"
      },
      {
        question: "6 - What is TreeSet Interface?"
        ,
        answers: {
          A: "It is a Set implemented when we want elements in a tree based order. ",
          B: " It is a Set implemented when we want elements in a sorted order.",
          C: " It is a Set implemented when we want elements in a binary tree format.",
          D: " It is a Set implemented when we want elements in a hiearchical order."
        },
        correctAnswer: "B"
      },
      {
        question: "7 - Static binding uses which information for binding?"
       ,
        answers: {
          A: "type.",
          B: " object.",
          C: "Both of the above. ",
          D: "None of the above."
        },
        correctAnswer: "A"
      },
      {
        question: "8 - What is Serialization?"
        ,
        answers: {
          A: "Serialization is the process of writing the state of an object to another object. ",
          B: " Serialization is the process of writing the state of an object to a byte stream.",
          C: "Both of the above. ",
          D: "None of the above."
        },
        correctAnswer: "B"
      },
      {
        question: "9 -Can constructor be inherited?"
        ,
        answers: {
          A: "True. ",
          B: " False.",
         
        },
        correctAnswer: "B"
      },
      {
        question: "10 -What is currentThread()" 
      ,
        answers: {
          A: "It is a Thread public static method used to obtain a reference to the current thread.",
          B: " It is a thread's instance method used to get thread count.",
          C: "It is a object's public static method used obtain a reference to the current thread. ",
          D: "It is a object's instance method used to get thread count."
        },
        correctAnswer: "A"
      }
    ];
  
    // display quiz right away
    buildQuiz();
  
    // on submit, show results
    submitButton.addEventListener("click", showResults);
  })();