// Ucapan waktu dinamis
const footer = document.getElementById("footer-text");

const now = new Date();
const hours = now.getHours();
let greeting = "";

if (hours < 12) {
  greeting = "Selamat pagi! Semangat berkarya! ☀️";
} else if (hours < 18) {
  greeting = "Selamat siang! Jangan lupa senyum 😊";
} else {
  greeting = "Selamat malam! Saatnya istirahat 🌙";
}

footer.textContent = greeting;
