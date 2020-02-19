let todoApp = {
    todoStates: [],

    start(){
        let inputElement = document.querySelector('input[name=todo]');
        inputElement.addEventListener('keypress', this.onCreateTodo.bind(this));
    },

    updateStatusBar(){
        let todoList = document.querySelectorAll('.list-group > li');
        let allTodoCount = document.getElementById('all-todo-count');

        allTodoCount.textContent = todoList.length;
    },

    onCreateTodo(event){
        if(event.which === 13){
            let list = document.querySelector('.list-group');
            let todoContainer = document.createElement('li');
            let todoItem = document.createElement('div');
            let todoStatus = document.createElement('input');
            let todoLabel = document.createElement('label');
            let deleteButton = document.createElement('button');

            todoContainer.classList.add('list-group-item', 'list-group-flat');

            todoContainer.appendChild(todoItem);

            todoItem.appendChild(todoStatus);
            todoItem.appendChild(todoLabel);
            todoItem.appendChild(deleteButton);
            todoItem.classList.add('checkbox');

            todoStatus.setAttribute('id', 'checkbox');
            todoStatus.setAttribute('type', 'checkbox');

            todoLabel.setAttribute('for', 'checkbox');
            todoLabel.textContent = event.target.value;

            deleteButton.classList.add('btn', 'btn-outline-secondary', 'btn-sm');
            deleteButton.textContent = 'X';

            list.appendChild(todoContainer);

            deleteButton.addEventListener('click', this.onDeleteTodo.bind(this));

            this.updateStatusBar();
        }
    },

    onDeleteTodo(event){
        event.target.parentElement.parentElement.remove();

        this.updateStatusBar();
    }
};

todoApp.start();