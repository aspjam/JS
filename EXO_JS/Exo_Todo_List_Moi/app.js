console.log("Test")

let form=document.querySelector("form")
let todo=document.querySelector(".todo")
let contain=document.querySelector(".container")
let action=document.querySelector("#action")


form.addEventListener('submit',function(e){

    e.preventDefault()       
    todo=todo.cloneNode(true)
    todo.classList.add("visible")    
    contain.appendChild(todo)
    todo.children[1].innerText=action.value
    action.value=""

    todo.firstElementChild.addEventListener('click',function(){
        this.nextElementSibling.classList.toggle("checked")
    })

    todo.lastElementChild.addEventListener('click',function(){
        this.parentNode.parentNode.removeChild(this.parentNode)
    })
})