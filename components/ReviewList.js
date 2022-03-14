app.component('review-list', {
    props: {
        reviews: {
            type:Array,
            required: true
        }
    },
    template:
    /*html*/
    ` <div class = "review-container">
        <h3>Reviews:</h3>
            <ul>
                <li  v-for="(review, index) in reviews" :key="index">
                 <!--{{ review.recommend }}-->
                 <p style = "color:green;" v-if="review.recommend === 'recommended'">recommended</p>
                 <p style = "color:red;" v-if="review.recommend === 'not recommended'">not recommended</p>
                
                {{ review.name }} gave this {{ review.rating }} stars
                <br/>
                "{{ review.review }}"
                <br/>
                <hr>
                </li>
            </ul>
        </div> `

})