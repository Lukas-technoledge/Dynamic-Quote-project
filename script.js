const quotes = [
    {
        name: 'author 1',
        quote: 'quote 1' 
    },
    {
        name: 'author 2',
        quote: 'quote 2' 
    },
    {
        name: 'author 3',
        quote: 'quote 3' 
    },
    {
        name: 'author 4',
        quote: 'quote 4' 
    },
    {
        name: 'author 5',
        quote: 'quote 5' 
    }
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteText = document.querySelector('#quote');
const quoteAuthor = document.querySelector('#quoteAuthor');


const displayQuote = () => {
    let random =  Math.floor(Math.random() * quotes.length);
    
    quoteText.innerHTML = quotes[random].name;
    quoteAuthor.innerHTML = quotes[random].quote;
};

quoteBtn.addEventListener('click', displayQuote)
