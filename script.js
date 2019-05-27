'use strict';

const data = [
    {
        questions: "A popular white cheese made out of goat and sheeps milk.",
        answers: ["Brie", "Chevre", "Feta", "Gorgonzola"],
        correctAnswer: "Feta",
        icon: "https://www.chowhound.com/blog-media/2015/09/feta.jpg",
        alt: "feta image"
    },
    {
        questions: "This blue cheese is the only British cheese to have a certification trade mark and is EU protected.",
        answers: ["Gorgonzola", "Cornish Blue", "Stilton", "Roquefort"],
        correctAnswer: "Stilton",
        icon: "https://www.goudacheeseshop.com/pub/media/catalog/product/cache/a25e779ca7262f8cf9233993fa6b28be/b/l/blue_stilton_5_9.jpg",
        alt: "Stilton image"
    },
    {
        questions: "This popular French cheese is nicknamed “The Queen of Cheese” and named after the region of its origin.",
        answers: ["Brie", "Chevre", "Roquefort", "Feta"],
        correctAnswer: "Brie",
        icon: "http://cdn.shopify.com/s/files/1/2836/2982/products/brie-recipe_grande.jpg?v=1533088694",
        alt: "Brie image"
    },
    {
        questions: "A salty italian cheese gets its name from being made out of 100% sheep’s milk.",
        answers: ["Parmigiano", "Asiago", "Mozzarella", "Pecorino"],
        correctAnswer: "Pecorino",
        icon: "https://images-na.ssl-images-amazon.com/images/I/51bmOsxcXZL._SY355_.jpg",
        alt: "Pecorino cheese image"
    },
    {
        questions: "A french cheese made from goat’s milk it can be firm or soft with an earthy and tart profile.",
        answers: ["Brie", "Chevre", "Roquefort", "Asiago"],
        correctAnswer: "Chevre",
        icon: "https://cdn.castellocheese.com/globalassets/world-of-cheese/cheese-type-images/square/cheese-type-chevre.jpg?width=375&height=530&mode=crop",
        alt: "chevre image"
    },
    {
        questions: "Dutch cheese with a creamy texture and nutty flavor is very popular around the world.",
        answers: ["Monterey Jack", "Parrano", "Gouda", "Pecorino"],
        correctAnswer: "Gouda",
        icon: "https://images-na.ssl-images-amazon.com/images/I/41Y49vVUZnL.jpg",
        alt: "Gouda image"
    },
    {
        questions: "Creamy spreadable italian cheese similar to cream cheese.",
        answers: ["Ricotta", "Mascarpone", "Brie", "Gouda"],
        correctAnswer: "Mascarpone",
        icon: "https://assets.epicurious.com/photos/57aa13beb10b4fb03f234f44/master/pass/mascarpone.jpg",
        alt: "mascarpone image"
    },
    {
        questions: "A spanish cheese made from sheeps milk and produced in the region that is the home of Don Quixote.",
        answers: ["Manchego", "Gouda", "Parrano", "Asiago"],
        correctAnswer: "Manchego",
        icon: "https://cdn.shopify.com/s/files/1/0676/7551/products/Manchego_900x600_62fc2c2c-a3d1-4ecb-8fda-4d86db974d26.jpg?v=1494950801",
        alt: "manchego cheese image"
    },
    {
        questions: "Mild buttery true “American” cheese originated from mexican franciscan friars of California.",
        answers: ["Monterey Jack", "Cheddar", "Oaxaca", "Colby"],
        correctAnswer: "Monterey Jack",
        icon: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2F.%2Fhow-monterey-jack-got-its-name-fwx.jpg&w=450&c=sc&poi=face&q=85",
        alt: "monterey jack cheese image"
    },
    {
        questions: 'Most widely purchased and eaten hard cheese.',
        answers: ['Chevre', 'Gouda', 'Cheddar', 'Colby'],
        correctAnswer: 'Cheddar',
        icon: "https://cms.splendidtable.org/sites/default/files/styles/w2000/public/470340853.jpg?itok=Vu-VD1UP",
        alt: "cheddar cheese image"
    }
];

//quiz we questions that will generate after selecting the start button.
let questionNum = 0
let score = 0

function generateQuestions(){
    if (questionNum < data.length){
        return `<div class="question-${questionNum}">
        <h2 class="questionNum">${data[questionNum].questions}</h2>
        <form>
        <fieldset>
        <label class="answerChoices">
        <input type="radio" value="${data[questionNum].answers[0]}" name="answer" required>
        <span class="checkRadio">${data[questionNum].answers[0]}</span>
        </label>
        <label class="answerChoices">
        <input type="radio" value="${data[questionNum].answers[1]}" name="answer" required>
        <span class="checkRadio">${data[questionNum].answers[1]}</span>
        </label>
        <label class="answerChoices">
        <input type="radio" value="${data[questionNum].answers[2]}" name="answer" required>
        <span class="checkRadio">${data[questionNum].answers[2]}</span>
        </label>
        <label class="answerChoices">
        <input type="radio" value="${data[questionNum].answers[3]}" name="answer" required>
        <span class="checkRadio">${data[questionNum].answers[3]}</span>
        </label>
        <button type="submit" class="answerSubmit">Submit</button>
        </fieldset>
        </form>
        </div>`
    }else{
        resultsPage();
        restartQuiz();
        $('.js-question-number').text(10);
    }
  }

  // show what question you are out of 10 questions total.
  function changeQuestionNum(){
    questionNum ++;
    $('.questionNumber').text(questionNum+1);
}

//show score each time a question is answered right.
function incrementScore(){
    score ++;
}

// Start quiz by clicking on the start button and going to the question page
    function quizStart(){
    $('.start-page').on('click', '.js-start-button', function(event){
    event.preventDefault();
       $('.start-page').remove();
       $('.question-page').css('display', 'block');
       $('.questionNumber').text(1);
    });
}

//show question page and answer choices.
    function questionForm(){
        $('.question-page').html(generateQuestions());
    }


//page shown after answering questions
function selectAnswer(){
    $('form').on('submit', function(event){
     event.preventDefault();
     let selected = $('input:checked');
     let answer = selected.val();
     let correctAnswer = `${data[questionNum].correctAnswer}`;
     if(answer === correctAnswer){
         selected.parent().addClass('correct');
         answerIsCorrect();
     }else{
         selected.parent().addClass('wrong');
         wrongAnswer();
     }
    });
}

function answerIsCorrect(){
    answerFeedbackCorrect();
    newScore();
}

function wrongAnswer(){
    answerFeedbackWrong();
}

function answerFeedbackCorrect(){
    let correctAnswer = `${data[questionNum].correctAnswer}`;
    $('.question-page').html(
        `<div class="answerFeedback">
        <div class="icon"><img src="${data[questionNum].icon}" alt="${data[questionNum].alt}"/>
        </div>
        <p>Gouda Job!</p>
        <button type="button" class="nextButton">Next</button>
        </div>`);
}

function answerFeedbackWrong(){
    let correctAnswer = `${data[questionNum].correctAnswer}`;
    $('.question-page').html(
        `<div class="answerFeedback">
        <div class="icon"><img src="${data[questionNum].icon}" alt="${data[questionNum].alt}"/>
        </div>
        <p>Feta luck next time!<br/>The correct answer is <span>"${correctAnswer}"</span></p>
        <button type="button" class="nextButton">Next</button>
        </div>`);
}


function newScore(){
    incrementScore();
    $('.js-score-counter').text(score);
}

function resultsPage(){
    if(score >= 7){
      $('.question-page').html(
     `<div class="resultsFeedback">
      <h3>Good Job!</h3><p>Your score is ${score}</p>
      <button class="restartButton">Restart Quiz</button></div>`);
    }else {
      $('.question-page').html(
     `<div class="resultsFeedback">
      <h3>Good Try</h3>
      <p>You got ${score} right out of 10.</p>
      <button type="button" class="restartButton">Restart Quiz</button></div>`);
      } 

  }



// move to the next question
function nextQuestion(){
    $('main').on('click', '.nextButton', function(event){
      changeQuestionNum();
      questionForm();
      selectAnswer();
    });
}

//restart quiz
function restartQuiz(){
    $('main').on('click','.restartButton', function(event){
      location.reload();
    });
}



function createQuiz(){
    quizStart();
    questionForm();
    selectAnswer();
    nextQuestion();
}

$(createQuiz);