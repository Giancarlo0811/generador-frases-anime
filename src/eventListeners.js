import {generateRandomQuote, generateQuoteByAnimeName, generateQuoteByCharName} from "./logic";

const randomUrl = 'https://animechan.xyz/api/random';
const animeNameUrl = 'https://animechan.xyz/api/random/anime?title=';
const characterNameUrl = 'https://animechan.xyz/api/random/character?name=';


function showRandomQuote() {
    const generateQuoteBtn = document.querySelector('.generate-quote');
    generateQuoteBtn.addEventListener('click', async() => {
        await generateRandomQuote(randomUrl);
    })
}

function showQuoteByAnimeName() {
    const quoteBtn = document.querySelector('.submit-btn');
    const userInput = document.querySelector('.user-input');
    quoteBtn.addEventListener('click', () => {
        generateQuoteByAnimeName(animeNameUrl, userInput.value);
        userInput.value = '';
    })
}

function showQuoteByCharName() {
    const quoteBtn = document.querySelector('.submit-btn');
    const userInput = document.querySelector('.user-input');
    quoteBtn.addEventListener('click', () => {
        generateQuoteByAnimeName(characterNameUrl, userInput.value);
        userInput.value = '';
    })
}

export {showRandomQuote, showQuoteByAnimeName, showQuoteByCharName,randomUrl, animeNameUrl, characterNameUrl};