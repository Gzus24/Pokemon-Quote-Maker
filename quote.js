let quotes = ["We do have a lot in common. The same earth, the same air, the same sky. Maybe if we started looking at what’s the same, instead of looking at what’s different, well, who knows?",
"Make your wonderful dream a reality, and it will become your truth", 
"A wildfire destroys everything in its path. It will be the same with your powers unless you learn to control them.",
"When you have lemons, you make lemonade; and when you have rice, you make rice balls.",
"That’s okay, Brock, you’ll find lots of other girls to reject you!", 
"I see now that the circumstances of one’s birth are irrelevant; it is what you do with the gift of life that determines who you are.",
"I’ll use my trusty frying pan… as a drying pan!"]


document.querySelector('button').addEventListener('click', getQuote);

function getQuote(){
    document.querySelector('#quotes').innerText = quotes[Math.floor(Math.random() * quotes.length)];
}