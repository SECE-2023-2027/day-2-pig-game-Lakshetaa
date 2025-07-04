const newGame=document.getElementById("roll");
const roll=document.getElementById("rollDice");
const hold=document.getElementById("hold");
const dice=document.getElementById("dice");
const currentScore0=document.getElementById("current--0");
const currentScore1=document.getElementById("current--1");
const tScore0=document.getElementById("score--0");
const tScore1=document.getElementById("score--1");
const winner=document.getElementById("winner");
let activePlayer=0;
let tScores0=0;
let tScores1=0;
let cScore0=0;
let cScore1=0;
let intervalId = null;

const rollDice = () =>{
    let random=Math.trunc(Math.random()*6)+1;
    dice.src = `${random}.jpg`;
    dice.style.display = "block";
    switch(random){
        case 1:
            switchPlayer();
            break;
        default:
            switch(activePlayer){
                case 0:
                    cScore0 += random;
                    tScores0 += random;
                    currentScore0.textContent = cScore0;
                    checkWinner();
                    break;
                case 1:
                    cScore1 += random;
                    tScores1 += random;
                    currentScore1.textContent = cScore1;
                    checkWinner();
                    break;
            }
    }
};

const checkWinner=()=>{
    while(tScores0 >= 100){
        winner.textContent = "Player 1 wins!";
        tScore0.textContent = tScores0;
        // clearInterval(intervalId);
        setTimeout(() => {
            resetGame();
        }, 2000);
        return;
    }
    while(tScores1>=100){
        winner.textContent = "Player 2 wins!";
        tScore1.textContent = tScores1;
        // clearInterval(intervalId);
        setTimeout(() => {
            resetGame();
        }, 2000);
        return;
    }
};
const switchPlayer = () => {
    switch(activePlayer){
        case 0:
            activePlayer=1;
            cScore0 = 0;
            currentScore0.textContent = cScore0;
            tScore0.textContent = tScores0;
            break;
        case 1:
            activePlayer=0;
            cScore1=0;
            currentScore1.textContent = cScore1;
            tScore1.textContent = tScores1;
            break;
    }
};

const resetGame = () => {
    dice.style.display = "none";
    activePlayer=0;
    tScores0=0;
    tScores1=0;
    cScore0=0;
    cScore1=0;
    clearInterval(intervalId);
    intervalId = null;
    currentScore0.textContent = cScore0;
    currentScore1.textContent = cScore1;
    tScore0.textContent = tScores0;
    tScore1.textContent = tScores1;
    winner.textContent = "";
}
roll.addEventListener("click", 
    () => {
        if(!intervalId){
        intervalId = setInterval(rollDice, 1000);
        }
    });
hold.addEventListener("click", switchPlayer);
newGame.addEventListener("click", resetGame);
