import createRandomQuotePage from './randomQuote.js';
import createAnimeNameQuotePage from './animeNameQuote.js';
import createCharacterQuotePage from './characterQuote.js';

function createNavLinks() {
    const content = document.querySelector('#content');

    const linksContainer = document.createElement('div');
    linksContainer.classList.add('links-container');
    content.appendChild(linksContainer);

    const links = ['Random', 'Por Anime', 'Por Personaje'];
    for(let i = 0; i < links.length; i++) {
        const linkBtn = document.createElement('button');
        linkBtn.classList.add('link-btn')
        linkBtn.textContent = links[i];
        linksContainer.appendChild(linkBtn);
    }

    linksContainer.children[0].setAttribute('id', 'random-quote');
    linksContainer.children[1].setAttribute('id', 'anime-name-quote');
    linksContainer.children[2].setAttribute('id', 'character-quote');

    const randomQuote = document.querySelector('#random-quote');
    const animeNameQuote = document.querySelector('#anime-name-quote');
    const characterQuote = document.querySelector('#character-quote');

    randomQuote.addEventListener('click', () => {
        clearContent();
        createRandomQuotePage();
        randomQuote.classList.add('active');
        if(animeNameQuote.classList.contains('active') || characterQuote.classList.contains('active')) {
            animeNameQuote.classList.remove('active');
            characterQuote.classList.remove('active');
        }
    });
    animeNameQuote.addEventListener('click', () => {
        clearContent();
        createAnimeNameQuotePage();
        animeNameQuote.classList.add('active');
        if(randomQuote.classList.contains('active') || characterQuote.classList.contains('active')) {
            randomQuote.classList.remove('active');
            characterQuote.classList.remove('active');
        }
    });
    characterQuote.addEventListener('click', () => {
        clearContent();
        createCharacterQuotePage();
        characterQuote.classList.add('active');
        if(animeNameQuote.classList.contains('active') || randomQuote.classList.contains('active')) {
            animeNameQuote.classList.remove('active');
            randomQuote.classList.remove('active');
        }
    });
}

function clearContent() {
    const content = document.querySelector('#content');
    const pageContent = content.children[1];
    if (pageContent) {
        content.removeChild(pageContent);
    }
}

export default createNavLinks;