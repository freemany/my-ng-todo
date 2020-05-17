import defaultTodos from './todo/todo.js';

const app = angular.module('myTodo', []);

app.controller('todoController', ($scope) => {
    $scope.title = "My Todo App";
    $scope.editingTodo = [];

    $scope.todos = [
        { id: 1, name: 'freeman', done: false, editing: false },
        { id: 2, name: 'yam', done: false, editing: false },
    ];

    $scope.complete = (key) => {
        $scope.todos[key].done = !$scope.todos[key].done;
    };
    $scope.delete = (key) => {
        $scope.todos.splice(key, 1);
    };
    $scope.add = () => {
        $scope.todos.push({
            id: Math.floor(Math.random() * 1000000),
            name: $scope.newTodo,
            done: false,
            editing: false,
        });
        $scope.newTodo = '';
    };
    $scope.edit = (key) => {
        if (false === $scope.todos[key].editing) {
            $scope.editingTodo[key] = $scope.todos[key].name;
            $scope.todos[key].editing = true;
            return;
        }

        $scope.todos[key].name = $scope.editingTodo[key];
        $scope.todos[key].editing = false;
    }
});