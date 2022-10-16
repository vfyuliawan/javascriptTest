const hole = document.querySelectorAll(".hole")
const mole = document.querySelectorAll(".mole")
let score = 0;

function random(hole) {
    const h = Math.floor(Math.random() * hole.length)
    const holeRandom = hole[h] 
    return holeRandom;
}


//setRandom time 200ms - 500ms
let randomTime = Math.floor(Math.random()* (800 - 500) + 500)
console.log(randomTime);

function moleAppear() {
    const holeRandom = random(hole);
    holeRandom.classList.add('appear');
    setTimeout(() => {
    holeRandom.classList.remove('appear');
    moleAppear()
    }, randomTime);
}


//addEvent when mouse click the mole
mole.forEach(element => {
    element.addEventListener('click', function () {
        score++;
        alert(`Hore.... Your Score ${score}`)
    })
});