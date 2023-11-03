import createRandomQuotePage from './randomQuote.js';
import createNavLinks from './navLinks.js';

function initalLoad() {
    createNavLinks();
    createRandomQuotePage();
    document.querySelector('#random-quote').classList.add('active');
}

export default initalLoad;