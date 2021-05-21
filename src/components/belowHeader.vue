<template>

<div>
<section id="home" class="about-us">
			<div class="container">
				<div class="about-us-content">
					<div class="row">
						<div class="col-sm-12">
							<div class="single-about-us">
								<div class="about-us-txt">
									<h2>
										Explore the Beauty of Home of the origin

									</h2>
									<div class="about-btn">
								
										<a href="#gallery"><button  class="about-view">
											explore now
										</button></a>
										
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

		</section><!--/.about-us-->
		<!--about-us end -->

		<!--travel-box start-->
		
  
</div>



    </template>

<script>
export default {

  data () {
    return {
       blog:{
         title:"",
         content:"",
         audience:[],
          author:"",

       },
       authors:[
       'Aman','Alemitu','Aleme','Jefersa'
       
       ]
    }
  },
  methods:{
    post:function(){
            this.$http.get('https://jsonplaceholder.cypress.io/todos/1',{
              userId:this.blog.author,
              title:this.blog.audience,
              content:this.blog.content,
              author:this.blog.author


            }).then(function(data){
              console.log(data);
            })
      
    }
  }
}

</script>

<style scoped>

</style>
