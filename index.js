
const numbers = document.querySelector("#numbers")

function randomNumber (min, max) { 
    return Math.floor(min + (max - min) * Math.random()); // denna funktion väljer en random siffra mellan det minsta och högst tal man skriver när man anropar funktionen
}
