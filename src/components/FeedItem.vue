<template>
       <div class="card">
            <div class="card-image">
                <img  v-bind:src="feed.index.label.replace(/55x55bb.png/gi, '140x140bb.png')">
            </div><!--.card-image-->
            <div class="card-content">
                <h3>{{ feed.title |truncate(15)|tailing('...')}}</h3>
                <p>{{ feed.artist }}</p>
            </div><!--.card-content-->

            <div class="card-action">
            <a href="#">This is a link</a>
            </div><!--.card-action-->
       </div><!--.card-->
</template>

<script>
export default {
    name:"feed-item",
    props:["feed"],
     methods:{
       requestDelete: function(){
           this.$parent.$emit("delete", this.feeds);
       }, // request delete
    },//methods
    filters: {
    truncate: function(value, limit) {
      return value.substring(0, limit)
    },//truncate
    tailing: function(value, tail) {
      return value + tail;
    }//tailing
  },//filter  
}
</script>

<style>
 


</style>

 