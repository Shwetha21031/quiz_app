const quizData = [
    {
        question: 'What do you call a type of shape that has five sides?',
        a: 'hexagon',
        b: 'pentagon',
        c: 'heptagon',
        d: 'triangle',
        correct: 'c'
    },{
        question: 'Which is the coldest location in the earth?',
        a: 'antartica',
        b: 'india',
        c: 'africa',
        d: 'greenland',
        correct: 'a'
    },{
        question:'Who discovered electricity?',
        a: 'grandpa',
        b: 'Benjamin franklin',
        c: 'Charles Babbage',
        d: 'potato seller',
        answer: 'b'
    },{
        question:'Which two parts of the body continue to grow for your entire life?',
        a: 'nose and ears',
        b: 'teeth and arms',
        c: 'none',
        d: 'fingers and toes',
        answer: 'a'
    },{
        question:'what is 2-2*3 (use order of precedence)',
        a: '6',
        b: '0',
        c: '3',
        d: '4',
        answer: 'd'
    }
];

const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');


let currentQuiz = 0;

loadQuiz();

function loadQuiz(){
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

submitBtn.addEventListener("click",() => {
    currentQuiz++;
if(currentQuiz < quizData.length){
    loadQuiz();
}else{
    alert('you finished!!!!')
}

   
});