/*

man skriver in ett nummer i input, när man sen trycker på knappen så ska det markeas två siffror som får den summan man skriver i
inputet

finns det inte två nummer som får den summan så händer det ingeting 

*/

document.getElementById("button_id").addEventListener("click", function (){ // gör så att när man klickar på "create"-knappen så kommer det man skriver i input att påverka hur många siffror som dyker upp på sidan
    let n = document.getElementById("input_same_on_all_pages").value;
    newNumbers(n, true);
})

document.getElementById("button_add_up").addEventListener("click", function(){
    let addUpTo = document.getElementById("input_add_up").value;

    let allGridNumbers = document.querySelectorAll(".gridNumber");

    for(let gridNumber of allGridNumbers){
        gridNumber.classList.remove("clicked");
    }

    let foundNumbers = false;

    for(let gridNumber of allGridNumbers){
        for(let otherGridNumber of allGridNumbers){
            let numberOne = parseInt(gridNumber.textContent);
            let numberTwo = parseInt(otherGridNumber.textContent);

            if(numberOne + numberTwo == addUpTo){
                gridNumber.classList.add("clicked");
                otherGridNumber.classList.add("clicked");
                foundNumbers = true;
                break;
            }
        }
        if(foundNumbers == true){
            break;
        }
    }
})