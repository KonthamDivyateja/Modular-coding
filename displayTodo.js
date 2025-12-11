const displayTodos = (data, containerId = 'todos-container') => {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container element with ID ${containerId} not found.`);
        return;
    }

    container.innerHTML = '';

    if (data && data.length > 0) {
        data.forEach(todo => {
            const todoItem = document.createElement('div');
            todoItem.style.border = '1px solid #ccc';
            todoItem.style.padding = '10px';
            todoItem.style.margin = '10px 0';
            todoItem.style.backgroundColor = todo.completed ? '#e6ffe6' : '#fff';

            const title = document.createElement('h4');
            title.textContent = todo.title;

            const status = document.createElement('p');
            status.textContent = `Status: ${todo.completed ? 'Completed' : 'Pending'}`;
            status.style.color = todo.completed ? 'green' : 'red';

            todoItem.appendChild(title);
            todoItem.appendChild(status);
            container.appendChild(todoItem);
        });
    } else {
        container.innerHTML = '<p>No todos found.</p>';
    }
};

export default displayTodos;