import quoteCollection from './quotes.js';

const text = document.querySelector('#main-quote-text');
const author= document.querySelector('#author');
const button= document.querySelector('#new-quote');


const handleClick = () => {

    const randomIndex= Math.floor(Math.random()*(quoteCollection.quotes.length+1))
    text.innerText=quoteCollection.quotes[randomIndex].quote;
    author.innerText=quoteCollection.quotes[randomIndex].author;
    return randomIndex;
};

text.textContent=quoteCollection.quotes[handleClick()].quote;
author.textContent=quoteCollection.quotes[handleClick()].author;


button.addEventListener('click', handleClick);


