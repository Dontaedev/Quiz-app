const quizData = [
   //      ADD ALL THE QUESTIONS HERE IN THE SAME FORMAT AS YOU SEE
   
   
    {
        question: 'How old is dontae?',
        a: '10',
        b: '17',
        c: '32',
        d: '50',
        correct: 'b'
    }, {
        question: 'where is dontae from?',
        a: 'Japan',
        b: 'USA',
        c: 'Finland',
        d: 'Jamaica',
        correct: 'd' 
    }, {
        question: 'whats the best programming language?',
        a: 'python',
        b: 'C',
        c: 'Javascript',
        d: 'Ruby on Rails',
        correct: 'c'
    }, {
        question: 'where is the best programmers located?',
        a: 'India',
        b: 'USA',
        c: 'Uk',
        d: 'Canada',
        correct: 'b'
    }
]



const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text'); 
const b_text = document.getElementById('b_text'); 
const c_text = document.getElementById('c_text'); 
const d_text = document.getElementById('d_text'); 
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;


loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;

    b_text.innerText = currentQuizData.b;
    a_text.innerText = currentQuizData.a;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    
}

function getSelected() {
    

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}


function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    })
}

submitBtn.addEventListener("click", () => {
   //check to see answer 
    const answer = getSelected();
    

    if(answer === quizData[currentQuiz].correct) {
        score++
    } 

    if(answer) {
        currentQuiz++;
            
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {

            //               RELOAD BUTTON SECTION

            quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly.</h2>
             <button onClick="location.reload()">Play Again</button>`;
        }
    }

    
// TODO: create smth to show how many you got right

 


});