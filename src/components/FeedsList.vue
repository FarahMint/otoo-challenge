
<template>
<section>
  <div class="list-container">   
    <h1 v-if="feeds.length > 0">Your essential playlists...</h1>
    <h1 v-else>Nothing found, please Search Again</h1>
    <b-row>
      <feed-item 
          v-for="(item , index) in feeds"
          :feed="item"
          :index="index"
          :key="item.id"/> 
    </b-row>
  </div>
  </section>
</template>  

<script>
/** import component  */
import FeedItem from "./FeedItem";
export default {
    name:"FeedsList",
       /** props from parent Home */
    props:{
        feeds :{
            type:Array,
            required:true,
        }
    },
    components:{ "feed-item": FeedItem },  
}
</script>

 
<style scoped lang="scss"> 
 .list-container{
  padding-top: 2rem;
  margin: 0 auto;
  max-width: 1200px;
  width: 90%;

  h1{
    font-size: 2rem;
    line-height: 44px;
    font-weight: 900;
    margin: 1.25rem 0;
  }
 }/* end list container*/
</style>