let mapDate = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,2,0,0],
    [0,2,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,3,0,2,0,0],
    [0,0,0,0,2,0,0,0,0,0],
    [0,0,4,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,2,0,0,0,0],
    [0,0,2,0,0,0,0,0,0,0],
]
let pr = 1
let pc = 4
let coins = 0



function render()
{ map.innerHTML =``
   for (let row = 0 ; row<10; row++){
    for(let col = 0; col<10; col++){
        if (mapDate[row] [col] == 0) {
          map.innerHTML +=`<div></div>`
        }
         else if(mapDate[row][col] == 2){
            map.innerHTML +=`<div class="coin"></div>`
        }
        else if(mapDate[row][col] == 1){
            map.innerHTML +=`<div class="pac"></div>`
        }
        else if(mapDate[row][col] == 3){
            map.innerHTML +=`<div class="bomb"></div>`
        }
        else if(mapDate[row][col] == 4){
            map.innerHTML +=`<div class="heart"></div>`
        }
        results.innerHTML = `Coins:${coins}`
    } 
} 
}
function move(){
    mapDate[pr][pc] = 0
     switch (event.code){
        case"ArrowRight":pc < 9 ? pc++:0; break
        case"ArrowLeft": pc --; break
        case"ArrowDown": pr++;break
        case"ArrowUp":  pr--; break
    }
    if( mapDate[pr][pc] == 2){
        coins += 5
    }
    if ( mapDate[pr][pc] == 3){
         coins +="game over" 
    }
    if( mapDate[pr][pc] == 4){
        coins += 100
   }

    mapDate[pr][pc] = 1
    render()
}
render()