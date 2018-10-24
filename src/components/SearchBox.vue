<template>
    <div>
        <form @submit.prevent="save">
            <label for="search-key">Search</label>
            <input id="search-key" type="text" v-model="searchKey" name="search">
        </form>
    </div>
</template>

<script>
export default {
    name: 'SearchBox'
}
</script>

<style>

</style>
