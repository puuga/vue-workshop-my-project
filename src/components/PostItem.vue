<template>
    <div class="card">
        <div class="title">
            <img :src="mediaUrl" :alt="post.title.rendered" class="imageCover">
            <h1>{{ post.title.rendered }}</h1>
            @ {{ post.date_gmt }}
        </div>

        <div v-html="post.excerpt.rendered"></div>

        <div>
            <a :href="post.link" target="_blank" rel="puuga">Continue to ...</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PostItem',
    props: {
        post: Object
    },
    data () {
        return {
            mediaUrl: ''
        }
    },
    mounted () {
        this.getImageUrl(this.post.featured_media)
    },
    methods: {
        async getImageUrl (mediaId) {
            try {
                // console.log(`${this.$apiUrl}wp-json/wp/v2/media/${this.post.featured_media}`);
            
                let response = await fetch(`${this.$apiUrl}wp-json/wp/v2/media/${mediaId}`)
                let content = await response.json()

                console.log(content.source_url)
            
                this.mediaUrl = content.source_url
            } catch (error) {
                console.error(error);
                console.log(`error -> ${this.$apiUrl}wp-json/wp/v2/media/${mediaId}`);
                
                return ''
            }
        }
    }
}
</script>

<style scoped>
.card {
    border: 1px solid black;
    border-radius: 1rem;
    background-color: lightgray;
    margin: 1rem;
    padding: 1rem;
}
.title {
    margin-bottom: 50px;
}
.imageCover {
    max-height: 200px;
}
</style>
