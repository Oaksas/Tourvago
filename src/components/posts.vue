<template>
<div id="blog" class="container">


<h1 >All Blogs</h1>
<form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" v-model="search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
<div class="container " v-theme:column="'wide'">
  <div v-for="blog in filterBlogs" :key="blog" class="border border-danger p-2 mb-4 ">
    
    <span>{{blog.id}}</span><span> {{blog.completed}}</span>
    <span class="h3" v-rainbow> {{blog.title | to-uppercase}} | to-uppercase</span>
    <div>
      Content
    </div>


  </div>


</div>
</div>



    </template>

<script>
export default{

  data () {
    return {
       blogs:[],
       search:""
  }},
  methods:{
    post:function(){

      
    }
  },
  created(){
            this.$http.get('https://jsonplaceholder.cypress.io/todos').then(function(data)
            {
this.blogs=data.body.slice(0,10);


            })

  },
  computed:{
    filterBlogs:function(){
 return this.blogs.filter((blog)=>{
   return blog.title.match(this.search.toLowerCase());
 })
    }
  }

}

</script>

<style scoped>

</style>
