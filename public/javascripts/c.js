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
        question: "1 - What is the output of the following statement?"
+'<pre>'
+'#include<<stdio.h>stdio.h>'+'</br>'
+'main()'+'</br>'
+'{ '+'</br>'
+ 'printf("%d", !0<2);'+'</br>'
+'}'+'</br>'
 +'</pre>'       
        
        ,
        answers: {
          A: "1",
          B: "0",
          C: "True",
          D:"False"
        },
        correctAnswer: "A"
      },
      {
        question: "2 - Which statement can print \\n on the screen?",
        answers: {
          A: 'printf("n");',
          B: 'printf("n\\");',
          C: 'printf("\\\n");',
          D: 'printf("/n");'
        },
        correctAnswer: "C"
      },
      {
        question: "3 - What will be the output of the following program?"
        +'<pre>'
+'#include<<stdio.h>stdio.h>'+'</br>'
+'int main()'+'</br>'
+'{ '+'</br>'

+ '  const int i = 0;'+'</br>'
+ '   printf("%d\\n", i++);'+'</br>'
+ '   return 0;'+'</br>'

+'}'+'</br>'
 +'</pre>',
        answers: {
          A: "0",
          B: " Infinity",
          C: "Return error",
          D: "-1"
        },
        correctAnswer: "C"
      },
      {
        question: "4 - Which library function can convert an unsigned long to a string?",
        answers: {
          A: "system() ",
          B: " ultoa()",
          C: "ltoa() ",
          D: "unsigned long can’t be converted to a string"
        },
        correctAnswer: "B"
      },
      {
        question: "5 - Which standard library function can return a pointer to the last occurrence of a character in a string?",
        answers: {
          A: " sttrchr() ",
          B: " strchar() & stchar()",
          C: "stchar() ",
          D: "strrchr()"
        },
        correctAnswer: "D"
      },
      {
        question: "6 - What is the outpout of the following program?"
        +'<pre>'
        +'#include<<stdio.h>stdio.h>'+'</br>'
        +' main()'+'</br>'
        +'{ '+'</br>'
        
        + '    enum { india, is=7, GREAT };'+'</br>'
        + '    printf("%d %d", india, GREAT);'+'</br>'
       
        
        +'}'+'</br>'
         +'</pre>',
        answers: {
          A: "0 1. ",
          B: "0 8",
          C: "0 2 ",
          D: "Compile error"
        },
        correctAnswer: "B"
      },
      {
        question: "7 - What will be printed for the below statement?"
        +'<pre>'
        +'#include<<stdio.h>stdio.h>'+'</br>'
        +' main()'+'</br>'
        +'{ '+'</br>'
        
        + '    printf("%d",strcmp("strcmp()","strcmp()"));'+'</br>'
        
       
        
        +'}'+'</br>'
         +'</pre>',
        answers: {
          A: "0",
          B: " -1",
          C: "1 ",
          D: "Invalid use of strcmp() function"
        },
        correctAnswer: "A"
      },
      {
        question: "8 - What is the output of the following program?"
        +'<pre>'
        +'#include<<stdio.h>stdio.h>'+'</br>'
        +' main()'+'</br>'
        +'{ '+'</br>'
        
        + '    int a[] = {10, 20, 30};'+'</br>'
        + '     printf("%d", *a+1);'+'</br>'
       
        
        +'}'+'</br>'
         +'</pre>',
        answers: {
          A: "31 ",
          B: " 20",
          C: "10 ",
          D: "11"
        },
        correctAnswer: "D"
      },
      {
        question: "9 -What will the SWAP macro in the following program be expanded to on preprocessing? will the code compile?"
        +'<pre>'
        +'#include<<stdio.h>stdio.h>'+'</br>'
        +'#define SWAP(a, b, c)(c t; t=a, a=b, b=t)'+'</br>'
        
        +'int main()'+'</br>'
        +'{ '+'</br>'
        
        + '    int x=10, y=20;'+'</br>'
        + '    SWAP(x, y, int);'+'</br>'
        + '    printf("%d %d\\n", x, y);'+'</br>'
        + '    return 0;'+'</br>'
       
       
        
        +'}'+'</br>'
         +'</pre>',
        answers: {
          A: "It compiles ",
          B: " Compiles with an warning",
          C: "Compiles and print nothing ",
          D: "Not compile"
        },
        correctAnswer: "D"
      },
      {
        question: "10 -" 
       +"In which stage the following code" 
       +'#include<<stdio.h>stdio.h>'
       +" gets replaced by the contents of the file stdio.h",
        answers: {
          A: "During editing",
          B: " During linking",
          C: "During preprocessing ",
          D: "During execution"
        },
        correctAnswer: "C"
      }
    ];
  
    // display quiz right away
    buildQuiz();
  
    // on submit, show results
    submitButton.addEventListener("click", showResults);
  })();
