import { showQuoteByAnimeName, animeNameUrl } from "./eventListeners";

function createAnimeNameQuotePage() {
    const content = document.querySelector('#content');

    const quoteContainer = document.createElement('div');
    quoteContainer.classList.add('quote-container');
    content.appendChild(quoteContainer);

    const input = document.createElement('input');
    input.classList.add('user-input');
    input.setAttribute('id', 'anime-input');
    input.placeholder = 'Nombre del Anime';
    quoteContainer.appendChild(input);

    const quote = document.createElement('p');
    quote.setAttribute('id','quote');
    quoteContainer.appendChild(quote);

    const characterName = document.createElement('p');
    characterName.setAttribute('id','character-name');
    quoteContainer.appendChild(characterName);

    const animeName = document.createElement('p');
    animeName.setAttribute('id','anime-name');
    quoteContainer.appendChild(animeName);
    
    const submit = document.createElement('button');
    submit.classList.add('submit-btn');
    submit.setAttribute('id', 'anime-name-btn');
    submit.textContent = 'Buscar Frase';
    quoteContainer.appendChild(submit); 

    showQuoteByAnimeName();
}

export default createAnimeNameQuotePage;