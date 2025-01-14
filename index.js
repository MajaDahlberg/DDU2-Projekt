
const numbers = document.querySelector("#numbers");

function randomNumber (min, max) { 
    return Math.floor(min + (max - min) * Math.random()); 
}


function newNumbers (n, fill) {
    let numbersContainer = document.getElementById("numbers");
    numbersContainer.innerHTML = ""; 
    
    
    for (let i = 0; i < n; i++) {
        const div = document.createElement("div"); 
        numbersContainer.appendChild(div);  
        div.className = "gridNumber";

        if (fill) {
            div.textContent = randomNumber(1, 99); 
        } else {
            div.textContent = "-";
        }

    }
}



 




