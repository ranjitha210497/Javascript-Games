document.addEventListener('DOMContentLoaded', () => {
const boxes = document.querySelectorAll('.box');
let result = document.querySelector('.result');
let player = document.querySelector('.player');
let currentplayer = document.querySelector('.current-player');
let replay = document.querySelector('.button');
let grid = document.querySelector('.grid')
let currentPlayer = 1;
player.innerHTML = currentPlayer
for(let i=0;i<=boxes.length;i++) {
        boxes[i].addEventListener('click', () => {
            if(currentPlayer === 1) {
                boxes[i].innerHTML = "X"
                currentPlayer = 2
                player.innerHTML = currentPlayer
                check()
            }   
            else {
                boxes[i].innerHTML = "O"
                currentPlayer = 1
                player.innerHTML = currentPlayer
                check()
            }
        })
}





function check() {
    const possibles = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for(let j=0;j<possibles.length;j++) {
        const i1 = possibles[j][0];
        const i2 = possibles[j][1];
        const i3 = possibles[j][2];
        if(boxes[i1].innerHTML == "X" && boxes[i2].innerHTML == "X" && boxes[i3].innerHTML == "X") {
            if(j == 0 || j==1 || j==2) {
            boxes[i1].classList.add('hr-line')
            boxes[i2].classList.add('hr-line')
            boxes[i3].classList.add('hr-line')
            result.innerHTML = "Player 1 Wins"
            end()
            }
            else if(j == 3 || j==4 || j==5) {
                boxes[i1].classList.add('vr-line')
                boxes[i2].classList.add('vr-line')
                boxes[i3].classList.add('vr-line')
                result.innerHTML = "Player 1 Wins"
                end()
            }
            else if(j==6) {
                boxes[i1].classList.add('slant-line-left')
                boxes[i2].classList.add('slant-line-left')
                boxes[i3].classList.add('slant-line-left')
                result.innerHTML = "Player 1 Wins"
                grid.classList.add('end')
                end()
            }
            else if(j==7) {
                boxes[i1].classList.add('slant-line-right')
                boxes[i2].classList.add('slant-line-right')
                boxes[i3].classList.add('slant-line-right')
                result.innerHTML = "Player 1 Wins"
                end()
            }
        }
        if(boxes[i1].innerHTML == "O" && boxes[i2].innerHTML == "O" && boxes[i3].innerHTML == "O") {
            if(j == 0 || j==1 || j==2) {
            boxes[i1].classList.add('hr-line')
            boxes[i2].classList.add('hr-line')
            boxes[i3].classList.add('hr-line')
            result.innerHTML = "Player 2 Wins"
            end()
            }
            else if(j == 3 || j==4 || j==5) {
                boxes[i1].classList.add('vr-line')
                boxes[i2].classList.add('vr-line')
                boxes[i3].classList.add('vr-line')
                result.innerHTML = "Player 2 Wins"
                end()
            }
            else if(j==6) {
                boxes[i1].classList.add('slant-line-left')
                boxes[i2].classList.add('slant-line-left')
                boxes[i3].classList.add('slant-line-left')
                result.innerHTML = "Player 2 Wins"
                end()
            }
            else if(j==7) {
                boxes[i1].classList.add('slant-line-right')
                boxes[i2].classList.add('slant-line-right')
                boxes[i3].classList.add('slant-line-right')
                result.innerHTML = "Player 2 Wins"
                end()
            }
        }
    }
}

function end() {
    setTimeout(() => {
        currentplayer.classList.add('.end')
        grid.classList.add('end')
        replay.classList.add('replay')
        replay.innerHTML = "Replay"
        replay.addEventListener('click', () => {
            console.log("reloading");
            location.reload()
        })
    }, 1000)
}
})

