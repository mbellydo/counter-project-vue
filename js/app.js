const app = Vue.createApp({
    data() {
        return {
            counter : 0
        }
    },

    methods : {
        updateCounter(num) {
            this.counter += num
        },
    }
})

app.mount('#app')
