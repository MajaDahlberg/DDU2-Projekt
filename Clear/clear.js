/* 

när man hoverar över siffrorna så ska de man håller på bli blåa 
när man trycker på dem så ändras bakgrundsfärgen till RÖD 
men HOVER-färgen ändras till ORANGE på den man klickat på 

trycker man på fill cleared så försvinner css:en man lagt till när man interagerat med diven 

*/

document.getElementById("button_id").addEventListener("click", function (){ // gör så att när man klickar på "create"-knappen så kommer det man skriver i input att påverka hur många siffror som dyker upp på sidan
    let n = document.getElementById("input_same_on_all_pages").value;
    newNumbers(n, true);

    let allGridNumbers = document.querySelectorAll(".gridNumber");
    
    for (let numberDiv of allGridNumbers) {
        numberDiv.addEventListener("click", function(){
            
            if (numberDiv.classList.contains("clear_clicked")){
                numberDiv.classList.remove("clear_clicked")
                numberDiv.textContent = randomNumber(0, 99);
                numberDiv.classList.remove("clear_hover");
            } else if (!numberDiv.classList.contains("clear_clicked")) {
                numberDiv.classList.add("clear_clicked")
                numberDiv.classList.add("clear_hover")
                numberDiv.textContent = "";
            }
    
        })
    
        numberDiv.addEventListener("mouseenter", function(){
            
            if (numberDiv.classList.contains("clear_clicked")) {
                numberDiv.classList.add("clear_hover") 
            }
            
            
        })
        
        numberDiv.addEventListener("mouseleave", function(){
            if (numberDiv.classList.contains("clear_clicked")) {
                numberDiv.classList.remove("clear_hover")  
            }

        })
    }
})

document.getElementById("fill_cleared").addEventListener("click", function(){
    let allGridNumbers = document.querySelectorAll(".gridNumber");

    for(let numberDiv of allGridNumbers){
        if(numberDiv.classList.contains("clear_clicked")){
            numberDiv.classList.remove("clear_clicked");
            numberDiv.textContent = randomNumber(0, 99);
        }
    }
})




