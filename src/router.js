import Vue from "vue";
import Router from "vue-router";

/** import pages */
import Home from "./views/Home";
// import Search from "./views/Search";
import Feed from "./views/Feed";


/** setup route */
Vue.use(Router);


export default new Router({
    mode:"history",
    routes:[
        {path:"/", component:Home},
        // {path:"/search", component:Search },
        {path:"/feed/:id", component:Feed,  name: 'Feed'},
        
    ]
})