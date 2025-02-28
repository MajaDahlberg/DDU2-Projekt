
const numbers = document.querySelector("#numbers");

function randomNumber (min, max) { 
    return Math.floor(min + (max - min) * Math.random()); 
}

//______________________________________________________________|
function newNumbers (n, fill) {                               //|
    let numbersContainer = document.getElementById("numbers");//| Hämtar behållaren som divarna ska va i
    numbersContainer.innerHTML = "";                          //|
    //__________________________________________________________|
    
    //____________________________________________________
    for (let i = 0; i < n; i++) {                       //|
        const div = document.createElement("div");      //| Skapar divar som läggs till i numberscontainer
        numbersContainer.appendChild(div);              //| Divarna får klassen gridNumber
        div.className = "gridNumber";                   //|
                                                        
        if (fill) {                                     //|är fill: 
            div.textContent = randomNumber(1, 99);      //|true - fylls de med ett random nummer mellan 1-99
        } else {                                        //| 
            div.textContent = "-";                      //|false - fylls de med - 
        }                                               //|

    }                                                   //| när man aropar funktionen i de andra js-dokumenten så ger jag argumentet (true, n)
}   //____________________________________________________|



 




