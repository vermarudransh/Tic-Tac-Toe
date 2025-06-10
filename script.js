let playerTurn="X";

const winPattern=[
    [0,1,2], [3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]

let grids = document.querySelectorAll(".ttt-grid .cell");
grids.forEach((box) => {
    box.addEventListener("click",()=>{
        if(box.innerText){
            alert("Click Another Box!");
        }
        else{ 
            console.log("Box was clicked");
            if(playerTurn==="X"){
                box.innerText="X";
                playerTurn="O";
            } else{
                box.innerText="O";
                playerTurn="X";
            }
            // box.disabled=true;
            gameWin();
        }
    });
});
const showPopup= (message)=>{
  document.getElementById('popup-message').innerText = message;
  document.getElementById('popup').classList.remove('hidden');
}

document.getElementById('closePopup').onclick = function() {
  document.getElementById('popup').classList.add('hidden');
}

const resetGame=() =>{
    grids.forEach((box) => {
        box.innerText="";
    })
}
const gameWin = () =>{
    let winFound=false;
    for (pattern of winPattern){
        let pos1= grids[pattern[0]].innerText
        let pos2= grids[pattern[1]].innerText
        let pos3=grids[pattern[2]].innerText
        if (pos1!="" && pos2!=""  &&pos3!=""){
            if (pos1===pos2&&pos1===pos3){
                console.log("Win",pos1);
                showPopup(`${pos1} Wins!`);
                resetGame();
                break;
            }
        }
    }
    if (!winFound){
        let allFilled=true;
        grids.forEach((box) => {
            if (box.innerText === "") {
                allFilled = false;
            }
        });
        if (allFilled){
            showPopup("It's a Draw!")
            resetGame();
        }
    }
}
