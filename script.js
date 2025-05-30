 const name = "Anjali";
let i = 0;
function typeWriter() {
  if (i < name.length) {
    document.getElementById("typewriter").innerHTML += name.charAt(i);
    i++;
    setTimeout(typeWriter, 150);
  }
}
window.onload = typeWriter;

const clock = document.getElementById("clock");
const quoteBox = document.getElementById("quote");

const quotes = [
  "Every day is a new beginning.",
  "Midnight is a doorway to a new day.",
  "Rest now. Tomorrow brings new strength.",
  "You survived the day — now dream bigger.",
  "Good things come to those who hustle at dawn.",
  "Mehnat ka phal meetha hota hai.",
  "Raat ke baad savera zaroor hota hai.",
  "Sapne wahi pure hote hain jo neend tod dete hain.",
];

function updateClock() {
  const now = new Date();
  let h = now.getHours().toString().padStart(2, '0');
  let m = now.getMinutes().toString().padStart(2, '0');
  let s = now.getSeconds().toString().padStart(2, '0');

  clock.textContent = `${h}:${m}:${s}`;

 
  if (h === "00" && m === "00" && s === "00") {
    triggerMidnightEvent();
  }
}

setInterval(updateClock, 1000);

function triggerMidnightEvent() {
  document.body.classList.add("night-mode");
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteBox.textContent = randomQuote;
}




