const quoteContainer=document.getElementById('quote-generator');
const quoteText=document.getElementById('quote');
const authorText=document.getElementById('author');
const twitterBtn=document.getElementById('twitter');
const newQuoteBtn=document.getElementById('new-quote')
// const loader=document.getElementById('loader');

let apiQuotes=[];

// // show loading
// function loading() {
//     loader.hidden=false;
//     quoteContainer.hidden=true;
// }

// //hide loading
// function complete() {
//     quoteContainer.hidden=true;
//     loader.hidden=false;
// }

//show new quote
function newQuote() {
    // loading();
    //pick a random quotes from apiQuotes array
const quote= apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

// check author field is blank and replace it with 'unknown' 
if(!quote.author){
    authorText.textContent='Unknown';
}else{
    authorText.textContent=quote.author;
}

//check quote length to determine styling
if(quote.text>120){
    quoteText.classList.add('long-quote');
}else{
    quoteText.classList.remove('long-quote');
}

//set Quote. Hide Quote
quoteText.textContent=quote.text;
// complete();
}

// get quotes from API
async function getQuotes(){
    // loading();
 const apiUrl='https://type.fit/api/quotes';
  try{
      const response=await fetch(apiUrl);
      apiQuotes=await response.json();
      newQuote();
   }catch{
    // catch error
     }
}

// tweet Quote
function tweetQuote() {
    const twitterUrl=`https://twitter.com/intent/tweet?text=${quoteText.textContent}-${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

//Event Listeners
newQuoteBtn.addEventListener('click' , newQuote);
twitterBtn.addEventListener('click',tweetQuote);

// on load
 getQuotes(); 
// loading();