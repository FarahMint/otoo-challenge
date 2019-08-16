
<template>

    <div>
        <feed-item 
         v-for="(item , index) in feeds"
         :feed="item"
        :index="index"
        :key="item.id"/>         
    </div>
</template>  

<script>
/** import component  */
import FeedItem from "./FeedItem";
export default {
    name:"FeedsList",
    props:["feeds"],
    components:{ "feed-item": FeedItem
    }// components
}
</script>


<style >

 
h1{
  color:#fff;
}
 .feed-list{
  list-style: none;
  margin:10px 5%;
  font-size: 1.7rem;
  color:#fff;

   width: 90vw;
  margin: 0 auto;
  max-width: 1200px;
  display: grid;
  /*parent div for all products*/
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 1.5rem;
  grid-row-gap: 2rem;

 }
</style>