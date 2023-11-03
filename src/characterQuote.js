import { showQuoteByCharName, characterNameUrl } from "./eventListeners";

function createCharacterQuotePage() {
    const content = document.querySelector('#content');


    const quoteContainer = document.createElement('div');
    quoteContainer.classList.add('quote-container');
    content.appendChild(quoteContainer);

    const input = document.createElement('input');
    input.classList.add('user-input');
    input.setAttribute('id', 'character-input');
    input.placeholder = 'Nombre del Personaje';
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
    submit.setAttribute('id', 'character-name-btn');
    submit.textContent = 'Buscar Frase';
    quoteContainer.appendChild(submit); 

    showQuoteByCharName();
    
}

export default createCharacterQuotePage;