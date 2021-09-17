//move logo up
function deleteStuff(event){
if(event.target.classList[0]==="logo"){
    const logo = event.target;
    logo.classList.toggle("logoClick");
  
}
}
//select text container
let text = document.querySelector(".text-container");
//show the text
function showText(){
    text.classList.toggle("text-move");
}

let button = document.querySelector(".button-main");

function showButton(){
    button.classList.toggle("show-button");
}