<template>
    <div>

        <!-- header -->
        <Header/>

        <!-- Loading -->
        <div v-if="isLoadingPosts" class="loading">
            <h1>Posts is coming...</h1>
        </div>

        <!-- post list -->
        <PostList :posts="posts"/>

        <!-- footer -->

    </div>
</template>

<script>
import Header from './components/Header'
import PostList from './components/PostList'

export default {
    name: 'App',
    components: {
        Header,
        PostList
    },
    data () {
        return {
            posts: [],
            isLoadingPosts: false
        }
    },
    mounted () {
        this.fetchSkooldioPosts()
    },
    methods: {
        async fetchSkooldioPosts () {
            try {
                this.isLoadingPosts = true

                let response = await fetch(`${this.$apiUrl}wp-json/wp/v2/posts`)
                let posts = await response.json()
                console.log('fetchSkooldioPosts', posts);

                this.posts = posts
                this.isLoadingPosts = false
            } catch (error) {
                this.isLoadingPosts = false
            }
            
        }
    }
}
</script>

<style>
.loading {
    margin-top: 2rem;
    text-align: center;
}
</style>
