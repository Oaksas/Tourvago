<template>

    <div>
      <app-header></app-header>
      <router-view></router-view>
      <app-footer></app-footer>
<!-- <app-header></app-header>
  <app-blog ></app-blog>
<searched-places></searched-places>
<top-dests></top-dests>
<discount></discount>
<special-offer></special-offer>
<reviews></reviews>
<special-discounts></special-discounts>
<news></news>
<subscribe></subscribe>
  <app-footer></app-footer> -->
    </div>
</template>

<script>
import Blog from './components/belowHeader.vue';
import Header from './components/Header.vue';
import tourDetail from './components/tourDetail.vue';
import searchedPlaces from './components/searchedPlaces.vue';
import topDests from './components/topDests.vue';
import specialOffer from './components/specialOffers.vue';
import reviews from  './components/reviews.vue';
import discount from './components/discount.vue';
import news from  './components/news.vue';
import subscribe from  './components/subscribe.vue';

import Footer from './components/Footer.vue';
import posts from './components/posts.vue';
import SpecialDiscounts from './components/specialDiscounts.vue';



export default {
  components:{

  'app-blog':Blog,
  'app-header':Header,
  'searchedPlaces':searchedPlaces,
  'topDests':topDests,
   'specialOffer':specialOffer,
 'reviews':reviews,
 'SpecialDiscounts':SpecialDiscounts,
 'subscribe':subscribe,
   'discount':discount,
   'news':news,
   'tourDetail':tourDetail,
   'history':history,
  'app-footer':Footer,
  'blog-post':posts,

},
  data () {
    return {
      title:"Vue Intro",

    }
  },
  methods:{
    updateTitle:function(updatedTitle){
      this.title=updatedTitle;

    }
  },
 
 
 
 
}
</script>

<style>

</style>
