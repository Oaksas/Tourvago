import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.directive('rainbow',{

  bind(el,binding,vnode){

   el.style.color="#"+Math.random().toString().slice(2,8);
  }
})

Vue.directive('theme',
{
  bind(el,binding,vnode){
    if(binding.value == 'wide'){
      el.style.maxWidth="1000px";

    }
    else if(binding.value=='narrow'){
      el.style.maxWidth="500px";
    }
    if(binding.arg =='column') {
      el.style.background="grey"
    }
  }
})

//filters

Vue.filter('to-uppercase', function(value){
 return value.toUpperCase();

})
export const bus =new Vue();
new Vue({
  el: '#app',
  render: h => h(App)
})
