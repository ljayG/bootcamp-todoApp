let todoApp = {
    todos: [],

    start(){
        let inputElement = document.querySelector('input[name=todo]');
        inputElement.addEventListener('keypress', this.onCreateTodo.bind(this));
    },

    add(title){
        this.todos.push({
            todo: title,
            complete: false,
            createDate: new Date(),
            dueDate: null,
            completeDate: null
        });
    },

    updateView(){
        let list = document.querySelector('.list-group');
        let todoStatus = document.querySelector('.todo-status');
        let listHTML = '';

        for(let i=0; i < this.todos.length; i++){
            listHTML += `
                <li class="list-group-item list-group-flat">
                    <div class="checkbox">
                        <input type="checkbox" id="checkbox">
                        <label for="checkbox">${this.todos[i].todo}</label>
                        <button type="button" class="btn btn-outline-secondary btn-sm" data-id="${i}">X</button>
                    </div>
                </li>`;
        }

        list.innerHTML = listHTML;

        todoStatus.innerHTML = `
            할일:<span id="all-todo-count">${this.todos.length}건</span>
            완료:<span id="complete-todo-count">${this.todos.filter(t => t.complete).length}건</span>
            미완료:<span id="incomplete-todo-count">${this.todos.filter(t => !t.complete).length}건</span>`;

        list.querySelectorAll('button').forEach(btn => btn.addEventListener('click', this.onDeleteTodo.bind(this)));
    },

    onCreateTodo(event){
        if(event.which === 13){
            this.add(event.target.value);
            this.updateView();
        }
    },

    onDeleteTodo(event){
        let id = event.target.dataset.id;
        this.todos.splice(id, 1);
        this.updateView();
    }
};

todoApp.start();