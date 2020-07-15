var todos = ['item 1', 'item 2', 'item 3']

// Displaying todos 
function displayTodos() {
    console.log('My todos:', todos);
}

displayTodos();

// Adding todos
function addTodo(todo) {
    todos.push(todo);
    displayTodos();
}

addTodo('some stuff');

//Changing todos
function changeTodo(position, newValue) {
    todos[position] = newValue;
    displayTodos();
}

changeTodo(0, 'changed');

//Deleting todos
function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}

deleteTodo(0);
