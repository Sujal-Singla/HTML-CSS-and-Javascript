const quotes = [
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    text: "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs",
  },
  {
    text: "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.",
    author: "Oprah Winfrey",
  },
  {
    text: "If you set your goals ridiculously high and it’s a failure, you will fail above everyone else’s success.",
    author: "James Cameron",
  },
  {
    text: "Life is what happens when you’re busy making other plans.",
    author: "John Lennon",
  },
  {
    text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "Mother Teresa",
  },
  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
];
const qoute = document.querySelector(".qoute");
const author = document.querySelector(".author");
document.querySelector(".btn").addEventListener("click", () => {
  const randomQ = Math.floor(Math.random() * quotes.length);
  qoute.innerHTML = quotes[randomQ].text;
  author.innerHTML = `-` + quotes[randomQ].author;
});
