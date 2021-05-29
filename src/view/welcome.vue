<template>

<div>
								<Header1  ></Header1>
		<section id="home" class="about-us"  >
			<div class="container">
				<div class="about-us-content">
					<div class="row">
						<div class="col-sm-12">
							<div class="single-about-us">
								<div class="about-us-txt"  >

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
 <SearchedPlaces></SearchedPlaces>
 <router-view></router-view>
 </div>


</template>

<script>
import Header1 from '../components/Header.vue'
import SearchedPlaces from '../components/searchedPlaces.vue';
export default {
name: 'welcome',
	components: {
		SearchedPlaces,
		Header1,

	},
  data () {
    return{
		
	}

  },

   
}

</script>

<style scoped>

</style>
