<template>
    <div>
      <Loader v-if="loading"/>
      
      <div v-else>
        <search-feed @searchRecords="searchFeedRecord" />
        <feeds-list  :feeds= "searchFeeds" />
      </div>
    </div>
</template>


<script>
/** import helper function */
import {getAllFeeds, formatAPI} from "../FeedService";

// /** import components */
import SearchForm from "../components/SearchForm";
import FeedsList  from "../components/FeedsList";
import Loader from "../components/Loader";


export default {
    name: "Home",
     props:["mode"],
    components:{ 
      "search-feed": SearchForm,
      "feeds-list": FeedsList,
      Loader,
    },// components
   
    data(){
        return{
            feeds:[],
            searchTerms:"",
            loading: false,      
        }
    },
    mounted(){
      this.geetFeeds();
    },//end mounted

    methods:{
      geetFeeds: function(){
        // 1 - display loader
        this.loading=true;
        /** 2 - fetch data from API -  func imported  from FeedService */
          getAllFeeds()
        /** 3 - get result */
        .then(result =>{
          let feeds=  result.feed.entry;
              //  format feed api to get easier access to data      
          let formatFeed = feeds.map(item=> formatAPI(item));//end map  
          // initialize feeds data
         this.feeds= formatFeed;
         this.loading=false;
      })
      .catch( error => { console.log(error); });
    }, 

  searchFeedRecord: function(terms){
    this.searchTerms= terms;
    },//end searchFeedRecord
  },//end methods
    

  computed:{
     /**
      * serie of test to get matching item
      * user can either seach by artist name or title
      * returned array bind to feeds props on feeds-list tag
      */
    searchFeeds: function(){
      return this.feeds.filter(item =>{
        return(
          item.artist.toLowerCase().match( this.searchTerms.toLowerCase())||
          item.title.toLowerCase().match( this.searchTerms.toLowerCase())
        )
      })//end filter
    },//end searchFeeds
  }//end computed
}
</script>