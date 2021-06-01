<template>

<div>
	  <header-2 :loggedIn="loggedIn"></header-2>

	<section id="home" class="about-us">
			<div class="container">
				<div class="about-us-content">
					<div class="row">
						<div class="col-sm-12">
							<div class="single-about-us">
								<div class="about-us-txt">
									<h2>
										9-Day Group Tour To Southern Part Of Ethiopia From Addis Ababa 

									</h2>
									<div class="about-btn ">
								
									
									</div>
									<!--/.about-btn-->
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

		</section><!--/.about-us-->
		<!--about-us end -->

		<!--travel-box end-->

        <!--service start-->
		<section id="service" class="service">
	

								<!-- Tab panes -->
								<div class="tab-content container">
	<div class="service-content">
								<h2>
									<a href="#" id="reviewsH1">
									Description
									</a>
								</h2>
								<p>Southern Ethiopia is known for its     beautiful nature and wildlife. 
									Visit the Chamo lake to see the huge crocodiles and the hippos. 
									Head to the village of Konso to visit their social organization and  terraces which they are known for .
									 Visit the Dorze village and experience the hard-working life of the locals known for their cloth making out of cotton 
									See the Mursi tribe which are known for their lip piercing,
									Visit the Dassanach tribe that lives near the border kenya. 
									Visit the pride Hammar tribe known for their bull jumping event (a pre marriage event) .</p>

									
							</div>
							
									<div role="tabpanel" class="tab-pane active fade in" id="tours">
										<div class="tab-para">

											<div class="row">
												<div class="col-lg-4 col-md-4 col-sm-12">
													<div class="single-tab-select-box">

														<h2>Price per individual  --- $2344</h2>

														<div class="">
													
																			<div class="price_slider_amount">
																				<input type="text"  v-model="numberOfIndividual"  name="price"  placeholder="No of individuals" />
																			</div>
														</div><!-- /.travel-select-icon -->

												
													</div><!--/.single-tab-select-box-->
												</div><!--/.col-->

												<div class="col-lg-2 col-md-3 col-sm-4">
													<div class="single-tab-select-box">
														<h2>check in</h2>
														<div class="travel-check-icon">
															<form action="#">
																<input type="text" name="check_in" v-model="checkIn" class="form-control" data-toggle="datepicker" placeholder="12 -01 - 2017 ">
															</form>
														</div><!-- /.travel-check-icon -->
													</div><!--/.single-tab-select-box-->
												</div><!--/.col-->

											
												<div class="col-lg-2 col-md-1 col-sm-4">
													<div class="single-tab-select-box">
														<h2>duration</h2>
														<div class="travel-select-icon">
															<select class="form-control " v-model="duration">

															  	<option value="default">5</option><!-- /.option-->

															  	<option value="10">10</option><!-- /.option-->

															  	<option value="15">15</option><!-- /.option-->
															  	<option value="20">20</option><!-- /.option-->

															</select><!-- /.select-->
														</div><!-- /.travel-select-icon -->
													</div><!--/.single-tab-select-box-->
												</div><!--/.col-->

										

											</div><!--/.row-->

											<div class="row">
												<div class="col-sm-5">
													<div class="travel-budget">
														<div class="row">
															<div class="col-md-3 col-sm-4">
																<h3>Total Price : </h3>
															</div><!--/.col-->
															<div class="co-md-9 col-sm-8">
																<div class="travel-filter">
																	<div class="info_widget">
																		<div class="price_filter">
																			<h1>$12321312</h1>

																		</div><!--/.price-filter-->
																	</div><!--/.info_widget-->
																</div><!--/.travel-filter-->
															</div><!--/.col-->
														</div><!--/.row-->
													</div><!--/.travel-budget-->
												</div><!--/.col-->
												<div class="clo-sm-7">
													<div class="about-btn travel-mrt-0 pull-right">
														<button  class="about-view travel-btn" @click="temp">
															Book	
														</button><!--/.travel-btn-->
													</div><!--/.about-btn-->
												</div><!--/.col-->

											</div><!--/.row-->

										</div><!--/.tab-para-->

									</div><!--/.tabpannel-->

					
								</div>
		</section><!--/.service-->
		
	
</div>



    </template>

<script>
  import Header2 from './Header2.vue'

export default {
components: {

		Header2,
	},
  data () {
    return {
		agent: this.$route.params.agent,
    }
  },
  methods:{

  }
}

</script>

<style >
.about-us{
	display: flex;
    justify-content: center;
    align-items: center;
	position: relative;
	background: url(../assets/images/home/5.jpg)no-repeat;
	background-size: cover;
	background-position: center;
	min-height: 1000px;
}
</style>
