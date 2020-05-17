class TodoService {
    constructor($q) {
        'ngInject';
        this.$q = $q;
        this.default = [
            { id: 1, name: 'freeman', done: false, editing: false },
            { id: 2, name: 'yam', done: false, editing: false },
        ];
    }

    getTodos() {
        return this.$q.resolve(this.default);
    }
}




