const { createApp } = Vue;

createApp({
    data() {
        return {
            myTodo: [],
            newTodo: '',
        }
    },
    methods: {
        addTodo() {
            const param = {
                newTodo: this.newTodo
            };

            axios.post('server.php', param, {
                headers: { 'Content-Type': 'multipart/form-data' }
            })
                .then((response) => {
                    this.myTodo = response.data;
                });
            this.newTodo = '';
        },
        toggleDone(index) {
            axios.get('server.php', {
                params: {
                    index
                }
            })
                .then((response) => {
                    this.myTodo = response.data;
                })
        }
    },
    created() {
        axios.get('server.php')
            .then((response) => {
                this.myTodo = response.data;
            });
    }
}).mount('#app');