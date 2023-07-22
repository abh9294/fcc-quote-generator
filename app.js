import quoteCollection from './quotes.js';

const quoteText = document.querySelector('#main-quote-text');
const author= document.querySelector('#author');
const button= document.querySelector('#new-quote');
const tweetLink= document.querySelector('#tweet-quote');
const themeSwitch= document.querySelector('#theme-switch');
const bodyBackground= document.querySelector('#body-background');
const text = document.querySelector('#textbox');


const handleClick = () => {
    const randomIndex= Math.floor(Math.random()*(quoteCollection.quotes.length+1));
    const newQuote = quoteCollection.quotes[randomIndex].quote;
    const newAuthor= quoteCollection.quotes[randomIndex].author; 
    quoteText.textContent=newQuote;
    author.textContent=newAuthor;
    return [newQuote,newAuthor];
};


const handleTweet=(event) => {
    event.preventDefault();
    const quoteOnScreen = quoteText.textContent;
    const authorOnScreen= author.textContent;
    const quotePlusAuthor= quoteOnScreen+"  --- "+authorOnScreen;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quotePlusAuthor)}`;

    window.open(tweetUrl,"_blank")
};

const handleTheme = (event) => {
    event.preventDefault();
    if (bodyBackground.classList.contains('light-bg-theme')){
        bodyBackground.classList.replace('light-bg-theme','dark-bg-theme');
        text.classList.replace('quote-text-light-theme','quote-text-dark-theme');
        author.classList.replace('author-text-light-theme','author-text-dark-theme');
        button.classList.replace('button-light-theme','button-dark-theme');
        tweetLink.classList.replace('tweet-light-theme','tweet-dark-theme');
        themeSwitch.classList.replace('switch-light-theme','switch-dark-theme');
        themeSwitch.setAttribute('title','Apply Light mode.');

    }else {
        bodyBackground.classList.replace('dark-bg-theme','light-bg-theme');
        text.classList.replace('quote-text-dark-theme','quote-text-light-theme');
        author.classList.replace('author-text-dark-theme','author-text-light-theme');
        button.classList.replace('button-dark-theme','button-light-theme');
        tweetLink.classList.replace('tweet-dark-theme','tweet-light-theme');
        themeSwitch.classList.replace('switch-dark-theme','switch-light-theme');
        themeSwitch.setAttribute('title','Apply dark mode.');
    }
};


quoteText.textContent=handleClick()[0];
author.textContent=handleClick()[1];


button.addEventListener('click', handleClick);
tweetLink.addEventListener('click',handleTweet);
themeSwitch.addEventListener('click',handleTheme);

