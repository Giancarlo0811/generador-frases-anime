import { showRandomQuote, randomUrl } from './eventListeners.js';

function createRandomQuotePage() {
    const content = document.querySelector('#content');

    const quoteContainer = document.createElement('div');
    quoteContainer.classList.add('quote-container');
    content.appendChild(quoteContainer);
    
    const quote = document.createElement('p');
    quote.setAttribute('id','quote');
    quoteContainer.appendChild(quote);

    const characterName = document.createElement('p');
    characterName.setAttribute('id','character-name');
    quoteContainer.appendChild(characterName);

    const animeName = document.createElement('p');
    animeName.setAttribute('id','anime-name');
    quoteContainer.appendChild(animeName);

    const generateQuoteBtn = document.createElement('button');
    generateQuoteBtn.classList.add('generate-quote');
    const icon = document.createElement('i');
    icon.classList.add('fa-solid', 'fa-arrows-rotate');
    generateQuoteBtn.textContent = 'Nueva Frase';
    generateQuoteBtn.appendChild(icon);
    quoteContainer.appendChild(generateQuoteBtn);

    showRandomQuote();
}

export default createRandomQuotePage;