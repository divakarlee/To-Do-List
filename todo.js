const addToDobutton = document.getElementById("addToDo");
const toDoContainer = document.getElementById("todoContainer");
const inputField = document.getElementById("inputField");

addToDobutton.addEventListener("click",function(){
    var paragraph = document.createElement("p");
    paragraph.classList.add("paragraph-styling");
    toDoContainer.appendChild(paragraph);
    paragraph.innerText = inputField.value;
    inputField.value = "";

    paragraph.addEventListener("click",()=>{
        paragraph.style.textDecoration ="line-through";
    })

    paragraph.addEventListener("dblclick",()=>{
        toDoContainer.removeChild(paragraph)
    })

});

