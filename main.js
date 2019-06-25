let quotes = [
    "The Way to Get Started Is To Quit Talking And Begin Doing.<br><br> - Walt Disney",
    "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.<br><br> - Winston Churchill",
    "If You Are Working On Something That You Really Care About, You Don\'t Have To Be Pushed. The Vision Pulls You.<br><br> - Steve Jobs",
    "Whether You Think You Can Or Think You Can\'t, You\'re Right.<br><br> - Henry Ford",
    "Security Is Mostly A Superstition. Life Is Either A Daring Adventure Or Nothing.<br><br> - Helen Keller",
    "The Only Limit To Our Realization Of Tomorrow Will Be Our Doubts Of Today.<br><br> - Franklin D. Roosevelt",
    "Creativity Is Intelligence Having Fun.<br><br> - Albert Einstein",
    "Do What You Can With All You Have, Wherever You Are.<br><br> - Theodore Roosevelt",
    "I Think Goals Should Never Be Easy, They Should Force You To Work, Even If They Are Uncomfortable At The Time.<br><br> - Michael Phelps",
    "The Only Way To Do Great Work Is To Love What You Do. If You Haven\'t Found It Yet, Keep Looking. Don\'t Settle.<br><br> - Steve Jobs"

];

function newQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}