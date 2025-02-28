//_____________________________________________________________________________|
                                                                             
document.getElementById("button_id").addEventListener("click", function (){  //|
    let n = document.getElementById("input_same_on_all_pages").value;        //| när man klickar på create-knappen så deklarerar man siffran man skriver i input till n
    newNumbers(n, true);                                                     //| sen anropas funktionen och ger argumenten, n och ger "fill" värdet "true" 
})                                                                           //| resultatet av det blir att antalet divar (n) skapas och fyller #numbers med antalet (n) divar
//_____________________________________________________________________________|

//__________________________________________________________________________________________|
let pNewRandomNumber = document.getElementById("p_new_random_number");                    //| pNewRandomNumber är den vita lådan bredvid knappen

document.getElementById("new_random_number_button").addEventListener("click", function(){ //| använder anonym funktion i eventlistene för att det gör det enklare och man använder ändå den en gång bara 
    pNewRandomNumber.textContent = randomNumber(0, 99);                                   //| 

    let allNumbers = document.querySelectorAll("#numbers div")                            //| skapas det en array här eller håller sig till en lista bara? 

    for (let foundNumber of allNumbers) {                                                 //| Detta deklarerar en variabel foundNumber som kommer att anta värdena av varje element i allNumbers en efter en.
        if (foundNumber.textContent == pNewRandomNumber.textContent) {                    //| jämför om foundNumber (den siffra den representerar för den iterationen, beorende på vart den är i listan) är samma som det som står i p-rutan (den vita bredvid newRandomNumber-knappen)
            foundNumber.classList.add("highlighted");                                     //| ger found number-siffran/diven css:en skriven under klassen "highlighted"
        }                                                                                 //|
    }                                                                                     //|
});                                                                                       //|
//__________________________________________________________________________________________|


//__________________________________________________________________________________________|
document.getElementById("remove_button").addEventListener("click", function(){            //| eventlistener för remove-knappen
    let targetNumber = pNewRandomNumber.textContent;                                      //| targetnumber tilldelas det nummer som står i p-rutan bredbid NewRandomNumber-knappen
    let removedNumbers = document.getElementById("p_remove");                             //| removedNumbers hämtar elementet med id:et p_remove som är den vita rutan bredvid remove-knappen

    let allGridNumbers = document.querySelectorAll("#numbers div");                       //| hämtar alla divar som har id:et numbers 
    let count = 0;                                                                        //|

    for (let oneGridNumber of allGridNumbers) {                                           //| oneGridNumber representerar den div i listan som iterationen går igenom
        if (oneGridNumber.textContent == targetNumber) {                                  //| jämför textcontenen i diven den iterationen är på med targetNumber som är det nummer som står i vita rutan bredvid NewRandomNumber-knappen
        count++;                                                                          //| count plussas med 1 eftersom vi längre ner ändrar textcontent på texten i en sista vita rutan till det antal gånger siffran i den andra vita rutan hittades 
        
        oneGridNumber.classList.add ("removed");                                          //| lägger till css:en med klassen "removed" 
        oneGridNumber.textContent = "X";                                                  //| och ändrar texten/siffran till "X" ifall villkoret stämmer
        }                                                                                 //|
    }                                                                                     //|

    if (count > 0) {                                                                      //| om count är större än 0.. (vilket det kommer att vara ifall den hittar en mathcande siffra bland numbers)
        removedNumbers.textContent = `${targetNumber} removed ${count} times`;            //| så ändrast textcontenten i den sista vita rutan till siffran som slumpmässigt tagits fram 
    } else {                                                                              //| annars, om count är 0, 
        removedNumbers.textContent = "Nothing to remove";                                 //| så tar blir texten "nothing to remove" istället. 
    }                                                                                     //|

})                                                                                        //|
//__________________________________________________________________________________________|

