document.getElementById("button_id").addEventListener("click", function (){ 
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