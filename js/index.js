//array of Html fills
let fill = [{
    "title": "QUESTION 1",
    "question": "It is considered that the first high-level language was?",
    "option1": "Ada",
    "option2": "C",
    "option3": "Fortran",
    "option4": "Java",
    "answer": "3"
}, {
    "title": "QUESTION 2",
    "question": "if, else, for and while are?",
    "option1": "Data access functions",
    "option2": "Type of data",
    "option3": "Control statements",
    "option4": "all of the above",
    "answer": "3"
}, {
    "title": "QUESTION 3",
    "question": "The number 1010 in binary is represented in decimal as?",
    "option1": "8",
    "option2": "65",
    "option3": "97",
    "option4": "None of the above",
    "answer": "4"
}, {
    "title": "QUESTION 4",
    "question": "int, char, float, string y boolean are?",
    "option1": "Control statements",
    "option2": "Type of data",
    "option3": "Data acess functions",
    "option4": "Data access instructions",
    "answer": "2"
}, {
    "title": "QUESTION 5",
    "question": "What does EOF mean?",
    "option1": "Empty or full",
    "option2": "End of file",
    "option3": "End of loop",
    "option4": "None of the above",
    "answer": "2"
}]
//images wrong or correct
let imageCorrect = document.getElementById("correct");
let imageWrong = document.getElementById("wrong");
//variables general
let body = document.getElementsByTagName('body')[0];
let first = document.getElementById("first");
let contenedor = document.getElementsByClassName("contenedor")[0];
let question = document.getElementsByClassName("question")[0];
let title = document.getElementById("title");
let paragraph = document.getElementById("redact");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");
let message = document.getElementById("message");
let button = document.getElementById("start");
let check = document.getElementById("check");
let next = document.getElementById("next");
 let result = document.getElementById("result");
let input = document.querySelectorAll('.inputs input[type="radio"]');
let again = document.getElementById("again")
// points and question variables
let actualQuestion = 0;
let points = 0;
let numQuestions = fill.length;
// init page
body.addEventListener('load', start(), false);

function start() {

    question.style.display = 'none';

    // listener button
    button.addEventListener('click', function() {
     
        first.style.display = 'none';
        contenedor.style.background = '#FFA54F';
        question.style.display = 'block';
        next.disabled = true;
    });
}
// fill html 
function arrays(index) {
    let quest = fill[index];
    title.textContent = quest.title;
    paragraph.textContent = quest.question;
    option1.textContent = quest.option1;
    option2.textContent = quest.option2;
    option3.textContent = quest.option3;
    option4.textContent = quest.option4;
    message.style.display = 'none';
}
// check answer
function nextQuestion() {
    let choose = document.querySelector('input[type=radio]:checked');
    if (!choose) {
        message.style.display = 'block';
        message.textContent = "Please answer the question";
        message.style.marginTop = "20px";
        message.style.fontSize = "0.7em";
    } else {
        let value = choose.value;
        if (fill[actualQuestion].answer == value) {
            imageCorrect.style.display = "block";
            disabledInputs()
            points += 20;
        } else {
            imageWrong.style.display = 'block';
            disabledInputs()
        }
        if ((choose.checked)) {
            message.style.display = "none";
            next.disabled = false;
            check.disabled = true;
        }
        choose.checked = false;
        actualQuestion++;
        if (actualQuestion === numQuestions) {
            next.textContent = "Result";
        }
    }
}
//button next
next.addEventListener('click', function() {
    if (actualQuestion === numQuestions) {
       
        let score = document.getElementById("score");
        question.style.display = 'none';
        contenedor.style.background = "#FFAE75";
        result.style.display = "block";
        score.textContent = "Your score " + points;
    } else {
        next.disabled = true;
        check.disabled =false;
        imageWrong.style.display = "none";
        imageCorrect.style.display = "none";
        activeInputs()
        arrays(actualQuestion);
    }
})
//disabled buttons after answer
function disabledInputs() {
    for (let i = 0; i < input.length; i++) {
        input[i].disabled = true;
    }
}
//active next question
function activeInputs() {
    for (let i = 0; i < input.length; i++) {
        input[i].disabled = false;
    }
}
// check the answer
check.addEventListener('click', nextQuestion)
again.addEventListener('click',function(){

   result.style.display="none";
   first.style.display="block";
   contenedor.style.background="#FF7163"
   actualQuestion=0;
   points = 0;
   correct.style.display = 'none';
   wrong.style.display = 'none';
   check.disabled=false;
   next.textContent="Next";
   activeInputs()


   arrays(actualQuestion)


});

arrays(actualQuestion);