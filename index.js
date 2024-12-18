
const numbers = document.querySelector("#numbers")

function randomNumber (min, max) { 
    return Math.floor(min + (max - min) * Math.random()); // denna funktion väljer en random siffra mellan det minsta och högst tal man skriver när man anropar funktionen
}


function newNumbers (n, fill) {
    let numbersContainer = document.getElementById("numbers")
    numbersContainer.innerHTML = ""; // för varje gång man trycker på knappen "create" tömsinnehållet 
    


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

document.getElementById("button_id").addEventListener("click", function (){ // gör så att när man klickar på "create"-knappen så kommer det man skriver i input att påverka hur många siffror som dyker upp på sidan
    let n = document.getElementById("input_same_on_all_pages").value;
    newNumbers(n, true);
})

