const quotes = [
    {
        quote: "If you run you stand a chance of losing, but if you don't run you've already lose",
        author: "Barack Obama"
    },
    {
        quote: "They way to get started is to quit talking and begin doing",
        author: "Walt Disney"
    },
    {
        quote: "The greatest mistake you can make in life is to be continually fearing you will make one.",
        author: "Elbert Hubbard"
    },
    {
        quote: "Travel expands the mind and fills the gap.",
        author: "Sheda Savage"
    },
    {
        quote: "Only I can change my life. No one can do it for me.",
        author: "Carol Burnett"
    },
    {
        quote: "You're braver than you believe, and stronger than you seem, and smarter than you think.",
        author: "A.A. Milne"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        quote: "Sometimes even to live is an act of courage.",
        author: "Seneca"
    },
    {
        quote: "By nature, men are nearly alike. by practice, they get to be wide apart.",
        author: "Confucius"
    },
    {
        quote: "Anyone who has never made a mistake has never tried anything new.",
        author: "Albert Einstein"
    }

]


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author} -`;