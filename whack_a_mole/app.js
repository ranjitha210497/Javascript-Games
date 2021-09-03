let square = document.getElementsByClassName('square')
const mole = document.querySelectorAll('.mole')
let timeLeft = document.getElementsByClassName('time-left')
let score = document.getElementsByClassName('score')

let result = 0
let currentTime = 60

function randomSquare() {
    for (let className of square) {
        className.classList.remove('mole')
      }
    let randomPosition = square[Math.floor(Math.random()*9)]
    randomPosition.classList.add('mole')

    // assign the id of the randomPosition to hitPosition for us to hit later
    hitPosition = randomPosition.id

    for (let id of square) {
        id.addEventListener('mouseup', () => {
            if(id.id === hitPosition) {
                result++
                score[0].innerHTML = result
            }
        })
      }
}

function moveMole() {
    let timerId = null
    timerId = setInterval(randomSquare, 1000)
}
moveMole()

function countDown() {
    currentTime--
    timeLeft[0].innerHTML = currentTime
    if(currentTime === 0) {
        clearInterval(timerId)
        alert('GAME OVER! Your final score is '+result)
        result = 0
        score[0].innerHTML = result
        timeLeft =60
    }
}

let timerId =setInterval(countDown, 1000)


