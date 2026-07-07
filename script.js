const form = document.getElementById("form");
const input = document.getElementById("input");
const todos = document.getElementById("todos");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (input.value == "") {
        return;
    }

    const tarefa = document.createElement("li");
    tarefa.innerText = input.value;

    tarefa.addEventListener("click", function () {
        tarefa.classList.toggle("completed");
    });

    tarefa.addEventListener("dblclick", function () {
        tarefa.remove();
    });

    todos.appendChild(tarefa);
    input.value = "";
});
