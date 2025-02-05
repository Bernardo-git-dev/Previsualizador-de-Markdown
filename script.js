const textElement = document.getElementById('text')
const authorElement = document.getElementById('author')
const newQuoteButton = document.getElementById('new-quote')
const tweetQuoteButton = document.getElementById('tweet-quote')

const quotes = [
  {
    text: 'A vida é o que acontece enquanto você está ocupado fazendo outros planos.',
    author: 'John Lennon',
  },
  {
    text: 'Seja a mudança que você quer ver no mundo.',
    author: 'Mahatma Gandhi',
  },
  {
    text: 'O único limite para nossas realizações de amanhã são nossas dúvidas de hoje.',
    author: 'Franklin D. Roosevelt',
  },
]

let currentQuote = null

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  currentQuote = quotes[randomIndex]
  return currentQuote
}

function displayQuote() {
  textElement.textContent = currentQuote.text
  authorElement.textContent = `- ${currentQuote.author}`
  updateTweetButton()
}

function updateTweetButton() {
  const tweetUrl = `https://twitter.com/intent/tweet?text="${encodeURIComponent(
    currentQuote.text
  )}" - ${encodeURIComponent(currentQuote.author)}`
  tweetQuoteButton.href = tweetUrl
}

newQuoteButton.addEventListener('click', () => {
  getRandomQuote()
  displayQuote()
})

getRandomQuote()
displayQuote()
