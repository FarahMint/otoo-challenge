<template>
<div>
    <div class="row">
        <div class="col s6">
            <search-feed/>
        </div>
    </div>
     <div class="row">
    <div class="col s6 m4 l2"
     v-for="(feed , index) in feeds"
        :feed="feed"
        :index="index"
        :key="feed.id"
        >
       <div class="card">
            <div class="card-image">
                <img  v-bind:src="feed.index.label.replace(/55x55bb.png/gi, '140x140bb.png')">
            </div>
         <div class="card-content">
             <h3>{{ feed.title |truncate(15)|tailing('...')}}</h3>
            <p>{{ feed.artist }}</p>
        </div>

         <div class="card-action">
          <a href="#">This is a link</a>
        </div>

       </div>
    </div>
  </div>

 </div>
</template>


<script>
/** import service */
import FeedService from "../FeedService";

/** import components */
import SearchForm from "../components/SearchForm";

 /** instantiate an instance of the Feedservice */
const feedService = new FeedService();

export default {
    name: "Home",
    components:{ 
        "search-feed": SearchForm
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

    filters: {
        truncate: function(value, limit) {
        return value.substring(0, limit)
        },//truncate
        tailing: function(value, tail) {
        return value + tail;
        }//tailing
    },
     methods:{
     searchFeedRecord: function(terms){
      this.searchTerms= terms;
    }
  },//methods
  computed:{
    searchFeeds: function(){
      return this.feeds.filter(item =>{
        // serie of test
        return(
          item.artist.toLowerCase().match( this.searchTerms.toLowerCase())||
          item.title.toLowerCase().match( this.searchTerms.toLowerCase())
        )
      })
    },//searchAppts
  }
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