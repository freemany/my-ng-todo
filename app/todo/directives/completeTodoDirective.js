const CompleteTodoDirective = () => {
    return {
        restrict: 'A',
        bindToController: true,
        templateUrl: './app/todo/directives/completeTodoDirective.html',
        // scope: {
        //     todos: '=todos',
        // },
        // link(scope) {
        //     console.log(scope.todos);
        //     scope.completedTodos = scope.todos;
        //     // scope.todos = scope.todos.filter(t => true === t.done);
        // },
        controller: class CompleteTodoDirectiveCtrl {
            constructor($parse, $scope, $element, $attrs) {
                'ngInject';
                this.$parse = $parse;
                this.$scope = $scope;
                this.$element = $element;
                this.$attrs = $attrs;
                this.$scope.label = 'Completed:';
                console.log(this.$scope.ctrl, this.$attrs.completeTodo);
                this.$scope.$watch(this.$attrs.completeTodo, (n, o) => { console.log(n)
                    if (n) {
                        this.$scope.completedTodos = n.filter(t => t.done);
                    }
                }, true);
            }
        }
    }
};