<template>
    <div>
        <ul>
            <li :id="todo.time" v-for="todo in todoSorted" :key="todo.time">
            <span :class="{ 'green': todo.completed, 'red': !todo.completed }">
                {{ todo.text | capitalize }}
            </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'TodoList',
    props: {
        todoSorted: Array
    },
    filters: {
        capitalize (value) {
        return value.toUpperCase()
        } 
    },
}
</script>

<style>

</style>
