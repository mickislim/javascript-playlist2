const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

const api_url = "https://api.quotable.io/quotes/random";

async function getQuote(api_url) {
  const response = await fetch(api_url);
  const data = await response.json();

  quoteEl.innerHTML = data.content;
  authorEl.innerHTML = data.author;
}
getQuote(api_url);

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quoteEl.innerHTML +
      "---- by" +
      authorEl.innerHTML,
    "Tweet Window ",
    "width=600, height=300"
  );
}
