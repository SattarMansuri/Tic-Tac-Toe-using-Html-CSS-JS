let box = document.querySelectorAll('.box')
let player1 = true
let win = document.querySelector('.win')
let reset = document.querySelector('.reset')
let newGame = document.querySelector('.new')
let x = document.querySelector('.turn-x')
let o = document.querySelector('.turn-o')
let upAdvise = document.querySelector('.advise')
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
  
box.forEach((box) => {
    box.addEventListener("click", ()=>{    
    if(player1 == true){
     box.innerText = "X"
     x.style.display = "none"
     o.style.display = "block"
     player1 = false
    }
    else{
      box.innerText = "O"
      o.style.display = "none"
      x.style.display = "block"
      player1 = true
    }
  box.disabled = true
  WWinner()
  })
})

function WWinner(){
  for(let pattern of winPatterns){
    let pos1Val = box[pattern[0]].innerText;
    let pos2Val = box[pattern[1]].innerText;
    let pos3Val = box[pattern[2]].innerText;

if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
  if(pos1Val === pos2Val  && pos2Val === pos3Val){
  winDeclaration(pos1Val)
  }
  x.style.display = "none"
  o.style.display = "none"
  }
}
}

function winDeclaration (winner){
  win.innerText = `Congratulations Winner is ${winner}`
  reset.style.display = "none"
  newGame.style.display = "block"
  afterWin()
};

function afterWin(){
  for(let b of box){
    b.disabled = true
  }
}