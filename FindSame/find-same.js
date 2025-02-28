//________________________________________________________________________________________________________________________________________|
                                                                                                                                        
document.getElementById("button_id").addEventListener("click", function (){                                                             //| create-button
    let n = document.getElementById("input_same_on_all_pages").value;                                                                   //| n tilldelas värdet som skrivs i input
    newNumbers(n, true);                                                                                                                //| anger argumenten siffran som står i input och fill till true

    let allGridNumbers = document.querySelectorAll(".gridNumber");                                                                      //| allGridNumbers hämtar alla element med klassen "gridnumber"

    for(let numberDiv of allGridNumbers){                                                                                               //| numberDiv representerar den div/siffra just den iterationen kollar
        numberDiv.addEventListener("click", function(){                                                                                 //| när man klickar på divarna...
            let howManyNumbers = 0;                                                                                                     //|
            let clickedNumber = numberDiv.textContent;                                                                                  //| clickedNumber hämtar texten som står i diven

            for(let otherNumberDiv of allGridNumbers){                                                                                  //| 
                otherNumberDiv.classList.remove("clicked");                                                                             //| 
            }                                                                                                                           //|

            for(let otherNumberDiv of allGridNumbers){                                                                                  //|
                if(otherNumberDiv.textContent == numberDiv.textContent){                                                                //| om den diven loopen är på just då har samma nummer som numret den är på i den loopen 
                    howManyNumbers++;                                                                                                   //| så adderas 1 på howManyNumbers som senare kommer ändra texten 
                    otherNumberDiv.classList.add("clicked");                                                                            //| också läggs css-klassen clicked till (färgen)
                }                                                                                                                       //|
            }                                                                                                                           //|

            document.getElementById("found_numbers").textContent = `${howManyNumbers} copies found of the number ${clickedNumber}`;     //| texten i elementen med id:et found_numbers ändras
        })                                                                                                                              //|
    }                                                                                                                                   //|
})                                                                                                                                      //|
//________________________________________________________________________________________________________________________________________|


//____________________________________________________________________________________________________|
document.getElementById("reset_button").addEventListener("click", function(){                       //| eventlistener till knappen "reset"
    let allGridNumbers = document.querySelectorAll(".gridNumber");                                  //| allGridNumbers hämtar alla element med klassen "gridnumber"

    for(let numberDiv of allGridNumbers){                                                           //| loopar igenom alla divarna/nummerna
        numberDiv.classList.remove("clicked");                                                      //| de divar som innehåller "clicked" så ska den raderas
    }                                                                                               //|

    document.getElementById("found_numbers").textContent = "Click on a number to find copies";      //| när man tryckt på reset så kommer ingenting ha "found_number" i sig men koden innebär att man ska hämta alla element med id "found_number" och ändra texten där 

})                                                                                                  //|
//____________________________________________________________________________________________________|