
<template>
<div class="list-container">

   
  <h1>Your essential playlists...</h1>

  <b-row>
    
      <feed-item 
        v-for="(item , index) in feeds"
        :feed="item"
        :index="index"
        :key="item.id"/> 
  </b-row>
               
 
 </div>
</template>  

<script>
/** import component  */
import FeedItem from "./FeedItem";
export default {
    name:"FeedsList",
    props:["feeds"],
    components:{ "feed-item": FeedItem },  
}

</script>

 
<style scoped> 

 .list-container{
    padding-top: 2rem;
      padding-top: 2rem;
    padding-right: 2rem;
    margin: 0 auto;
    max-width: 1200px;
    width: 90%;
 }

 .list-container h1{
   font-size: 36px;
    line-height: 44px;
    letter-spacing: -.005em;
    font-weight: 900;
    text-transform: none;
    margin: 24px 0;
 }

</style>