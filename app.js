const btns = document.querySelectorAll(".btn")
const gameStatus = document.querySelector(".game-status")
const playAgainBtn = document.querySelector("#play-again")
let playerScore = document.querySelector("#player-score")
let computerScore = document.querySelector("#computer-score")

btns.forEach(function(btn){
    btn.addEventListener("click", function(){
        const playerValue = btn.getAttribute("value")
        const computerValue = computerPlay()
        gameCheck(playerValue, computerValue)
    })
})

function computerPlay(){
    const array = ["r", "p", "s"]
    const randomNumber = Math.floor(Math.random() * 3)
    return array[randomNumber]
}

function whoWonTheRound(playerChoise, computerChoise){
    switch(playerChoise+computerChoise){
        case "rs":
        case "sp":
        case "pr":
            return "playerWon"
        case "sr":
        case "ps":
        case "rp":
            return "computerWon"
        case "rr":
        case "pp":
        case "ss":
            return "draw"
        default:
            console.log("Something went wrong")
            break
    }
}

function gameCheck(playerChoise, computerChoise){
    switch(whoWonTheRound(playerChoise, computerChoise)){
        case "playerWon":
            playerScore.textContent++
            gameStatus.textContent = "You have beaten the computer this round."
            isGameOver()
            break
        case "computerWon":
            computerScore.textContent++
            gameStatus.textContent = "Computer has beaten you this round."
            isGameOver()
            break
        case "draw":
            gameStatus.textContent = "Draw"
            break
        default:
            console.log("something went wrong")
    }
}

//bir kere reset yaptiktan sonra bunu yok sayiyor sanirim
function isGameOver(){
    if(playerScore.textContent === "3"){
        gameStatus.textContent += " You have won the game!"
        btns.forEach(function(btn){
            btn.classList.add("inactive")
            playAgainBtn.classList.add("display")
        })
        playAgainBtn.classList.add("display")
        gameReset()
    }
    if(computerScore.textContent === "3"){
        gameStatus.textContent += " Computer has won the game"
        btns.forEach(function(btn){
            btn.classList.add("inactive")
        })
        playAgainBtn.classList.add("display")
        gameReset()
    }
}

function gameReset(){
    playAgainBtn.addEventListener("click", function(){
        playerScore.textContent = 0
        computerScore.textContent = 0
        gameStatus.textContent = "Click To Start"
        btns.forEach(function(btn){
            btn.classList.remove("inactive")
        })
        playAgainBtn.classList.remove("display")
    })
}