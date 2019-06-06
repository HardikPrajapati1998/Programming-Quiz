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
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length} <form  action="/vbprosee" class="Start this course-course" method="post">
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
        question: "1 -  Which of the following is a basic data type in VB.NET?"
        ,
        answers: {
          A: "Boolean",
          B: "Byte",
          C: "Char",
          D:"All of the above."
        },
        correctAnswer: "D"
      },
      {
        question: "2 - Which of the following converts the expression to SByte data type in VB.NET?",
        answers: {
          A: 'CObj(expression)',
          B: 'CSByte(expression)',
          C: 'CShort(expression)',
          D: 'CSng(expression)'
        },
        correctAnswer: "B"
      },
      {
        question: "3 - Which of the following accesss modifier specifies that a function or Get accessor is an iterator?"
       ,
        answers: {
          A: "In",
          B: " Iterator",
          C: "Key",
          D: "Module  "
        },
        correctAnswer: "B"
      },
      {
        question: "4 - Which of the following accesss modifier specifies that a property or procedure is not implemented in this class and must be overridden in a derived class before it can be used?",
        answers: {
          A: " MustInherit ",
          B: " MustOverride",
          C: "Narrowing ",
          D: "NotInheritable"
        },
        correctAnswer: " B"
      },
      {
        question: "5 - Which of the following accesss modifier specifies that one or more declared programming elements are accessible only from within their own class or from a derived class?",
        answers: {
          A: " Private ",
          B: "  Protected",
          C: " Public ",
          D: "ReadOnly"
         
        },
        correctAnswer: "B"
      },
      {
        question: "6 - Which of the following statement declares and defines one or more constants?"
        ,
        answers: {
          A: " Dim ",
          B: " Const",
          C: " Enum",
          D: " Class"
        },
        correctAnswer: "B"
      },
      {
        question: "7 - Which of the following statement declares the name of an interface and introduces the definitions of the members that the interface comprises?"
       ,
        answers: {
          A: "Structure",
          B: " Module",
          C: "Interface ",
          D: "Function"
        },
        correctAnswer: "C"
      },
      {
        question: "8 - Which of the following statement transfers control to the labeled statement?"
        ,
        answers: {
          A: "Exit ",
          B: "Continue",
          C: "GoTo ",
          D: "None of the above."
        },
        correctAnswer: "C"
      },
      {
        question: "9 -Which of the following property of Array class in VB.NET gets a 64-bit integer, the total number of elements in all the dimensions of the Array?"
        ,
        answers: {
          A: "Rank",
          B: "LongLength",
          C: "Length ",
          D: "None of the above."
         
        },
        correctAnswer: "B"
      },
      {
        question: "10 -Which of the following Collection class of VB.NET represents an array of the binary representation using the values 1 and 0" 
      ,
        answers: {
          A: "Queue",
          B: "BitArray",
          C: "SortedList ",
          D: "Stack"
        },
        correctAnswer: "B"
      }
    ];
  
    // display quiz right away
    buildQuiz();
  
    // on submit, show results
    submitButton.addEventListener("click", showResults);
  })();