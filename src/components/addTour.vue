<template>

<div>
     <div class="testbox">
      <form action="/">

        <div class="banner">
          <h1>TourVago Add Tour</h1>
        </div>
           <div class="item">
          <p>Name of the tour<span class="required">*</span></p>
          <div class="name-item">
            <input type="text" name="name" placeholder="Fullname" required/>
          </div>
        </div>
  
        <div class="item">
          <p>Description<span class="required">*</span></p>
          <input type="text" name="name"/>
        </div>
     
        <div class="item">
          <p>Cost per person( in Birr)<span class="required">*</span></p>
          <input type="text" name="name" required/>
        </div>
     
        <div class="item">
          <p> Address<span class="required">*</span></p>
          <input type="text" name="name" placeholder="Country" required/>
          <div class="city-item">
            <input type="text" name="name" placeholder="City" required/>
            <input type="text" name="name" placeholder="Region" required/>
            <select>
              <option value="">Country</option>
              <option value="1">Russia</option>
              <option value="2">Germany</option>
              <option value="3">France</option>
              <option value="4">Armenia</option>
              <option value="5">USA</option>
            </select>
          </div>
        </div>
                  <p>What included<span class="required">*</span></p>
                                    <button  v-on:click="addIncludes()"  href="/">Add </button>

   
        <div v-for="index in included" :key="index"  class="item">
          <input type="text" :name="index" :placeholder="index " required/>
        </div>
           <p>What Excluded<span class="required">*</span></p>
                                    <button  v-on:click="addExcludes()"  href="/">Add </button>

   
        <div v-for="index in excluded" :key="index"  class="item">
          <input type="text" :name="index" :placeholder="index " v:model="include[index]"  required/>
        </div>

       

        <div  class="btn-block">
          <button type="submit" href="/">Add Tour</button>
        </div>
      </form>
    </div>
	</div>
	

    </template>

<script>
export default {

  data () {
    return {
      included:0,
      excluded:0,
      include:[],
      exclude:[],

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
      
    },
    addIncludes:function(){
      this.included +=1;
      console.log(this.include[0]);
    },
    addExcludes:function(){
      this.excluded +=1;
    },
  }
}

</script>
<style scoped>
   
      body, div, form, input, select, p { 
      padding: 0;
      margin: 0;
      outline: none;
      font-size: 14px;
      color: #666;
      line-height: 22px;
      }
      h1 {
      position: absolute;
      margin: 0;
      font-size: 36px;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      color: rgb(238, 231, 231);
      z-index: 2;
      }
      span.required {
      color: red;
      }
      .testbox {
      display: flex;
      justify-content: center;
      align-items: center;
      height: inherit;
      padding: 20px;
      }
      form {
      width: 100%;
      padding: 20px;
      border-radius: 6px;
      background: #fff;
      box-shadow: 0 0 30px 0 #095484; 
      }
      .banner {
      position: relative;
      height: 180px;
	  	  background-image: url(../assets/images/home/3.jpg);
      z-index: 1;
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      }
      .banner::after {
      content: "";
      background-color: rgba(0, 0, 0, 0.4); 
      position: absolute;
      width: 100%;
      height: 100%;
      }
      p.top-info {
      margin: 10px 0;
      }
      input, select {
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 3px;
      }
      input {
      width: calc(100% - 10px);
      padding: 5px;
      }
      select {
      width: 100%;
      padding: 7px 0;
      background: transparent;
      }
      .item:hover p, .question:hover p, .question label:hover, input:hover::placeholder {
      color: #095484;
      }
      .item input:hover, .item select:hover {
      border: 1px solid transparent;
      box-shadow: 0 0 5px 0 #095484;
      color: #095484;
      }
      .item {
      position: relative;
      margin: 10px 0;
      }
      .question input {
      width: auto;
      margin: 0;
      border-radius: 50%;
      }
      .question input, .question span {
      vertical-align: middle;
      }
      .question label {
      display: inline-block;
      margin: 5px 20px 15px 0;
      }
      .btn-block {
      margin-top: 10px;
      text-align: center;
      }
      button {
      width: 150px;
      padding: 10px;
      border: none;
      border-radius: 5px; 
      background: #095484;
      font-size: 16px;
      color: #fff;
      cursor: pointer;
      }
      button:hover {
      background: #0666a3;
      }
      @media (min-width: 568px) {
      .name-item, .city-item {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      }
      .name-item input, .city-item input {
      width: calc(50% - 20px);
      }
      .city-item select {
      width: calc(50% - 8px);
      }
      }
    
</style>
