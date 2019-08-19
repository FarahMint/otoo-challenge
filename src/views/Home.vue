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
/** import service */
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
        this.loading=true;
          getAllFeeds()
        .then(result =>{
          let feeds=  result.feed.entry;
              //  format feed api to get easier access to data      
          let formatFeed = feeds.map(item=> formatAPI(item));//end map  
          // initialize feeds data
         this.feeds= formatFeed;

         this.loading=false;
          // this.categoryFeed()
      })
      .catch( error => { console.log(error); });
    }, 

  searchFeedRecord: function(terms){
            this.searchTerms= terms;
        },//end searchFeedRecord

  // categoryFeed: function(){      
  //   // set accept only unique value
  //   //check what kind of val we have for the lagel/genre
  //   this.label= [...new Set(this.feeds.map(item => item.label))];
  //   console.log(this.label);
  //   return this.label;
  //   }//end categoryFeed
  },//end methods
    

  computed:{
    searchFeeds: function(){
      return this.feeds.filter(item =>{
        // serie of test
        return(
          item.artist.toLowerCase().match( this.searchTerms.toLowerCase())||
          item.title.toLowerCase().match( this.searchTerms.toLowerCase())
        )
      })//end filter
    },//end searchFeeds
  }//end computed
}
</script>