const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id){
            this.cart.push(id)
        },
        downdateCart(id){
            //this.cart.pop(id)
            const index = this.cart.indexOf(id)
            console.log(index)
            if(index>-2){
                this.cart.splice(index,1)
            }
        }
    }
})
