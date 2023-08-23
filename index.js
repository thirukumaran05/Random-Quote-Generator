const quoteText = document.querySelector(".quote h1");
const copy = document.getElementById("copy");
const authorName = document.getElementById("author-name");
let quoteArray = []

async function getData(){
    const response = await fetch('https://api.quotable.io/random?minLength=50&maxLength=90');
    const data = await response.json();
    quoteArray.push({
        quote : data.content,
        author : data.author
    })
        
    quoteText.innerText = quoteArray[0].quote;
    authorName.innerText = `~ ${quoteArray[0].author}`;
}

getData();


copy.addEventListener("click" ,  function(){  
    navigator.clipboard.writeText(quoteArray[0].quote);
})

