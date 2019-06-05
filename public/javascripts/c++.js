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
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length} <form  action="/objprosee" class="Start this course-course" method="post">
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
        question: "1 - A constructor can be virtual?"
        ,
        answers: {
          A: "True",
          B:"False"
        },
        correctAnswer: "B"
      },
      {
        question: "2 - The operator used to access member function of a structure using its object?",
        answers: {
          A: ' .',
          B: ' ->',
          C: ' *',
          D: 'None of the above.'
        },
        correctAnswer: "A"
      },
      {
        question: "3 - The following operator can be used to calculate the value of one number raised to another?"
        ,
        answers: {
          A: "^",
          B: " **",
          C: "^^",
          D: "None of the above"
        },
        correctAnswer: "D"
      },
      {
        question: "4 - The pointer which stores always the current active object address is __?",
        answers: {
          A: "auto_ptr ",
          B: "this",
          C: "p ",
          D: "none of the above"
        },
        correctAnswer: "B"
      },
      {
        question: "5 - What is the output of the following program?"
        +'<pre>'
        +'#include<<iostream>iostream>'+'</br>'
        +'using namespace std;'+'</br>'
        +'class Base {'+'</br>'
        +'public:'+'</br>'
        +'         void f() {'+'</br>'
        +'             cout<<"Base\\n";'+'</br>'
        +'             }'+'</br>'
        +'};'+'</br>'
        +'class Derived:public Base {'+'</br>'
        +'public:'+'</br>'
        +'  void f() {'+'</br>'
        +'    cout<<"Derived\\n";'+'</br>'
        +'      };'+'</br>'
        +'  }; '+ '</br>'
        +'main() {'+'</br>'
        +'     Derived obj;'+'</br>'
        +'      obj.Base::f();'+'</br>'
        +'}'+'</br>'
        +'</pre>',
        answers: {
          A: " Base ",
          B: " Derived",
          C: "Compile error ",
          D: "None of the above."
        },
        correctAnswer: "A"
      },
      {
        question: "6 - (i) ‘ios’ is the base class of ‘istream’(ii) All the files are classified into only 2 types. (1) Text Files (2) Binary Files.?"
        ,
        answers: {
          A: " Only (i) is true ",
          B: "Only (ii) is true",
          C: "Both (i) & (ii) are true ",
          D: "Both (i) & (ii) are false"
        },
        correctAnswer: "C"
      },
      {
        question: "7 -  i) Exception handling technically provides multi branching.ii) Exception handling can be mimicked using ‘goto’ construct.?"
      ,
        answers: {
          A: "Only (i) is true",
          B: " Only (ii) is true",
          C: "Both (i) & (ii) are true",
          D: "Both (i) && (ii) are false"
        },
        correctAnswer: "A"
      },
      {
        question: "8 - A class can contain objects of other classes and this phenomenon is called_________ .",
        answers: {
          A: "Relationship ",
          B: "Object Association ",
          C: "Containership  ",
          D: "None of these "
        },
        correctAnswer: "C"
      },
      {
        question: "9 -An inline function can execute faster than a normal function?"
       ,
        answers: {
          A: " True ",
          B: " False",
        },
        correctAnswer: "A"
      },
      {
        question: "10 -What is the output of the following program?" 
        +'<pre>'
        +'#include<<iostream>iostream>'+'</br>'
        +' using namespace std;'+'</br>'
        +' main() {;'+'</br>'
        +'      char *s = "Fine";'+'</br>'
        +'            *s="N";'+'</br>'
        +'     cout<<"s"<<"endl"; '+'</br>'
        +'}',
        answers: {
          A: " Fine",
          B: " Nine",
          C: "Compile error ",
          D: " Runtime error"
        },
        correctAnswer: "D"
      }
    ];
  
    // display quiz right away
    buildQuiz();
  
    // on submit, show results
    submitButton.addEventListener("click", showResults);
  })();