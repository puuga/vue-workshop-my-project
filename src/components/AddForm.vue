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
    name: 'AddForm'
}
</script>

<style>

</style>
