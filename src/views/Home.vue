<template>
<div>
    <div class="row">
        <div class="col s6">
            <search-feed
              @searchRecords="searchFeedRecord"/>
        </div>
      </div>
    <div class="row">
        <div class="col s6">
              <feeds-list 
        :feeds= "searchFeeds"/>
        </div>
      </div>
   
  
         
        

       
         
 </div>
</template>


<script>
/** import service */
import FeedService from "../FeedService";

/** import components */
import SearchForm from "../components/SearchForm";
import FeedsList  from "../components/FeedsList";

 /** instantiate an instance of the Feedservice */
const feedService = new FeedService();

export default {
    name: "Home",
    components:{ 
        "search-feed": SearchForm,
        "feeds-list": FeedsList,
    },// components
   
    data(){
        return{
            feeds:[],
             searchTerms:"",
        }
    },
    created(){
        feedService.getAllFeeds()
            .then( result =>{  
                /** destructure api fields  */       
                let formatAPI = result.feed.entry.map(item=>{
                const {"im:id":id} = item.id.attributes;
                const {"im:artist":{label:artist}} = item;
                const {label} = item.category.attributes;
                const {label: rights}= item.rights; 
                const {"im:name" :{label:title}}= item;         const {"im:price" :{label:price}}= item;       
                const {"im:image" : [index]} = item;    
                const {href}= item.link.attributes;             

                // return  new feed obj - with field we need
                return {id, label, artist, title, price, index,href, rights}
                });//end map

                // console.log(formatAPI);  
                this.feeds= formatAPI;
            })
            .catch(error => console.log(error));
    },//end created

    methods:{
        searchFeedRecord: function(terms){
            this.searchTerms= terms;
        }//end searchFeedRecord
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


<style>
.item-container {
    width:80%;
    margin:0 auto;
    display: flex;
    border-bottom: 1px solid #333;
}

.img-container {
  position: relative;
  overflow: hidden;
 
}
 
 .feed-item{
    margin: 12px 0 4px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    display: block;
 }

 
.card .card-content,
.card .card-action{
    padding:0 !important;
 
}
.card-content h3,
 .card-content p{
    font-size: .95rem !important;
    color: #000 !important;
    text-transform: lowercase !important;
}


</style>