import tourDetail from './components/tourDetail.vue';
import history from './components/history.vue';
import addAgents from  './components/addAgents.vue';
import Welcome from './view/welcome.vue';
import HomeContent from './view/homeContent.vue';
import SearchResult from './components/searchedResult.vue';

import addTour from './components/addTour.vue';
import book from './components/book.vue';
import empty from './components/emptyComp.vue';


export default[
    {path:'/book',component:book}
    ,
    {
        path:'/history',component:history
    },
    {
        path:'/addAgent',component:addAgents
    },
    {path:'/addTour',component:addTour},


    {
        path:"/",
        name:"welcome",
    component:Welcome,
    children:[
        {
            path:"",
            name:"homeContent",
        component:HomeContent,
        },
        {
            path:'search',
            name:"searchResult",
        component:SearchResult,
        }   
    ]
},
   
    
{
    path:'/:id',
    name:"Tour", 
    component:empty, 
    children:[
        {
            path:"",
            name:"detail",
        component:tourDetail,
        },
        {
            path:'book',
            name:"book",
        component:book,
        }   
    ]

}
]