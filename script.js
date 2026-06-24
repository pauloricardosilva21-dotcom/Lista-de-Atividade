const form = document.getElementById('form')
const input = document.getElementById('input')
const todoUl = document.getElementById('todo')

const todos = JSON.parse(localStorage.getItem('todos'))

if(todos){
    todos.forEach(todo => addTodo(todo))
}

