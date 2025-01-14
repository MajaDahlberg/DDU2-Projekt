/* 

click on a number to find copies: 
- klickar på ett av nummerna i griden - finns det fler än en av det nummer så highlightas det (sätt in css för det) och textcontenten 
ändras till antalet kopier det finns av vilket nummer "X copies of the number XX"

trycker man på reset så återgår sidan till hur den såg ut från början 



*/

document.getElementById("button_id").addEventListener("click", function (){ // gör så att när man klickar på "create"-knappen så kommer det man skriver i input att påverka hur många siffror som dyker upp på sidan
    let n = document.getElementById("input_same_on_all_pages").value;
    newNumbers(n, true);

    let allGridNumbers = document.querySelectorAll(".gridNumber");

    for(let numberDiv of allGridNumbers){
        numberDiv.addEventListener("click", function(){
            let howManyNumbers = 0;
            let clickedNumber = numberDiv.textContent;

            for(let otherNumberDiv of allGridNumbers){
                otherNumberDiv.classList.remove("clicked");
            }

            for(let otherNumberDiv of allGridNumbers){
                if(otherNumberDiv.textContent == numberDiv.textContent){
                    howManyNumbers++;
                    otherNumberDiv.classList.add("clicked");
                }
            }

            document.getElementById("found_numbers").textContent = `${howManyNumbers} copies found of the number ${clickedNumber}`;
        })
    }
})

document.getElementById("reset_button").addEventListener("click", function(){
    let allGridNumbers = document.querySelectorAll(".gridNumber");

    for(let numberDiv of allGridNumbers){
        numberDiv.classList.remove("clicked");
    }

    document.getElementById("found_numbers").textContent = "Click on a number to find copies";

})