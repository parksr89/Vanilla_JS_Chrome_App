const quotes= [
    {
        quote: "Learn from the mistakes of others. You can't live long enough to make them all yourself.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "The most important thing to remember is this: to be ready at any moment to give up what you are for what you might become.",
        author: "W.E.B. Du Bois",
    },
    {
        quote: "Once you choose hope, anything’s possible.",
        author: "Christopher Reeve",
    },
    {
        quote: "At the age of 18, I made up my mind to never have another bad day in my life. I dove into a endless sea of gratitude from which I've never emerged.",
        author: "Patch Adams MD",
    },
    {
        quote: "Every battle is lost or won in the arena of the mind.",
        author: "Kierra C.T. Banks",
    },
    {
        quote: "henever you find yourself on the side of the majority, it is time to reform (or pause and reflect).",
        author: "Mark Twain",
    },
    {
        quote: "Knowing yourself is the beginning of all wisdom.",
        author: "Aristotle",
    },
    {
        quote: "he saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.",
        author: "Isaac Asimov",
    },
    {
        quote: "Any fool can know. The point is to understand.",
        author: "Albert Einstein",
    },
    {
        quote: "Turn your wounds into wisdom.",
        author: "Oprah Winfrey",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;