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

					<div class="col-md-11 col-sm-11 fa-border">
						<div class="single-service-box">
							<div class="service-img">
								<!-- <img src="https://img.icons8.com/cotton/64/000000/regular-document.png"/> -->
							</div><!--/.service-img-->
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

							



						</div><!--/.single-service-box-->
					</div>
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
