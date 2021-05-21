<template>
<div id="ninjas">
  <ul>
    <li v-for="(ninja,index) in ninjas" v-on:click="ninja.show=!ninja.show" :key="index">

 <h2 >{{ ninja.name }}</h2>
 <h3 v-show="ninja.show">{{ ninja.speciality }}</h3>


    </li>
</ul>
</div>

    </template>

<script>
export default {
  props:{
    ninjas:{
      type:Array,
      required:true

  }
  },
  data () {
    return {
       
    }
  }
}

</script>

<style scoped>
ul li{
    list-style-type:none;
   
}
ul{
  display:flex;
  flex-wrap:wrap;
 padding:10px;
 margin:10px;
 box-sizing:border-box;
}
li{
   flex-grow:1;
    flex-basis:300px;
    text-align:center;
     border:2px solid black; 

}

</style>
