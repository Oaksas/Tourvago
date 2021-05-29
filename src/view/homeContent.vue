<template>

	<div>
	
			<!--subscribe start-->
			<TopDests></TopDests>
			<SpecialOffer></SpecialOffer>
			<Reviews></Reviews>
			<SpecialDiscounts></SpecialDiscounts>
			<News></News>
			<Subscribe></Subscribe>

	</div>
</template>

<script>
import TopDests from '../components/topDests.vue';
import SpecialOffer from '../components/specialOffers.vue';
import Reviews from  '../components/reviews.vue';
import SpecialDiscounts from '../components/specialDiscounts.vue';
import News from  '../components/news.vue';
import Subscribe from  '../components/subscribe.vue';


export default {
	props:['loggedIn'],
	name: 'homeContent',
	components: {
		TopDests,
		SpecialOffer,
		Reviews,
		SpecialDiscounts,
		News,
		Subscribe,
	},
  	data () {
		  return{
	selectedImage: null,
	// loggedIn:false,

    images: [
      '../assets/images/home/1.jpg',
      '../assets/images/home/2.jpg',
 '../assets/images/home/3.jpg',
      '../assets/images/home/4.jpg']
		  }

  	},
  	methods:{
	     randomItem (items) {
      return items[Math.floor(Math.random()*items.length)];
    },
	  
  	},
	   created() {


    this.selectedImage = this.randomItem(this.images)

	console.log(this.selectedImage);

  },

  
}

</script>

<style scoped>
.about-us{
	display: flex;
    justify-content: center;
    align-items: center;
	position: relative;
	background: url(../assets/images/home/1.jpg)no-repeat;
	background-size: cover;
	background-position: center;
	min-height: 1000px;
}
</style>
