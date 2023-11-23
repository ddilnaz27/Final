const quizData = [
    {
        question: "What is the capital of Turkey?",
        a: "Izmir",
        b: "Istanbul",
        c: "Antalya",
        d: "Ankara",
        correct: "d",
    },
    {
        question: "What place is popular with hot air ballons?",
        a: "Bodrum",
        b: "Cappadocia",
        c: "Antalya",
        d: "Ephesus",
        correct: "b",
    },
    {
        question: "What was the name of Istanbul during the Roman Empire?",
        a: "Constantinople",
        b: "Ephesus",
        c: "Bursa",
        d: "Gaziantep",
        correct: "a",
    },
    {
        question: "How many of the 'Seven Wonders of the Ancient World' were located in Turkey?",
        a: "5",
        b: "2",
        c: "3",
        d: "1",
        correct: "b",
    },
    {
        question: "What is the name of the famous mosque located in Turkey?",
        a: "The Yellow Mosque",
        b: "The Green Mosque",
        c: "The Red Mosque",
        d: "The Blue Mosque",
        correct: "d",
    },
    {
        question: "What is the name of the famous Turkish dessert?",
        a: "Turkish Moonlight",
        b: "Turkish Sunlight",
        c: "Turkish Delight",
        d: "Turkish Midnight",
        correct: "c",
    },
    {
        question: "Kazakhstanis need VISA to fly to Turkey",
        a: "True",
        b: "False",
        c: "Maybe",
        d: "I don't know",
        correct: "b",
    },
    {
        question: "What part of the world’s production of hazelnuts does Turkey supply?",
        a: "65%",
        b: "50%",
        c: "30%",
        d: "75%",
        correct: "d",
    },
    {
        question: "How is 'Pamukkale' translated in English?",
        a: "Ice castle",
        b: "White castle",
        c: "Cotton castle",
        d: "Snow castle",
        correct: "c",
    },
    {
        question: "How many people lived in Ephesus?",
        a: "300000",
        b: "3000",
        c: "30000",
        d: "350000",
        correct: "a",
    },
    {
        question: "Would you like to visit Turkey with me?",
        a: "I don't know",
        b: "YES",
        c: "No",
        d: "Maybe",
        correct: "b",
    },
    {
        question: "Did you like my website?",
        a: "It's not correct",
        b: "No, try option 'c'",
        c: "Go down",
        d: "OF COURSE",
        correct: "d",
    }
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})


/*const questions=[
    {
        question: "what is tijgt",
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: true},
            { text: "4", correct: false}
        ]
    },

    {
        question: "wehjivr",
        answers: [
            { text: "1", correct: true},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: false}
        ]
    },

    {
        question: "outyddtn",
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: true}
        ]
    },

    {
        question: "wGFRHETG",
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: true},
            { text: "3", correct: false},
            { text: "4", correct: false}
        ]
    },

    {
        question: "ryhrsnzs",
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: true},
            { text: "4", correct: false}
        ]
    }
];

const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentquestionIndex=0;
let score=0;

function startQuiz(){
    currentquestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){

    resetState();

    let currentQuestion=questions[currentquestionIndex];
    let questionNo=currentquestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    })
    nextButton.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}

function handleNextbutton(){
    currentquestionIndex++;
    if(currentquestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentquestionIndex < questions.length){
        handleNextbutton();
    }
    else{
        startQuiz();
    }
})

startQuiz();*/