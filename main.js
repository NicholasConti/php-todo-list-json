const { createApp } = Vue;

createApp({
    data() {
        return {
            myTodo: []
        }
    },
    methods: {
    },
    created() {
        axios.get('server.php')
            .then((response) => {
                this.myTodo = response.data;
            });
    }
}).mount('#app');