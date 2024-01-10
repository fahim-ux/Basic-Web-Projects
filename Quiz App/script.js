const questions=[
    {
        question:"Which is the largest animal?",
        answers:[
            {text:"Shark",correct:false},
            {text:"Blue Whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Girrafe",correct:false}
        ]
    },
    {
        question:"Which is the smallest country in the world?",
        answers:[
            {text:"Vatican City",correct:true},
            {text:"Bhutan",correct:false},
            {text:"Nepal",correct:false},
            {text:"Sri Lanka",correct:false}
        ]
    },
    {
        question:"Which is the largest desert in the world?",
        answers:[
            {text:"Kalahari",correct:false},
            {text:"Gobi",correct:false},
            {text:"Sahara",correct:false},
            {text:"Antartica",correct:true}
        ]
    },
    {
        question:"Which is the smallest continent in the world?",
        answers:[
            {text:"Asia",correct:false},
            {text:"Australia",correct:true},
            {text:"Arctic",correct:false},
            {text:"Africa",correct:false}
        ]
    }
]

let questionElement=document.getElementById("question")
let answerButton=document.getElementById("answer-buttons")
let nextButton=document.getElementById("next-btn")

let currentQuestionIndex=0
let score=0

function showQuestion()
{
    resetState()
    let currentQuestion=questions[currentQuestionIndex]
    let questionNo=currentQuestionIndex+1
    questionElement.innerHTML=questionNo+". "+currentQuestion.question

    currentQuestion.answers.forEach((answer) => {
        const button1=document.createElement("button")
        button1.innerHTML=answer.text
        button1.classList.add("btn")
        answerButton.appendChild(button1)
        if(answer.correct)
        {
            button1.dataset.correct=answer.correct
        }
        button1.addEventListener("click",selectAnswer)
    })
}


function startQuiz()
{
    currentQuestionIndex=0
    score=0
    nextButton.innerHTML="Next"
    showQuestion()
}

function resetState()
{
    nextButton.style.display="none"
    while(answerButton.firstChild)
    {
        answerButton.removeChild(answerButton.firstChild)
    }
}

function selectAnswer(e)
{
    const selectedBtn=e.target
    const iscorrect=selectedBtn.dataset.correct === "true"
    if(iscorrect)
    {
        selectedBtn.classList.add("correct")
        score++
    }
    else
    {
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButton.children).forEach(button1=>{
        if(button1.dataset.correct === "true"){
            button1.classList.add("correct")
        }
        button1.disabled=true
    })
    nextButton.style.display="block"
}

function showScore()
{
    resetState()
    questionElement.innerHTML=`You scored ${score} out of ${questions.length} questions`
    nextButton.innerHTML="Play Again"
    nextButton.style.display="block"
}

function handleNextButton()
{
    currentQuestionIndex++
    if(currentQuestionIndex < questions.length)
    {
        showQuestion()
    }
    else
    {
        showScore()
    }
}


nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length)
    {
        handleNextButton()
    }
    else
    {
        startQuiz()
    }
})

startQuiz()