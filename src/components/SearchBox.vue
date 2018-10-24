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
    name: 'SearchBox',
    props: {
        onSearchKeyChange: Function
    },
    data () {
        return {
            searchKey: ''
        }
    },
    watch: {
        searchKey (val) {
            // this.onSearchKeyChange(val)
            this.$emit('onSearchKeyChange', val)
        }
    }
}
</script>

<style>

</style>
