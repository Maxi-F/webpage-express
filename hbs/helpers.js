const hbs = require('hbs');

//helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
}); // function that its called when a template requires it
hbs.registerHelper('capitalize', (text) => {
    let words = text.split(' ');
    words.forEach((word, index) => {
        words[index] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    return words.join(' ');
});