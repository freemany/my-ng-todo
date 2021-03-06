const CompleteTodoDirective = () => {
    return {
        restrict: 'E',
        templateUrl: './app/todo/directives/completeTodoDirective.html',
        scope: {
            // = : two-way binding (reference)
            // @: one-way expression (top down)
            // &: one-way behaviour (bottom up)
            todos: '=', 
        },
        controller: class CompleteTodoDirectiveCtrl {
            constructor($parse, $scope, $element, $attrs) {
                'ngInject';
                this.$parse = $parse;
                this.$scope = $scope;
                this.$element = $element;
                this.$attrs = $attrs;
                this.$scope.label = 'Completed:';
                this.$scope.$watch('todos', (n, o) => { 
                    if (n) {
                        this.$scope.completedTodos = n.filter(t => t.done);
                    }
                }, true);
            }
        }
    }
};