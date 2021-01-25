const app = Vue.createApp({
    data() {
        return {
            counter: 5,
            mensajeAlerta: ''
        }
    },

    methods: {
        updateCounter(num) {
            // Transformar this.counter en un entero con el símbolo '+'. Esto nos pasa, porque this.counter ahora es un string, debido a que "traemos" el valor de la propiedad 'value' del input a esta variable. Dicha propiedad 'value' siempre es de tipo string...
            this.counter = +this.counter + num
        }
    },

    computed: {
        getColorCounter() {
            if (this.counter>0) {
                return 'green'
            }

            return 'yellow'
        }
    },

    watch : {
        counter(value) {
            console.log("Te vigilo!: " , value)
            if (value>=20) {
                this.mensajeAlerta = "Lo siento, no puedo permitir que incrementes más el valor..."
                this.counter = 20

            }

            else {
                this.mensajeAlerta = ""
            }
        }
    }

})

app.mount('#app')
