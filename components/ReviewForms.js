app.component('review-form',{
    template:
    /*html*/
    `<form class = "review-form" @submit.prevent="onSubmit" >
    <!--prevent in above form tag is modifier that prevent browser refreshing-->
    <h3>Leave a review</h3>
    <label for="name" >Name:</label>
    <input id="name" v-model="name">

    <label for="review" >Review:</label>
    <textarea id="review" v-model="review"></textarea>
    
    <label for="rating" >Rating:</label>
    <select id="rating" v-model.number="rating">
      <option >5</option>
      <option >4</option>
      <option >3</option>
      <option >2</option>
      <option >1</option>
    </select>
    <h3> Would you recommend this product?</h3>
    <input class="button" value="Yes" v-on:click="Irecc">
    <input class="button" value="No" v-on:click="Inotrecc">
    
    <input type="submit" class="button" value="Submit">
    </form>`,
    data(){
        return{
            name: '',
            review: '',
            rating: null,
            recommend: ''
        }
    },
    methods:{
        
        Irecc(){
            this.recommend = 'recommended'
            //console.log(recommend)
        },
        Inotrecc(){
            this.recommend = 'not recommended'
            //console.log(recommend)
            
        },
        onSubmit(){
            if(this.name==="" || this.review ===''||this.rating === null){
                alert("Review is incomplete, Please fill out every fields.")
                return
            }
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                recommend: this.recommend
            }
            this.$emit('review-submitted',productReview)
    
            this.name = ''
            this.review = ''
            this.rating = null
            this.recommend = null
        }
    }
})