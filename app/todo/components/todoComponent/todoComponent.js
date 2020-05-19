
const TodoComponent = {
    templateUrl: './app/todo/components/todoComponent/todoComponent.html',
    controllerAs: 'ctrl',
    controller: class todoComponentCtrl {
        constructor($scope, todoService, todoFactory) {
            this.editingTodo = [];
            this.todoFactory = todoFactory;
            this.todoService = todoService;
            this.$scope = $scope;
        }

        $onInit() {
            this.subTitle = this.todoFactory.getSubTitle();
            this._getDefaultTodos(); 
        }

        async _getDefaultTodos() {
            this.todos = await this.todoService.getTodos();
            this.$scope.$digest();
        }

        complete(key) {
            this.todos[key].done = !this.todos[key].done;
        }

        delete(key) {
            this.todos.splice(key, 1);
        }

        add() {
            this.todos.push({
                id: Math.floor(Math.random() * 1000000),
                name: this.newTodo,
                done: false,
                editing: false,
            });
            this.newTodo = '';
        }

        edit(key) {
            if (false === this.todos[key].editing) {
                this.editingTodo[key] = this.todos[key].name;
                this.todos[key].editing = true;
                return;
            }

            this.todos[key].name = this.editingTodo[key];
            this.todos[key].editing = false;
        }
    },
};

