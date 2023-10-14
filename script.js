"use strict";

// console.log(document.querySelector('.text').textContent);
// document.querySelector('.text').textContent = '🥳 Correct Number!!';
// document.querySelector('.question-mark').textContent = 13;
// document.querySelector('.question-mark').textContent = 13;

// document.querySelector('.display-number').value = 19;
// console.log(document.querySelector('.display-number').value);

let secretnumber = Math.trunc(Math.random() * 20)+1;
console.log(secretnumber);
let topScore = 0;
let currscore = 20;
document.querySelector('.check').addEventListener('click',function(){
    if(currscore == 1){
        document.querySelector('.text').textContent = "😶‍🌫️ You lost!";
        document.querySelector('.score').textContent = --currscore;
        document.querySelector('.lose').play();
    }
    else if(currscore > 1){
        const guess = Number(document.querySelector('.display-number').value);
        
        if(guess < 1 || guess > 20){
            document.querySelector('.text').textContent = "🚫 Enter Valid Number";
        }
        else if(guess === secretnumber){
            
            document.querySelector('.text').textContent = "🥳 Correct Number";
            document.querySelector('.question-mark').textContent = guess;

            document.querySelector('.win').play();
    
            topScore = Number(document.querySelector('.highscore').textContent);
            // const currscore = Number(document.querySelector('.score').textContent)
            if(currscore > topScore){
                document.querySelector('.highscore').textContent = currscore;
            }
    
        }
        else{
            if(guess < secretnumber){
                document.querySelector('.text').textContent = "📉 Too Low!";
            }
            else{
                document.querySelector('.text').textContent = "📈 Too High!";
            }
            // document.querySelector('.score').textContent = Number(document.querySelector('.score').textContent)-1;
            document.querySelector('.score').textContent = --currscore;
        }
    }
})

document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('.score').textContent = "20";
    currscore = 20;
    document.querySelector('.question-mark').textContent = "?";
    secretnumber = Math.trunc(Math.random() * 20)+1;
    document.querySelector('.text').textContent = "Start guessing...";
    document.querySelector('.display-number').value = "";
})

