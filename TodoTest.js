//querryselector to turn inputs to list
const todoInputs = document.querySelector("inputs");
const buttonInput = document.querySelector(".button");

//eventlistener
buttonInput.addEventListener("click", createTodo)


//functions
function createTodo(){
	event.preventDefault();
	//create div for li
    let div = document.createElement("div")
    div.classList.add("todoDiv")
    let divA = document.getElementById("listHere");
    divA.appendChild(div)

    let input = document.getElementById("inputs");
    

//create li inside div
    const list = document.createElement("li");
    const inputs = document.getElementById("inputs").value;
    const inputsValue = document.createTextNode(inputs);
    list.appendChild(inputsValue);
    div.appendChild(list);
 
//create check button next to li
    const check = document.createElement("button");
    check.classList.add("checkButton")
    check.textContent = "check";
    div.appendChild(check)
    //create delete button
 const trash = document.createElement("button");
 trash.classList.add("trashButton")   
 trash.textContent = "trash";
    div.appendChild(trash)
}

//checkDelete to detect which button i am clicking and executing function based on that the problem here is i dont know (yet) how to delete the todoDiv where the list lies. bro it turns out that i dont need to target the todoDiv itsel instead i can just target the item's in this case the delete button and do parentElement and it'll target the div (understand ye?)
function checkDelete(event){
 if (event.target.classList[0] === "trashButton"){
    const todo = event.target.parentElement;
    //delete animation
    todo.classList.toggle('slide');
    todo.addEventListener('transitionend', function(){
        todo.remove();
    })

 };

  if (event.target.classList[0] === "checkButton"){
      const todo = event.target.parentElement;
      todo.classList.toggle('checked');
  }
}


