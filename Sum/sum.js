document.querySelector("#button_id").addEventListener("click", function(){                     //| eventlistener till create-knappen 
    let n = document.getElementById("input_same_on_all_pages").value;                          //| låter n vara värdet man skriver i input
    newNumbers(n, true);                                                                       //| anger argumenten siffran som står i input och fill till true

    let allGridNumbers = document.querySelectorAll(".gridNumber");                             //| allGridNumber hämtar alla element som har klassen gridNumber (dvs. varje liten div)
    let countAllNumbers = 0;                                                                   //| 
    let countClickedNumbers = 0;                                                               //|

    for (let numberDiv of allGridNumbers) {                                                    //| numberDiv representerar den div/siffra just den iterationen kollar
        let number = parseInt(numberDiv.textContent);                                          //| number hämtar textContenten i diven (siffran som just nu räknas som en sträng/text) till en siffra
        countAllNumbers += number;                                                             //| countAllNumbers plussas med det nummer som då står i texten 

        numberDiv.addEventListener("click", function(){                                        //| lägger till en eventlistener på divarna så när man klickar på den så: 
            clickedNumber = parseInt(numberDiv.textContent);                                   //| hämtar clickedNumber textcontenten på diven man klickar på och gör om den till en siffra
            if(numberDiv.classList.contains("clicked")){                                       //| om nummer-diven har klassen clicked så 
                countClickedNumbers -= clickedNumber;                                          //| så tar den siffran från countern (countClickedNumbers)
                numberDiv.classList.remove("clicked");                                         //| om numberdiv:en har klassen clicked så tas klassen bort igen 

            }else{                                                                             //| om inte numbersdiv innehåller klassen clicked så..
                countClickedNumbers += clickedNumber;                                          //| plussar den på siffran i diven man klickar på till den vita rutan där summan syns av de man klickar på 
                numberDiv.classList.add("clicked");                                            //| och lägger till clicked, när man klickar på den 
            }                                                                                  //|

            document.querySelector("#sum_clicked_numbers").textContent = countClickedNumbers;  //| sen ändras text contenten till det man lägger till 
        })
    }                                                                                          //|

    document.querySelector("#p_new_random_number").textContent = countAllNumbers;              //| i vilket fall som så när man klickar på "create" så räknar den ihop alla siffror i divarna

    let resetButton = document.querySelector("#reset_button");                                 //| reset_button hämtar reset_button från html 
    resetButton.addEventListener("click", function(){                                          //| om man klickar på "reset"
        for(let numberDiv of allGridNumbers){                                                  //| numberdiv representerar den del i listan man under den iterationen går igenom
            countClickedNumbers = 0;                                                           //| sätter countClickedNumbers till 0 igen
            numberDiv.classList.remove("clicked");                                             //| tar bort klassen "clicked" från diven 
            document.querySelector("#sum_clicked_numbers").textContent = "-";                  //| ändrar så att det står "-" i sum of marked vita rutan 
        }                                                                                      //| 
    })                                                                                         //|

})                                                                                             //|