
<template>
	<header class="top-area">
			<div class="header-area">
				<div class="container">
					<div class="row">
						<div class="col-sm-2">
							<div class="logo">
								<a href="index.html">
									Tour<span>Vago</span>
								</a>
							</div><!-- /.logo-->
						</div><!-- /.col-->
						<div class="col-sm-10">
							<div class="main-menu">
							
								<!-- Brand and toggle get grouped for better mobile display -->
								<div class="navbar-header">
									<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
										<i class="fa fa-bars"></i>
									</button><!-- / button-->
								</div><!-- /.navbar-header-->
								<div class="collapse navbar-collapse">		  
									<ul class="nav navbar-nav navbar-right">
										<li class="smooth-menu"><router-link to="/">home</router-link></li>
										<li class="smooth-menu" ><router-link to="/">Destination</router-link></li>
										<li class="smooth-menu"><router-link to="/">Packages</router-link> </li>
										<li class="smooth-menu"><router-link to="/">Special Offers</router-link></li>
										<li class="smooth-menu"><router-link to="/">Blog</router-link></li>
										<li class="smooth-menu"><router-link to="/">Subscription</router-link></li>
										<li class="smooth-menu" v-show="loggedIn"><router-link to="/history">History</router-link></li>

										<li>
											<button class="book-btn" v-show="log">Log in
											</button>
										</li>
											<li>
											<button class="book-btn" v-show="!log">Log out
											</button>
										</li>
									</ul>
								</div><!-- /.navbar-collapse -->
							</div><!-- /.main-menu-->
						</div><!-- /.col-->
					</div><!-- /.row -->
					<div class="home-border"></div><!-- /.home-border-->
				</div><!-- /.container-->
			</div><!-- /.header-area -->

		</header>
    </template>

<script>
export default {
	  props:['loggedIn'],
    
  data () {
	  
    return {
		log:this.loggedIn
    }
  },
  methods:{

  }
}
</script>

<style scoped>
header{
    background-color:black;
    
}

</style>
