const url = "https://api.quotable.io/random"
const quote = document.getElementById("quote")
const author = document.getElementById("author")
const quoteContainer = document.getElementById("quote-container")
let quoteData = ""

async function getQuote() {
    quoteData = await fetch(url).then(response => {
            if(!response.ok){
                console.error("error getting quote from api")
            }
            
            return response.json()
        })
    quote.textContent = `"${quoteData.content}"`
    author.textContent = `-${quoteData.author}`
}