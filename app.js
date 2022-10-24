console.log("New game")

function giveValue(htmlValue, thisBox, position) {
    if(htmlValue === ''){
        thisBox.innerHTML = turn.innerHTML
        console.log(turn.innerHTML, "played", position)
        winnerCheck()
        if(turn.innerHTML === 'X'){
            turn.innerHTML = 'O'
        }else{
            turn.innerHTML = 'X'
        }
    }
}

function winnerCheck(){
    if(box1.innerHTML === turn.innerHTML && box2.innerHTML === turn.innerHTML && box3.innerHTML === turn.innerHTML
        || box4.innerHTML === turn.innerHTML && box5.innerHTML === turn.innerHTML && box6.innerHTML === turn.innerHTML
        || box7.innerHTML === turn.innerHTML && box8.innerHTML === turn.innerHTML && box9.innerHTML === turn.innerHTML
        || box1.innerHTML === turn.innerHTML && box4.innerHTML === turn.innerHTML && box7.innerHTML === turn.innerHTML
        || box2.innerHTML === turn.innerHTML && box5.innerHTML === turn.innerHTML && box8.innerHTML === turn.innerHTML
        || box3.innerHTML === turn.innerHTML && box6.innerHTML === turn.innerHTML && box9.innerHTML === turn.innerHTML
        || box1.innerHTML === turn.innerHTML && box5.innerHTML === turn.innerHTML && box9.innerHTML === turn.innerHTML
        || box3.innerHTML === turn.innerHTML && box5.innerHTML === turn.innerHTML && box7.innerHTML === turn.innerHTML){
        alert(turn.innerHTML + ' player won')
        box1.innerHTML = ''
        box2.innerHTML = ''
        box3.innerHTML = ''
        box4.innerHTML = ''
        box5.innerHTML = ''
        box6.innerHTML = ''
        box7.innerHTML = ''
        box8.innerHTML = ''
        box9.innerHTML = ''
        console.log("New game")
    }else if(box1.innerHTML !== '' && box2.innerHTML !== '' && box3.innerHTML !== '' && box4.innerHTML !== '' && box5.innerHTML !== '' && box6.innerHTML !== '' && box7.innerHTML !== '' && box8.innerHTML !== '' && box9.innerHTML !== ''){
        alert('its a tie')
        box1.innerHTML = ''
        box2.innerHTML = ''
        box3.innerHTML = ''
        box4.innerHTML = ''
        box5.innerHTML = ''
        box6.innerHTML = ''
        box7.innerHTML = ''
        box8.innerHTML = ''
        box9.innerHTML = ''
        console.log("New game")
    }
}

function resetButton(){
    box1.innerHTML = ''
    box2.innerHTML = ''
    box3.innerHTML = ''
    box4.innerHTML = ''
    box5.innerHTML = ''
    box6.innerHTML = ''
    box7.innerHTML = ''
    box8.innerHTML = ''
    box9.innerHTML = ''
    console.log("New game")
}
const turn = document.getElementById('turn')
const box1 = document.getElementById('1')
const box2 = document.getElementById('2')
const box3 = document.getElementById('3')
const box4 = document.getElementById('4')
const box5 = document.getElementById('5')
const box6 = document.getElementById('6')
const box7 = document.getElementById('7')
const box8 = document.getElementById('8')
const box9 = document.getElementById('9')