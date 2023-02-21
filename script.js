const quotes = [  
  {    
    quote: "Be the change you wish to see in the world.",    
    author: "Mahatma Gandhi"  
  },  
  {   
    quote: "In three words I can sum up everything I've learned about life: it goes on.",    
    author: "Robert Frost"  
  },  
  {    
    quote: "The only way to do great work is to love what you do.",    
    author: "Steve Jobs"  
  },  
  {    
    quote: "You miss 100% of the shots you don't take.",    
    author: "Wayne Gretzky"  
  },  
  {    
    quote: "I have not failed. I've just found 10,000 ways that won't work.",    
    author: "Thomas Edison"  
  }
];


function getRandomQuoteIndex() {
  return Math.floor(Math.random() * quotes.length);
}

function displayRandomQuote() {
  const quoteIndex = getRandomQuoteIndex();
  const quote = quotes[quoteIndex];
  const quoteText = document.getElementById("text");
  const authorText = document.getElementById("author");
  quoteText.textContent = quote.quote;
  authorText.textContent = quote.author;
}

window.onload = displayRandomQuote;
const newQuoteButton = document.getElementById("new-quote");
newQuoteButton.addEventListener("click", displayRandomQuote);
