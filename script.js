// Fonction pour générer une fausse IP aléatoire
function generateFakeIP() {
  return `${randomByte()}.${randomByte()}.${randomByte()}.${randomByte()}`;
}

function randomByte() {
  return Math.floor(Math.random() * 256);
}

// Affiche les fausses IPs dans la page
document.getElementById("ip1").innerText = "IP 1: " + generateFakeIP();
document.getElementById("ip2").innerText = "IP 2: " + generateFakeIP();
