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
        question: "1 -   Is HTML5 backward compatible with old browsers?"
        ,
        answers: {
          A: "true",
          B: "  false",
          
        },
        correctAnswer: "A"
      },
      {
        question: "2 - Which of the following tag can be used to mark up a conversation in HTML5?",
        answers: {
          A: ' footer',
          B: 'nav',
          C: 'dialog',
          D: ' figure',
          
        },
        correctAnswer: "C"
      },
      {
        question: "3 - Which of the following input control represents a date (year, month, day) encoded according to ISO 8601 in Web Form 2.0?"
       ,
        answers: {
          A: "datetime",
          B: " datetime-local",
          C: "date",
          D: "month  "
        },
        correctAnswer: "C"
      },
      {
        question: "4 - Which of the following is true about Session Storage in HTML5?",
        answers: {
          A: " HTML5 introduces the sessionStorage attribute which would be used by the sites to add data to the session storage. ",
          B: " It will be accessible to any page from the same site opened in that window i.e. session.",
          C: "As soon as you close the window, session would be lost. ",
          D: "All of the above."
        },
        correctAnswer: " D"
      },
      {
        question: "5 - Which of the following is correct about Server Side Events(SSE) in HTML5?",
        answers: {
          A: " Using SSE you can push DOM events continously from your web server to the visitor's browser. ",
          B: "  The event streaming approach opens a persistent connection to the server, sending data to the client when new information is available, eliminating the need for continuous polling.",
          C: " Server-sent events standardizes how we stream data from the server to the client. ",
          D: "All of the above."
         
        },
        correctAnswer: "D"
      },
      {
        question: "6 -  Which of the following is correct about geolocation api in HTML5??"
        ,
        answers: {
          A: " HTML5 Geolocation API lets you share your location with your favorite web sites. ",
          B: " A Javascript can capture your latitude and longitude and can be sent to backend web server and do fancy location-aware things like finding local businesses or showing your location on a map.",
          C: " Data storage space",
          D: " None of the above."
        },
        correctAnswer: "A"
      },
      {
        question: "7 -  Which of the following is correct about web workers in HTML5?"
       ,
        answers: {
          A: "Web Workers do all the computationally expensive tasks without interrupting the user interface and typically run on separate threads.",
          B: " Web Workers allow for long-running scripts that are not interrupted by scripts that respond to clicks or other user interactions.",
          C: "Web Workers allow long tasks to be executed without yielding to keep the page responsive. ",
          D: "All of the above."
        },
        correctAnswer: "D"
      },
      {
        question: "8 - Which of the following attribute triggers event after the document is printed?"
        ,
        answers: {
          A: " offlineprint",
          B: " onprint",
          C: "onafterprint",
          D: "onbeforeprint"
        },
        correctAnswer: "C"
      },
      {
        question: "9 -Which of the following attribute triggers event at the start of a drag operation?"
        ,
        answers: {
          A: "ondragleave",
          B: "  ondrag",
          C: "ondragover ",
          D: "ondragstart"
         
        },
        correctAnswer: "D"
      },
      {
        question: "10 -Which of the following attribute triggers event when the browser starts to load the media data?" 
      ,
        answers: {
          A: "onloadedmetadata",
          B: " onloadstart",
          C: " onmessage ",
          D: "onoffline"
        },
        correctAnswer: "B"
      }
    ];
  
    // display quiz right away
    buildQuiz();
  
    // on submit, show results
    submitButton.addEventListener("click", showResults);
  })();