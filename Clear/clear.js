
//_________________________________________________________________________________________|
document.getElementById("button_id").addEventListener("click", function (){              //| create-button evenlistener
    let n = document.getElementById("input_same_on_all_pages").value;                    //| n tilldelas värdet som skrivs i input
    newNumbers(n, true);                                                                 //| anger argumenten siffran som står i input och fill till true

    let allGridNumbers = document.querySelectorAll(".gridNumber");                       //| allGridNumbers hämtar alla element med klassen "gridnumber"
    
    for (let numberDiv of allGridNumbers) {                                              //| numberDiv representerar den div/siffra just den iterationen kollar
        numberDiv.addEventListener("click", function(){                                  //| när man klickar på divarna...
            
            if (numberDiv.classList.contains("clear_clicked")){                          //|om diven man klickar på har klassen "clear_clicked" så...
                numberDiv.classList.remove("clear_clicked")                              //|tar den bort clear_clicked från den diven
                numberDiv.textContent = randomNumber(0, 99);                             //| och tilldelar ett nytt random nummer till den man klickat på
                numberDiv.classList.remove("clear_hover");                               //| och hovern återgår till den vanliga hovern
            } else if (!numberDiv.classList.contains("clear_clicked")) {                 //| annars, om den inte innehåller "clear_clicked" så...
                numberDiv.classList.add("clear_clicked")                                 //| läggs clear_clicked till på den man klickar på
                numberDiv.classList.add("clear_hover")                                   //| man lägger till hovern 
                numberDiv.textContent = "";                                              //| och man tar bort textinnehåller och ersätter den med en tom sträng
            }                                                                            //|
    
        })                                                                               //|
    
        numberDiv.addEventListener("mouseenter", function(){                             //| om man håller på en div
            
            if (numberDiv.classList.contains("clear_clicked")) {                         //| om den man håller på har klassen clear_clicked
                numberDiv.classList.add("clear_hover")                                   //| så läggs clear_hover till (alltså den nya hover-färgen)
            }                                                                            //|
            
            
        })                                                                               //|
        
        numberDiv.addEventListener("mouseleave", function(){                             //| eventlistener till när musen inte håller över den 
            if (numberDiv.classList.contains("clear_clicked")) {                         //| om den man har klickat på och tagit från musen från har klassen "clear_clicked"
                numberDiv.classList.remove("clear_hover")                                //| så tas "clear_hover" bort (den återgår till röd bakgrundsfärg)
            }                                                                            //|
        
        })                                                                               //|
    }                                                                                    //|
})                                                                                       //|
//_______________________________________________________________________________________//|

//______________________________________________________________________________//|
document.getElementById("fill_cleared").addEventListener("click", function(){   //| eventlistener till knappen "fill cleared"
    let allGridNumbers = document.querySelectorAll(".gridNumber");              //| allGridNumbers hämtar alla element med klassen "gridnumber"

    for (let numberDiv of allGridNumbers){                                      //| loopar igenom allGridNumbers med NumberDiv
        if(numberDiv.classList.contains("clear_clicked")){                      //| om diven har klassen "clicked_clear"..
            numberDiv.classList.remove("clear_clicked");                        //| så tar den bort "clear_clicked"
            numberDiv.textContent = randomNumber(0, 99);                        //| och ersätter text_content där i till ett ranom nummer mellan 0-99
        }                                                                       //|
    }                                                                           //|
})                                                                              //|
//______________________________________________________________________________//|



