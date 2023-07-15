let box = document.getElementsByClassName("box")
let text = document.getElementsByClassName("text")
let name = document.querySelector(".name")
let reset = document.querySelector("button")
console.log(reset)
let turn = "x";
let music = new Audio("ting.mp3");
let over = new Audio("gameover.mp3");
let gameover = false

const checkwin = ()=>{
let wins = [[0,1,2,5,5,0],[3,4,5,5,15,0],[6,7,8,5,25,0],[0,3,6,-5,15,90],[1,4,7,5,15,90],[2,5,8,15,15,90],[0,4,8,5,15,45],[2,4,6,5,15,135]]
wins.forEach(e =>{
    if((text[e[0]].innerHTML == text[e[1]].innerHTML) && (text[e[2]].innerHTML == text[e[1]].innerHTML) && (text[e[0]].innerHTML != "")){
        gameover = true;
       name.innerHTML =  text[e[0]].innerHTML + " WON";
       over.play();
       document.querySelector("img").style.height = "100px";
       document.querySelector(".line").style.width = "20vw";
       document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
       console.log("hello")
    }
})
}



// for changing turn
function changeturn(){
    return turn === "x"?"o":"x";
}
//

// for game logic
Array.from(box).forEach(element =>{
element.addEventListener("click", function(){
    if(!(gameover)){
    let boxtext = element.querySelector(".text")
    boxtext.innerHTML = turn;
     turn = changeturn();
     checkwin();
     if(!(gameover)){
        name.innerHTML = "turn for " + turn;
        music.play();
     }
     }
     
     
})
})

reset.addEventListener("click", function(){
for(let element of text){
    element.innerHTML = "";
    turn = "x"
    name.innerHTML = "turn for " + turn;
    document.querySelector("img").style.height = "0px";
    document.querySelector(".line").style.width = "0vw";
    gameover = false;

}
})
