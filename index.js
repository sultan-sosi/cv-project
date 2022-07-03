
console.clear();
const container=document.querySelector(".container")
const form=document.querySelector("form");
const input=document.querySelector(".todoText");
const button=document.querySelector(".btn");
const unOrderList=document.getElementById("lists");
const messageElement=document.getElementById("message");
//showMessage

const showMessage=(text,status)=>{
    messageElement.innerHTML=text;
    messageElement.classList.add(`bg-${status}`);
    setTimeout(() => {
    messageElement.innerHTML="";
    messageElement.classList.remove(`bg-${status}`);

        
    },2000);
}
//create todo
const createTodo=(todoId,todomessage)=>{
     const todoElement=document.createElement("li");
     todoElement.id=todoId;
     todoElement.classList.add("list-style")
     todoElement.innerHTML=`
     <span>${todomessage}</span
     <span><button class="btn"id="deleteButton"><i class=" fa fa-trash"></i></button></span>`
     unOrderList.appendChild(todoElement);
    
   
}






const todoItem=(event)=>{
    event.preventDefault();
    const todomessage=input.value;
    //generate unique id
    const todoId=Date.now().toString();
    createTodo(todoId,todomessage);
    showMessage('todo is added','success');
    const todos=localStorage.getItem("mytodos")? JSON.parse(localStorage.getItem("mytodos")):[];
    todos.push({todoId,todomessage});
    localStorage.setItem("mytodos",JSON.stringify(todos))

    const selectedButton =document.querySelector("#deleteButton");
    selectedButton.addEventListener("click",deleteTodo)

    function deleteTodo(event){
        const deletedItem=event.target.parentElement.parentElement;
        unOrderList.removeChild(deletedItem);
       

        showMessage('todo is deleted','danger')
    }
    
}

form.addEventListener("submit",todoItem)
