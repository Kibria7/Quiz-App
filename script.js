const quizData = [
    {
        question: 'How old is Fiona',
        a: '10',
        b: '17',
        c: '30',
        d: '113',
        correct: 'b'
    },
    {
        question: 'What is the most used programming language in 2022?',
        a: 'JavaScript',
        b: 'Python',
        c: 'Java',
        d: 'C/C++',
        correct: 'a'
    },
    {
        question: 'Who is the President of US in 2022?',
        a: 'Donald Trump',
        b: 'Obama',
        c: 'Joe Biden',
        d: 'Obi-Wan Kanobi',
        correct: 'c'
    },
    {
        question: 'What does HTML stand for?',
        a: 'Hyperbolic Mint Lemonade',
        b: 'Hypertext Markup Language',
        c: 'Cascading Style Sheet',
        d: 'Hyper Mean Legs',
        correct: 'b'
    },
    {
        question: 'What year was JavaScript launched?',
        a: '1996',
        b: '1964',
        c: '1995',
        d: 'None of the above',
        correct: 'c'
    }
];

let currentQuestion = 0;

loadQuiz();

function loadQuiz(){

    currentQuestion++;
}