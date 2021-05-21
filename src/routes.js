import guidesForTour from './components/guidesForTour.vue';
import tourDetail from './components/tourDetail.vue';
import history from './components/history.vue';




export default[
    {path:'/',component:guidesForTour},
    {path:'/guidesForTour',component:guidesForTour},
    {path:'/detail',component:tourDetail},
    {path:'/history',component:history},


]