const { createApp } = Vue;

createApp({
    data() {
        return {
            myTodo: [],
            newTodo: '',
        }
    },
    methods: {
        // funzione per aggiungere todo
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
        // funzione per cambiare il "done" del todo
        toggleDone(index) {
            axios.get('server.php', {
                params: {
                    index
                }
            })
                .then((response) => {
                    this.myTodo = response.data;
                })
        },
        // funzione per eliminare un todo
        deleteTodo(iDelete) {
            axios.get('server.php', {
                params: {
                    iDelete
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