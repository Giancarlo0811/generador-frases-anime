async function generateRandomQuote(url) {
    const quote = document.querySelector('#quote');
    const character = document.querySelector('#character-name');
    const anime = document.querySelector('#anime-name');

    const response = await fetch(url, {mode: 'cors'});
    let data = await response.json();

    quote.textContent = `"${data.quote}"`;
    character.textContent = `Personaje: ${data.character}`;
    anime.textContent = `Anime: ${data.anime}`;
}

async function generateQuoteByAnimeName(url, input) {
    const quote = document.querySelector('#quote');
    const character = document.querySelector('#character-name');
    const anime = document.querySelector('#anime-name');
    
    const response = await fetch(url + input, {mode: 'cors'});
    if (response.status == 404 || response.status == 400) {
        alert('No se pudo encontrar la frase');
    }
    else {
        let data = await response.json();

        quote.textContent = `"${data.quote}"`;
        character.textContent = `Personaje: ${data.character}`;
        anime.textContent = `Anime: ${data.anime}`;
    }
}

async function generateQuoteByCharName(url, input) {
    const quote = document.querySelector('#quote');
    const character = document.querySelector('#character-name');
    const anime = document.querySelector('#anime-name');
    
    const response = await fetch(url + input, {mode: 'cors'});
    if (response.status == 404 || response.status == 400) {
        alert('No se pudo encontrar la frase');
    }
    else {
        let data = await response.json();

        quote.textContent = `"${data.quote}"`;
        character.textContent = `Personaje: ${data.character}`;
        anime.textContent = `Anime: ${data.anime}`;
    }
}


export {generateRandomQuote, generateQuoteByAnimeName, generateQuoteByCharName};