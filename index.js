
const numbers = document.querySelector("#numbers")

function randomNumber (min, max) { 
    return Math.floor(min + (max - min) * Math.random()); // denna funktion väljer en random siffra mellan det minsta och högst tal man skriver när man anropar funktionen
}

// return Math.florr(Math.random() * 100)

function newNumbers (n, fill) {
    const numbersContainer = document.getElementById("numbers")

    numbersContainer.innerHTML = ""; 

    for (let i = 0; i < n; i++) {
        const div = document.createElement("div"); 
        numbersContainer.appendChild(div); 

        div.style.backgroundColor = "rgb(117, 174, 183)";
        div.style.borderRadius = "4px";
        div.style.border = "2px solid white";
        div.style.color = "white";
        div.style.display = "flex"; 
        div.style.justifyContent = "center"
        div.style.padding = "8px";
        

        if (fill) {
            div.textContent = randomNumber(1, 99); 
        } else {
            div.textContent = "-";
        }

    }
}
