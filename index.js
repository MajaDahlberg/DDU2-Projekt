
const numbers = document.querySelector("#numbers");

function randomNumber (min, max) { 
    return Math.floor(min + (max - min) * Math.random()); // denna funktion väljer en random siffra mellan det minsta och högst tal man skriver när man anropar funktionen
}


function newNumbers (n, fill) {
    let numbersContainer = document.getElementById("numbers");
    numbersContainer.innerHTML = ""; // för varje gång man trycker på knappen "create" tömsinnehållet 
    
    

    for (let i = 0; i < n; i++) {
        const div = document.createElement("div"); // div är namnet för små-divvarna, använd till background-color grejen
        numbersContainer.appendChild(div);  
        div.className = "gridNumber";

        if (fill) {
            div.textContent = randomNumber(1, 99); 
        } else {
            div.textContent = "-";
        }

    }


}



// let newColorWhenHoverNumbers = document.getElementById("div"); 
// let originalColorOfNumbers = document.getElementById("div");

// function hoverEffect () {
//     newColorWhenHoverNumbers.addEventListener("mouseover", function(){
//         newColorWhenHoverNumbers.style.backgroundColor = "rgb(63, 83, 119)";
//     })

//     originalColorOfNumbers.addEventListener("mouseover", function(){
//         originalColorOfNumbers.style.backgroundColor = "blue";
//     })

// }
 




