<template>
  <b-col  sm="6" md="4" lg="2"> 
    
    <b-card
    v-on:click="goTodetail(feed.id)"
    v-bind:img-src="feed.image"
    v-bind:img-alt="feed.title"
    >
      <b-card-text>
        <!-- <h3>{{ feed.title |truncate(15)|tailing('...')}}</h3> -->
        <p>{{ feed.artist }}</p>
      </b-card-text>
    </b-card>
  </b-col> 
</template>

<script>
export default {
    name:"feed-item",
    props:["feed"],
     methods:{
       goTodetail(feedId) {
      this.$router.push({name:'Feed', params:{id:feedId}});
       }
    },//methods
    filters: {
    truncate: function(value, limit) {
      return value.substring(0, limit)
    },//truncate
    tailing: function(value, tail) {
      return value + tail;
    }//tailing
  }//filter  
}
</script>

<style>
 .card {
    background-color: transparent;
    border: none;
    border-radius: 0.25rem;
      cursor:pointer;
      text-align: center;
     
}
 .card-body {
 padding: 0;
}

 

.col-lg-3, .col-md-4 {
  margin-bottom: 1rem!important;
}

h3, p{
      font-size: 1rem;
    line-height: 20px;
    letter-spacing: .025em;
font-weight: 700;
    text-transform: lowercase;
}

</style>

 