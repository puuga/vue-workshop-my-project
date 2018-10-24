<template>
  <div id="app">
    <ul>
      <li :id="todo.time" v-for="todo in todos" :key="todo.time">
        <span :class="{ 'green': todo.completed, 'red': !todo.completed }">
          {{ todo.text | capitalize }}
        </span>
      </li>
    </ul>

    <form @submit.prevent="save">
      <input type="text" name="" id="" v-model="newTodo">
      <button type="submit">Save</button>
    </form>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  filters: {
    capitalize (value) {
      return value.toUpperCase()
    } 
  },
  data () {
    return {

      todos: [
        {
          text: 'Todo1',
          time: 1540352507,
          completed: true
        },
        {
          text: 'Todo2',
          time: 1540352529,
          completed: true
        },
        {
          text: 'Todo3',
          time: 1540352535,
          completed: false
        }
      ],
      newTodo: ''
    }
  },
  methods: {
    save () {
      let entry = {
          text: this.newTodo,
          time: Math.round(Date.now() / 1000),
          completed: false
        }

      this.todos.push(entry)
      this.newTodo = ''
    },
  }
}
</script>

<style scoped>
  .red {
    color: orangered;
  }
  .green {
    color: green;
  }
</style>
