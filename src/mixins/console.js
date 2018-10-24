export default {
    data () {
        return {
            count: 0
        }
    },
    mounted() {
        setInterval( () => {
            console.log(++this.count);
        }, 1000)
    },
    methods: {
        consoleOne (text) {
            console.log(text);
            
        }
    }
}