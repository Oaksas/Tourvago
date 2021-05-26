<template>

<div>
     <div class="testbox">
      <form action="/">

        <div class="banner">
          <h1>TourVago</h1>
        </div>
        <p class="top-info">This form is only be filled by the agent at Tourvago      <div class="item">
          <p>Name<span class="required">*</span></p>
          <div class="name-item">
            <input type="text" name="name" placeholder="Fullname" required/>
            <input type="text" name="name" placeholder="Acronym" required/>
          </div>
        </div>
  
        <div class="item">
          <p>Motto<span class="required">*</span></p>
          <input type="text" name="name"/>
        </div>
     
        <div class="item">
          <p>Website<span class="required">*</span></p>
          <input type="text" name="name" required/>
        </div>
     
        <div class="item">
          <p>Physical Address<span class="required">*</span></p>
          <input type="text" name="name" placeholder="Street address" required/>
          <div class="city-item">
            <input type="text" name="name" placeholder="City" required/>
            <input type="text" name="name" placeholder="Region" required/>
            <input type="text" name="name" placeholder="Postal / Zip code" required/>
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
        <div class="item">
          <p>Email<span class="required">*</span></p>
          <input type="text" name="name" required/>
        </div>
        <div class="item">
          <p>Phone</p>
          <input type="text" placeholder="(+251)" name="name"/>
        </div>
       

        <div class="btn-block">
          <button type="submit" href="/">Add Agent</button>
        </div>
      </form>
    </div>
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
      html, body {
      min-height: 100%;
      }
      body, div, form, input, select, p { 
      padding: 0;
      margin: 0;
      outline: none;
      font-family: Roboto, Arial, sans-serif;
      font-size: 14px;
      color: #666;
      line-height: 22px;
      }
      h1 {
      position: absolute;
      margin: 0;
      font-size: 36px;
      color: #fff;
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
	  	  background-image: url("https://images.unsplash.com/photo-1621532747807-4464b7bccbb3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80");

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
