"use strict";

let secretnumber = Math.trunc(Math.random() * 20)+1;
// console.log(secretnumber);
let currscore = 20;
let topScore = 0;
let flag = true;

const displayText = function(message){
    document.querySelector('.text').textContent = message;
}

const displayQuestionMark = function(message){
    document.querySelector('.question-mark').textContent = message;
}

const styleBody = function(message){
    document.querySelector('body').style.backgroundColor = message;
}

const displayScore = function(message){
    document.querySelector('.score').textContent = message;
}

document.querySelector('.check').addEventListener('click',function(){
    if(currscore == 1){
        styleBody('#36122B');
        displayText("😶‍🌫️ You lost!");
        displayQuestionMark(secretnumber);
        displayScore(--currscore);
        document.querySelector('.lose').play();
    }
    else if(currscore > 1 && flag === true){
        const guess = Number(document.querySelector('.display-number').value);
        
        if(guess < 1 || guess > 20){
            displayText("🚫 Enter Valid Number");
        }
        else if(guess === secretnumber){
            
            styleBody('#082F3A');
            displayText("🥳 Correct Number");
            displayQuestionMark(guess);

            document.querySelector('.win').play();
            flag = false;
            
    
            topScore = Number(document.querySelector('.highscore').textContent);
            // const currscore = Number(document.querySelector('.score').textContent)
            if(currscore > topScore){
                document.querySelector('.highscore').textContent = currscore;
            }
    
        }
        else{
            if(guess < secretnumber){
                displayText("📉 Too Low!");
            }
            else{
                displayText("📈 Too High!");
            }
            // displayScore(Number(document.querySelector('.score').textContent)-1);
            displayScore(--currscore);
        }
    }
})

//the below code executes when we click on again
document.querySelector('.again').addEventListener('click',function(){

    styleBody('rgb(43, 42, 42)');
    displayQuestionMark("?");
    displayText("Start guessing...");

    displayScore("20");
    secretnumber = Math.trunc(Math.random() * 20)+1;
    document.querySelector('.display-number').value = "";

    currscore = 20;
    flag = true;
})