var quotes = [
    "When you have a dream, you've got to grab it and never let go. — Carol Burnett",
    "Nothing is impossible. The word itself says 'I'm possible!'— Audrey Hepburn",
    "There is nothing impossible to they who will try.— Alexander the Great",
    "The bad news is time flies. The good news is you're the pilot.— Michael Altshuler",
    "Life has got all those twists and turns. You've got to hold on tight and off you go.— Nicole Kidman"

]
function newQuote(){
var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];

}

