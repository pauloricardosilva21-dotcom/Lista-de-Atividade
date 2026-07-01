const form = document.getElementById('form'), input = document.getElementById('input'), todoUl = document.getElementById('todos');
const save = () => localStorage.setItem('todos', JSON.stringify([...todoUl.children].map(li => ({ text: li.innerText }))));

const add = todo => {
    const li = document.createElement('li');
    li.innerText = todo.text;
    li.onclick = () => { li.remove(); save(); };
    todoUl.appendChild(li);
};

const handle = () => {
    if (input.value.trim()) { add({ text: input.value }); save(); input.value = ''; }
};

JSON.parse(localStorage.getItem('todos') || '[]').forEach(add);
form.onsubmit = e => { e.preventDefault(); handle(); };
window.oncontextmenu = e => { e.preventDefault(); handle(); };
