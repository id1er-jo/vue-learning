(function(){

    let app = new Vue({
        el: '#app',
        data: {
            message: 'Привет, Vue!'
        }
    });

    let app2 = new Vue({
        el: '#app-2',
        data: {
            message: 'Вы загрузили эту страницу: ' + new Date().toLocaleString()
        }
    });

    let app3 = new Vue({
        el: '#app-3',
        data: {
            seen: false
        }
    });

    let app4 = new Vue({
        el: '#app-4',
        data: {
            todos: [
                { text: 'Изучить JavaScript' },
                { text: 'Изучить Vue' },
                { text: 'Создать что-нибудь классное' }
            ]
        }
    });

    app4.todos.push({ text: 'Profit' });

    let app5 = new Vue({
        el: '#app-5',
        data: {
            message: 'Привет, Vue.js!'
        },
        methods: {
            reverseMessage: function () {
                this.message = this.message.split('').reverse().join('')
            }
        }
    });

    let app6 = new Vue({
        el: '#app-6',
        data: {
            message: 'Привет, Vue!'
        }
    });

    Vue.component('todo-item', {
        template: '<li>Это одна задача в списке</li>'
    });

    Vue.component('todo-item', {
        props: ['todo'],
        template: '<li>{{ todo.text }}</li>'
    });

    Vue.component('todo-item', {
        props: ['todo'],
        template: '<li>{{ todo.text }}</li>'
    });

    let app7 = new Vue({
        el: '#app-7',
        data: {
            groceryList: [
                { id: 0, text: 'Овощи' },
                { id: 1, text: 'Сыр' },
                { id: 2, text: 'Что там ещё люди едят?' }
            ]
        }
    });
});
