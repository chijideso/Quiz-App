const question =[
    {
        question:"which is the largetst animal in the world?",
        answers: [
            {text:"shark",correct: false},
            {text:"Blue wahale",correct: true},
            {text:"Elephant",correct: false},
            {text:"Giraf",correct: false},
        ]
    },
    {
        question:"what do they call someone without Nose..?",
        answers: [
            {text:"No Nose",correct: false},
            {text:"Noseless",correct: false},
            {text:"who Nose",correct: true},
            {text:"big Nose",correct: false},
        ]
    },
    {
        question:"One of the front-end major programming langusge is ...?",
        answers: [
            {text:"HTML",correct: false},
            {text:"CSS",correct: false},
            {text:"Sql",correct: false},
            {text:"JavaScript",correct: true},
        ]
    },
    {
        question:"one of the primary colors is ..?",
        answers: [
            {text:"Orange",correct: false},
            {text:"Black",correct: false},
            {text:"Green",correct: false},
            {text:"Red",correct: true},
        ]
    },
    {
        question:"what is the full meaning of CSS?",
        answers: [
            {text:"common sensical sence",correct: false},
            {text:"Commercial of saving services",correct: false},
            {text:"cheif security service",correct: false},
            {text:"cascading style sheet",correct: true},
        ]
    },
    {
        question:"who is the current president of Nigeria?",
        answers: [
            {text:"Mohammed",correct: false},
            {text:"yaradua",correct: false},
            {text:"jonathan",correct: false},
            {text:"BAT",correct: true},
        ]
    }
];

//grtting ellemnts from html
const questionElment =document.getElementById("questions");
const answerButton =document.getElementById("answer-buttons");
const nextButton =document.getElementById("next-btn");
 //the current score is 0
let currentQuestionIndex = 0;
let score = 0;
function  startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML= "Next"; 
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElment.innerHTML= questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct= answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}
function resetState(){
    nextButton.style.display= "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct== "true";
    if(isCorrect){
        selectedBtn.classList.add("correct")
        score++;
    }else{
        selectedBtn.classList.add("incorrect") 

    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct ==="true"){
            button.classList.add("correct");

        } 
        button.disabled = true;
    });
    nextButton.style.display ="block";
}
function showScore(){
    resetState();
    questionElment.innerHTML = `you scored ${score} out of ${question.length}!`;
    nextButton.innerHTML = "Re-take Quiz";
    nextButton.style.display = "block";
}
 function handleNextButton(){
     currentQuestionIndex++;
     if(currentQuestionIndex< question.length){
        showQuestion();
     }else{
        showScore();
     }
 }


nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < question.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
startQuiz()