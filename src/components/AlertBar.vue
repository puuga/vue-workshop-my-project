<template>
    <div class="alert">
        <slot name="title"></slot><br/>
        <slot name="subtitle"></slot>
    </div>
</template>

<script>
export default {
    name: 'AlertBar'
}
</script>

<style scoped>
    .alert {
        margin: 1rem;
        padding: 1rem;
        color: firebrick;
        border: firebrick 1px solid;
        border-radius: 1rem;
    }
</style>
