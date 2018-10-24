<template>
    <div>
        <div v-for="post in posts" :key="post.id">
            <PostItem :post="post"/>
        </div>
    </div>
</template>

<script>
import PostItem from './PostItem'

export default {
    name: 'PostList',
    components: {
        PostItem
    },
    props: {
        posts: Array
    }
}
</script>

<style>

</style>
