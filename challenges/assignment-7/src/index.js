const gameForm = document.getElementById("game-form");
const gameInputMaxNum = document.querySelector("#game-form input:first-child");
const gameInputGuessNum = document.querySelector(".guess-number");
const title = document.getElementsByTagName("h1");

const gameResult = document.querySelector(".first");
const gameChose = gameResult.querySelector("div:first-child");
const gameWinAndLost = gameResult.querySelector("div:last-child");


function handlegamesubmit(event){     
    event.preventDefault();   

    let MaxNum = gameInputMaxNum.value;      
    let GuessNum = gameInputGuessNum.value;
    let rendom = Math.ceil(Math.random()*MaxNum);

    if(MaxNum ==="" ||GuessNum ===""){
        gameResult.classList.add('hidden'); 
        alert(`input number value.`);        
        
    }else if(parseInt(GuessNum) > parseInt(MaxNum)){        
        gameResult.classList.add('hidden');        
        alert(`input number value between 0 and ${MaxNum}.`);        
    }else{
        gameResult.classList.remove('hidden'); 
        if(parseInt(GuessNum) !== rendom){        
            gameChose.innerText =`You chose: ${GuessNum}, the machine chose:${rendom}`;
            gameWinAndLost.style.fontWeight="bold"; 
            gameWinAndLost.innerText =`You lost!`; 

        }else{            
            gameChose.innerText =`You chose: ${GuessNum}, the machine chose:${rendom}`;
            gameWinAndLost.style.fontWeight="bold";
            gameWinAndLost.innerText =`You Win!`; 
        }
    }    
}

title[0].innerText = "Random Number Game";
gameForm.addEventListener("submit", handlegamesubmit);