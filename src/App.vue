<template>
  <div id="app">

    <SearchBox/>

    <TodoList/>

    <AddForm/>
    
  </div>
</template>

<script>
import TodoList from './components/TodoList'
import SearchBox from './components/SearchBox'
import AddForm from './components/AddForm'

export default {
  name: 'App',
  components: {
    TodoList,
    SearchBox,
    AddForm
  },
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
      newTodo: '',
      searchKey: ''
    }
  },
  mounted () {
    // load saved data from local storage
    if (localStorage.todos) {
      this.todos = JSON.parse(localStorage.todos)
    } else {
      this.todos = []
    }
  },
  computed: {
    todoSorted () {
      return this.todos
        .filter(todo => todo.text.toLowerCase().includes(this.searchKey.toLowerCase()))
        .sort((a,b) => b.time - a.time)
    },
  },
  watch: {
    todos (current, old) {
      console.log(current);
      
    }
  },
  methods: {
    async save () {
      let result = await this.$validator.validateAll() 
      if (!result) return

      let entry = {
          text: this.newTodo,
          time: Math.round(Date.now() / 1000),
          completed: false
        }

      this.todos.push(entry)

      localStorage['todos'] = JSON.stringify(this.todos);

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
