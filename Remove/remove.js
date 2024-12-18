
let pNewRandomNumber = document.getElementById("p_new_random_number");

document.getElementById("new_random_number_button").addEventListener("click", function(){
    pNewRandomNumber.textContent = randomNumber(0, 99);
    // loggar det random nummer som skriv in när man klickar på new random number knappen 
    
    let allNumbers = document.querySelectorAll("#numbers div")

    for (let foundNumber of allNumbers) { // en loop för att den måste gå igenom alla siffror som finns och hitta de som är samma som det som står i input 
        if (foundNumber.textContent == pNewRandomNumber.textContent) {
            foundNumber.classList.add("highlighted"); 
        }
    } 
});




document.getElementById("remove_button").addEventListener("click", function(){
     // hämtar id:et till p (vita rutan bredvid "new_random_number")
    let targetNumber = pNewRandomNumber.textContent; // targetNumber har värdet textcontent:en av p:et
    let removedNumbers = document.getElementById("p_remove"); // removedNumbers har värdet id:et på p_remove

    let allGridNumbers = document.querySelectorAll("#numbers div"); // hämtar alla divarna som har nummrena i sig
    let count = 0; // ger "count" startvärdet 0 

    for (let oneGridNumber of allGridNumbers) {
        if (oneGridNumber.textContent == targetNumber) {// om textinnehållet till siffran som är vald att raderas är samma som textinnehållet i p-rutan bredvid 
        count++; // om villkoret stämmer så adderas 1 på count 
        
        oneGridNumber.classList.add ("removed");
        oneGridNumber.textContent = "X";
        }
    }

    if (count > 0) {
        removedNumbers.textContent = `${targetNumber} removed ${count} times`;
    } else {
        removedNumbers.textContent = "Nothing to remove";
    }

})


