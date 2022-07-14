const quizDB = [ 
    {
        question: "Q1: Explain hoisting in javascript?",
        a: "Variables and functions are not declared",
        b: "The Scope only Local",
        c: "Default behaviour of js",
        d: "Variable initialization are hoisted",
        e: "None Hoisting",
        ans:"ans3"
},

{
    question: "Q2: js is a____language?",
        a: "Object-based",
        b: "None",
        c: "Static-based",
        d: "procedural",
        e: "a,c,d",
        ans:"ans1"
},

{
    question: "Q3: which is the method used to access HTML elements using Js?",
        a: "getElementbyId()",
        b: "getElementByClassName()",
        c: "Both a & b",
        d: "None",
        e: "Console.log",
        ans:"ans3"
},

{
    question: "Q4: Upon encountering empty statements,what does javascript interpreter do?",
        a: "Throws an arrow",
        b: "Ignores the statements",
        c: "Gives a warning",
        d: "None",
        e: "All above",
        ans:"ans2"
},

{
    question: "Q5: what keyword is used to check whether a given property is valid or not?",
    a: "In",
    b: "is in",
    c: "exists",
    d: "lies",
    e: "None",
    ans:"ans1"
}

];


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
// const option5 = document.querySelector('#option5');


const submit = document.querySelector('#submit');


const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');


let questionCount = 0;

let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
    option5.innerText = questionList.e;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;


    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer= curAnsElem.id;
        }
    });

        return answer;
};



const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem = false );
};




submit.addEventListener('click' , () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };



    questionCount++;

    deselectAll();



    if(questionCount  < quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML = `
        <h3> You Scored ${score}/${quizDB.length} </h3>
        <button class="btn" onClick="location.reload()"> Play Again </button>`;


        showScore.classList.remove('scoreArea');
    }


});



