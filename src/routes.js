import guidesForTour from './components/guidesForTour.vue';
import tourDetail from './components/tourDetail.vue';
import history from './components/history.vue';
import addAgents from  './components/addAgents.vue';
import Welcome from './components/Welcome.vue';
import addTour from './components/addTour.vue';





export default[
    {path:'/',component:Welcome},
    {path:'/guidesForTour',component:guidesForTour},
    {path:'/detail',component:tourDetail},
    {path:'/history',component:history},
    {path:'/addAgent',component:addAgents},
    {path:'/addTour',component:addTour}



]