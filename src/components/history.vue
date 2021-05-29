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
			<div class="container">

				<div class="service-counter row">

					
                        <hr>
					
				





					

	
<h1 id="reviewsH1"> upcoming tours... </h1>

<div class="container row">
	<div class="leftcolumn">
	  <div class="card row">
		Exodus Travel<h2>Lalibela</h2>
		<h5> Rated <i class="fa fa-star"></i><i class="fa fa-star"></i> Due Dec 7, 2017 &nbsp; 3 Days remaining</h5>
		<div class="fakeimg" style="height:200px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, aliquid sint velit aperiam ipsam cumque! Ut aliquid cupiditate obcaecati perferendis soluta suscipit. Aspernatur voluptatem accusamus, in ad voluptas provident error tenetur labore sint.</div>
	  </div>

	</div>
	<div class="leftcolumn">
		<div class="card row">
		  Exodus Travel<h2>Lalibela</h2>
		  <h5> Rated <i class="fa fa-star"></i><i class="fa fa-star"></i> Due Dec 7, 2017 &nbsp; 3 Days remaining</h5>
		  <div class="fakeimg" style="height:200px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, aliquid sint velit aperiam ipsam cumque! Ut aliquid cupiditate obcaecati perferendis soluta suscipit. Aspernatur voluptatem accusamus, in ad voluptas provident error tenetur labore sint.</div>
		</div>
  
	  </div>

	  <div class="leftcolumn">
		<h1 id="reviewsH1"> Older tours... </h1>

		<div class="card row">
		  Exodus Travel<h2>Lalibela</h2>
		  <h5> Rated <i class="fa fa-star"></i><i class="fa fa-star"></i> Due Dec 7, 2017</h5>
		  <div class="fakeimg" style="height:200px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, aliquid sint velit aperiam ipsam cumque! Ut aliquid cupiditate obcaecati perferendis soluta suscipit. Aspernatur voluptatem accusamus, in ad voluptas provident error tenetur labore sint.</div>
		</div>
  
	  </div>
	  <div class="leftcolumn">
		<div class="card row">
		  Exodus Travel<h2>Lalibela</h2>
		  <h5> Rated <i class="fa fa-star"></i><i class="fa fa-star"></i> Due Dec 7, 2017</h5>
		  <div class="fakeimg" style="height:200px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, aliquid sint velit aperiam ipsam cumque! Ut aliquid cupiditate obcaecati perferendis soluta suscipit. Aspernatur voluptatem accusamus, in ad voluptas provident error tenetur labore sint.</div>
		</div>
  
	  </div>

  </div>


			
		<!--/.service-content-->
					
				</div><!--/.statistics-counter-->	
			</div><!--/.container-->

		</section>
	
</div>



    </template>

<script>
	    import Header2 from './Header2.vue'

export default {
	props:['loggedIn'],
components: {

		Header2,
	},  

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
