<template>
    <div>
        <form @submit.prevent="save">
            <span class="red">{{ errors.first('todo') }}</span>
            <input type="text" v-validate="'required'" v-model="newTodo" name="todo">
            <button type="submit">Save</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'AddForm',
    props: {
        onSave: Function
    },
    data () {
        return {
            newTodo: ''
        }
    },
    methods: {
        async save () {
            let result = await this.$validator.validateAll() 
            // this.onSave(this.newTodo)
            this.$emit('onSave', this.newTodo)
            this.newTodo = ''
        }
    }
}
</script>

<style>
.red {
    color: orangered;
}
.green {
    color: green;
}
</style>
