
document.getElementById("button_id").addEventListener("click", function (){ 
    let n = document.getElementById("input_same_on_all_pages").value;
    newNumbers(n, true);
})

let pNewRandomNumber = document.getElementById("p_new_random_number");

document.getElementById("new_random_number_button").addEventListener("click", function(){
    pNewRandomNumber.textContent = randomNumber(0, 99);
    
    let allNumbers = document.querySelectorAll("#numbers div")

    for (let foundNumber of allNumbers) { 
        if (foundNumber.textContent == pNewRandomNumber.textContent) {
            foundNumber.classList.add("highlighted"); 
        }
    } 
});




document.getElementById("remove_button").addEventListener("click", function(){
    let targetNumber = pNewRandomNumber.textContent; 
    let removedNumbers = document.getElementById("p_remove"); 

    let allGridNumbers = document.querySelectorAll("#numbers div"); 
    let count = 0;

    for (let oneGridNumber of allGridNumbers) {
        if (oneGridNumber.textContent == targetNumber) {
        count++;  
        
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


