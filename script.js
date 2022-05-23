const quotes = [
    {
        name: 'Nelson Mandela',
        quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.' 
    },
    {
        name: 'Walt Disney',
        quote: 'The way to get started is to quit talking and begin doing.' 
    },
    {
        name: 'Eleanor Roosevelt',
        quote: 'If life were predictable it would cease to be life, and be without flavor. ' 
    },
    {
        name: 'John Lennon',
        quote: "Life is what happens when you're busy making other plans." 
    },
    {
        name: 'James Cameron',
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success." 
    },
    {
        name: 'Oprah Winfrey',
        quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough." 
    },
    {
        name: 'Steve Jobs',
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking." 
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
