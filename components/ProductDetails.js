app.component('product-detail',{
    props: {
        details:{
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `
    <ul>
        <li v-for="detail in details">{{ detail }}</li>
    </ul>
    <div class="product-details">
        <p>Socks for stand user</p>
      </div>
    `,
    data(){
        return {
            
        }
    },
    methods: {

    },
    computed: {
        
},

})
console.log('wtf')