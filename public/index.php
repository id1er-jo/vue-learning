<html xmlns="http://www.w3.org/1999/html">
<head>
    <? include_once 'header.php'; ?>
</head>
<body>
<main class="main">
    <section id="tasks" class="tasks">
        <div class="container">
            <h2>Список задач</h2>
            <button class="popup-content" v-on:click="showForm">
                Добавить
            </button>
            <form id="addTask">
                <div class="modal" hidden>
                    <h2>Создание задачи</h2>
                    <input id="name" v-model="title" type="text" placeholder="Введите название" /><br>
                    <textarea v-model="desc" rows="5" placeholder="Введите описание" /></textarea><br>
                    <input type="button" value="Готово!" v-on:click="add"/>
                </div>
            </form>
            <div class="tasks__list">
                <div class="tasks__item" v-for="task in tasks">
                    <h3> {{ task.title }} #{{ task.id }}</h3>
                    <div class="tasks__desc" v-if="task.desc">
                        {{ task.desc }}
                    </div>
                    <input class="tasks__delete-button"
                           type="button"
                           value="X"
                           v-on:click="del(task.id)"
                    >
                </div>
            </div>
            <div class="tasks__have-not" v-if="tasks.length < 1">
                Как то пусто. Чайку?
            </div>
        </div>
    <?/*
        <task-item
            v-for="task in tasks"
            v-bind:id="task.id"
            v-bind:title="task.title"
            v-bind:description="task.description"
        ></task-item>
    */?>
    </section>
</main>

</body>
</html>