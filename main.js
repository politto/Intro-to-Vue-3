const app = Vue.createApp({
    data() {
        return {
            inventory:0,
            cart:0,
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 1, onSale:true },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0, onsale:false },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        removefromCart() {
            if(this.cart>0){
                this.cart -= 1
            }
        },
        updateVariant(index) { 
            this.selectedVariant = index
            
        },
        
        
        
        
    },
    computed: {
        title(){
            return this.brand + ' ' + this.product 
        },
        image(){
            return this.variants[this.selectedVariant].image
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity
        },
        Sale(){
            if(this.variants[this.selectedVariant].onSale == true){
                return  this.brand +' '+ this.variants[this.selectedVariant].color + ' ' + this.product + ' is on sale'
            }
            else{
                return "."
            }
            
            
        },
        
    }
})

const test = {
    prop: 42,
    func: function() {
      return this.prop;
    },
  };
  
  console.log(test.func());