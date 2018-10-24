(function($){
    $(function(){
        new Vue({
            el: '#tasks',
            data: {
                id: '',
                title: '',
                desc: '',
                empty: false,
                tasks: [
                    {
                        id: '1',
                        title: 'Test task 1',
                        desc : 'Description'
                    }
                ]
            },
            methods: {
                add: function () {
                    if(this.title !== '') {
                        let obj = {};
                        obj.id = this.tasks.length;
                        obj.title = this.title;
                        obj.desc = this.desc;
                        this.tasks.push(obj);
                        this.title = '';
                        this.desc = '';
                        this.saveTasks();
                        this.hideForm();
                    }
                },
                del: function (ev) {
                    let delIndex = this.tasks.findIndex(x => x.id === ev);
                    this.tasks.splice(delIndex, 1);
                    this.saveTasks();
                    this.checkEmpty();
                },
                showForm: function () {
                    $.magnificPopup.open({
                        type: 'inline',
                        items: {
                            src: '#addTask'
                        },
                        focus: '#name'
                    });
                    $('.modal').show();
                },
                hideForm: function () {
                    $('.modal').hide();
                    $.magnificPopup.close();
                },
                checkEmpty: function () {
                    if (this.tasks.length < 1) {
                        this.empty = true;
                    } else {
                        this.empty = false;
                    }
                },
                saveTasks: function () {
                    const parsed = JSON.stringify(this.tasks);
                    localStorage.setItem('tasks', parsed);
                }
            },
            mounted() {
                if (localStorage.getItem('tasks')) {
                    try {
                        this.tasks = JSON.parse(localStorage.getItem('tasks'));
                    } catch(e) {
                        localStorage.removeItem('tasks');
                    }
                }
            }
        });

        $('.mfp-bg').on('click', function () {
            alert(123);
        })
    });
}(jQuery));