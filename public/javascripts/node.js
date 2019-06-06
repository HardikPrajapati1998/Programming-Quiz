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
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}<form  action="/nodeprosee" class="Start this course-course" method="post">
      <input type="text"  name="User_marks" value="${numCorrect}" hidden><button class="lp-button button button-purchase-course" style="margin-top:10px;" type="submit">
			Save And Check Result </button>
   
  </form>
  
</div>`;
    }
  
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    const myQuestions = [
      {
        question: " 1-Which of following command starts a REPL session?",
        answers: {
          A: "$ node",
          B: "$ node start",
          C: "$ node repl",
          D: "$ node console"
        },
        correctAnswer: "A"
      },{
        question: " 2 - Which of the following is true about __filename global object?",
        answers: {
          A: "The __filename represents the filename of the code being executed.",
          B: "The __filename represents the resolved absolute path of code file.",
          C: "Both of the above.",
          D: " None of the above."
        },
        correctAnswer: "C"
      },
      {
        question: " 3 - Child processes always have three streams child.stdin, child.stdout, and child.stderr which may be shared with the stdio streams of the parent process.",
        answers: {
          A: " true",
          B: "false",
          C: "None of the above."
        },
        correctAnswer: "A"
      },
      
      {
        question: " 4 - Which of the following is the correct way to get a normalized path?",
        answers: {
          A: "os.normalize('/test/test1//2slashes/1slash/tab/..')",
          B: "fs.normalize('/test/test1//2slashes/1slash/tab/..')",
          C: "path.normalize('/test/test1//2slashes/1slash/tab/..')",
          D: "None of the above."
        },
        correctAnswer: "C"
      },
      
      {
        question: " 5 -What npm stands for?",
        answers: {
          A: "Node Project Manager",
          B: "Node Package Manager",
          C: " New Project Manager",
          D:"New Package Manager"
        },
        correctAnswer: "B"
      },
      
      {
        question: " 6 - Is process a global object?",
        answers: {
          A: "true",
          B: "false",
          C: "None of the above."
         
        },
        correctAnswer: "A"
      },
      
     {
        question: " 7 - Which of the following is true about Piping streams?",
        answers: {
          A: "Piping is a mechanism where we provide output of one stream as the input to another stream.",
          B: "Piping is normally used to get data from one stream and to pass output of that stream to another stream.",
          C: "There is no limit on piping operations.",
          D: "All of the above."
        },
        correctAnswer: "D"
      },
      
      {
        question: " 8 - net.isIP(input) returns 6 for IP version 6 addresses.",
        answers: {
          A: " true",
          B: "false",
          C: "None of the above."
        },
        correctAnswer: "A"
      },
      
      {
        question: " 9 - Which of the following module is required to create a web server?",
        answers: {
          A: "url module",
          B: "net module",
          C: "http module",
          D: " web module"
        },
        correctAnswer: "C"
      },
      
      {
        question: " 10 - Which of the following provides in-built events.",
        answers: {
          A: "events",
          B: "callback",
          C: "throw",
          D: "handler"
        },
        correctAnswer: "A"
      }
    ];
  
    // display quiz right away
    buildQuiz();
  
    // on submit, show results
    submitButton.addEventListener("click", showResults);
  })();