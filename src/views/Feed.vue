<template>
 
<section class="playlist">
  <b-card no-body class="overflow-hidden">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img 
        :src="feedSelected.image"
        :alt="feedSelected.title"
        class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="Horizontal Card">
          <b-card-text>
          <h5 class="mt-0">{{ feedSelected.title }}</h5>
      <p> {{ feedSelected.artist}}</p>
      <p> {{ feedSelected.label }} - {{ feedSelected.dateRelease}}</p> 
      <b-button :href="feedSelected.href" variant="primary" target="_blank">seen on Apple Music
              <font-awesome-icon 
    class="arrow-up-icon"
    icon="arrow-up" 
    aria-hidden="true"
    ></font-awesome-icon>  

      </b-button>

   
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>

<div class="line"></div>
 </section>


 
</template>


<script>

import {getAllFeeds, formatAPI} from "../FeedService";
 

export default {
    name: "Feed",
     props:["mode"],
   
    data(){
        return{
        feedId:this.$route.params.id,
        feedSelected:"",
        title:"feed",
        }
    },//end data

    mounted(){ this.geetFeed();
    },//end mounted

    methods:{
        geetFeed: function(){
            getAllFeeds().then(result =>{
            let feeds=  result.feed.entry;

             feeds.filter(item=> {
            const {"im:id":id} = item.id.attributes;
                if(id === this.$route.params.id ){
                    this.feedSelected= formatAPI(item);
                }
            });//end filter
            })
            .catch( error => { console.log(error); });
        }, //end  geetFeed
    }//end methods
}
</script>


<style scoped>



.playlist{
    padding-top: 2rem;
    padding-right: 2rem;
    margin: 0 auto;
        height: 100vh;
    max-width: 1480px;
}

.card-body {
    text-align: initial;
}
.card-img {
    width: initial;
}


.arrow-up-icon{
  -ms-transform: rotate(50deg); /* IE 9 */
  -webkit-transform: rotate(50deg); /* Safari 3-8 */
  transform: rotate(50deg);
  font-size:1.25rem
}

.line{
    margin-top: 2rem;
    border-bottom: 1px solid #495057;
}

</style>