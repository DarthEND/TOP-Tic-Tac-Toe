const box = document.querySelectorAll('.box');
const PlayerScore = document.getElementById('PlayerScore');
const ComputerScore = document.getElementById('ComputerScore');
let PScore = 0;
let CScore = 0;

box.forEach( e => {
  e.addEventListener('click', () =>{
    console.log('click');
  })
});

function updatePScore(){
  PScore += 1;
  PlayerScore.innerText = PScore;
}

function updateCScore(){
  CScore += 1;
  ComputerScore.innerText = CScore;
}