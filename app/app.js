angular.module('todoApp', [])
    .controller('appController', function () { })
    .factory('todoFactory', TodoFactory)
    .service('todoService', TodoService)
    .component('todo', TodoComponent);