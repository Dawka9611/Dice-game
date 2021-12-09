//shift+alt+b - start it with open-in-browser extension

var roundScore, scores, activePlayer
var diceDom = document.querySelector('.dice')

initGame()

//togloom shiner ehluulehed beldeh
function initGame() {
    //toglogchin eeljig hadgalah huvisagch. 1-r toglogch 0, 2-r toglogch 1
    activePlayer = 0

    //toglogchin tsuglulsan onoog hadgalah huvisagch
    scores = [0, 0]

    //togloghchin 1 eeljind tsuglulsan onoog hadgalah huvisagch
    roundScore = 0

    //programm ehlehed beltgeh
    document.getElementById('score-0').textContent = '0'
    document.getElementById('score-1').textContent = '0'
    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'

    document.getElementById('name-0').textContent ='Player-1'
    document.getElementById('name-1').textContent ='Player-2'

    document.querySelector(".player-0-panel").classList.remove("winner")
    document.querySelector(".player-1-panel").classList.remove("winner")

    document.querySelector(".player-0-panel").classList.remove("active")
    document.querySelector(".player-1-panel").classList.remove("active")

    document.querySelector(".player-0-panel").classList.add("active")

    diceDom.style.display = 'none'
}

//shoo shideh
document.querySelector('.btn-roll').addEventListener('click', () => {
    var diceNumber = Math.floor(Math.random() * 6) + 1
    diceDom.style.display = 'block'
    diceDom.src = 'dice-' + diceNumber + '.png'

    //toglogchiin eeljin  tog oorchilno
    //buusan too 1-s ylgaatai bol 

    if (diceNumber !== 1) {
        //1s yalgatai too busan uyd onoog nemegduulne
        roundScore = roundScore + diceNumber
        document.getElementById("current-" + activePlayer).textContent = roundScore
    } else {
        //toglogchin eelj solih
        switchToNextPlayer()
    }
})

//hold tovchiig hiih
document.querySelector('.btn-hold').addEventListener("click", function () {
    //global onoog oorchloh
    scores[activePlayer] = scores[activePlayer] + roundScore
    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer]

    //toglogchin onoo 100 hursen esehig shalgana

    if (scores[activePlayer] >= 10) {
        document.getElementById('name-' + activePlayer).textContent = "WINNER!!!"
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')
    } else {
        //toglogchin eelj solih
        switchToNextPlayer()
    }
})

//shine togloom ehluuleh
document.querySelector(".btn-new").addEventListener("click", initGame)

function switchToNextPlayer() {
    //ene toglogchiin current onoog tegleh
    roundScore = 0
    document.getElementById("current-" + activePlayer).textContent = 0
    //1busan uyd toglogchin aaljig solino
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0)
    //ulaan tegiig shiljuleh, backgrount ongiig oorchloh
    document.querySelector(".player-0-panel").classList.toggle("active")
    document.querySelector(".player-1-panel").classList.toggle("active")

    //shoog tur alga bolgoh
    diceDom.style.display = 'none'
}


