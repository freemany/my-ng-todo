angular.module('todoApp', [])
    .controller('appController', function () { })
    .factory('todoFactory', TodoFactory)
    .service('todoService', TodoService)
    .directive('completeTodo', CompleteTodoDirective)
    .component('todo', TodoComponent);