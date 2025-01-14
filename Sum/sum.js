document.querySelector("#button_id").addEventListener("click", function(){
    let n = document.getElementById("input_same_on_all_pages").value;
    newNumbers(n, true);

    let allGridNumbers = document.querySelectorAll(".gridNumber"); 
    let countAllNumbers = 0; 
    let countClickedNumbers = 0;

    for (let numberDiv of allGridNumbers) {
        let number = parseInt(numberDiv.textContent); 
        countAllNumbers += number;

        numberDiv.addEventListener("click", function(){
            clickedNumber = parseInt(numberDiv.textContent);
            if(numberDiv.classList.contains("clicked")){
                countClickedNumbers -= clickedNumber;
                numberDiv.classList.remove("clicked");

            }else{
                countClickedNumbers += clickedNumber;
                numberDiv.classList.add("clicked");
            }

            document.querySelector("#sum_clicked_numbers").textContent = countClickedNumbers;
        })
    }

    document.querySelector("#p_new_random_number").textContent = countAllNumbers;

    let resetButton = document.querySelector("#reset_button");
    resetButton.addEventListener("click", function(){
        for(let numberDiv of allGridNumbers){
            countClickedNumbers = 0;
            numberDiv.classList.remove("clicked");
            document.querySelector("#sum_clicked_numbers").textContent = "-";
        }
    })

}) 