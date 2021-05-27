<template>

	<div>
								<Header></Header>

		<section id="home" class="about-us" >
			<div class="container">
				<div class="about-us-content">
					<div class="row">
						<div class="col-sm-12">
							<div class="single-about-us">
								<div class="about-us-txt"  >
>
									<h2>
										Explore the Beauty of Home of the origin
									</h2>
									<div class="about-btn">
								
										<a href="#gallery">
											<button  v-on:click="explore" class="about-view">
												explore now
											</button>
										</a>	
									</div><!--/.about-btn-->
								</div><!--/.about-us-txt-->
							</div><!--/.single-about-us-->
						</div><!--/.col-->
						<div class="col-sm-0">
							<div class="single-about-us">
								
							</div><!--/.single-about-us-->
						</div><!--/.col-->
					</div><!--/.row-->
				</div><!--/.about-us-content-->
			</div><!--/.container-->
		</section>
			<!--subscribe start-->
			<SearchedPlaces></SearchedPlaces>
			<TopDests></TopDests>
			<SpecialOffer></SpecialOffer>
			<Reviews></Reviews>
			<SpecialDiscounts></SpecialDiscounts>
			<News></News>
			<Subscribe></Subscribe>

	</div>
</template>

<script>
import SearchedPlaces from './searchedPlaces.vue';
import TopDests from './topDests.vue';
import SpecialOffer from './specialOffers.vue';
import Reviews from  './reviews.vue';
import SpecialDiscounts from './specialDiscounts.vue';
import News from  './news.vue';
import Subscribe from  './subscribe.vue';
import Header from './Header.vue'


export default {
	name: 'AnotherComponents',
	components: {
		SearchedPlaces,
		TopDests,
		SpecialOffer,
		Reviews,
		SpecialDiscounts,
		News,
		Subscribe,
		Header,
	},
  	data () {
		  return{
	selectedImage: null,

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
    }
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
