<template>
 
<section class="playlist">
  <b-card no-body class="overflow-hidden">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img 
        :src="feedSelected.image || 'image-not-available.jpg'"
        :alt="feedSelected.title"
        class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body>
          <b-card-text>
            <h5 class="mt-0">{{ feedSelected.title }}</h5>
            <p> {{ feedSelected.artist}} - {{ feedSelected.label }}</p>
            <p> Released on {{ feedSelected.dateRelease}}</p> 
  
            <b-button v-b-tooltip title="checkout on iTunes" variant="outline-success"
              :href="feedSelected.href" target="_blank"><font-awesome-icon 
              icon="music" aria-hidden="true"> </font-awesome-icon> </b-button>    
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>

  <div class="line"></div>
 </section>
</template>


<script>
/** import helper function */
import {getAllFeeds, formatAPI} from "../FeedService";
 
 
/** tooltip doc from bootstrap
 * https://bootstrap-vue.js.org/docs/components/tooltip
 */
export default {
    name: "Feed",
      props:{
        mode:{
            type:String,
            required:true,
        }
    },
 
   
    data(){
        return{
          /** get id from url */
        feedId:this.$route.params.id,
        feedSelected:""
        }
    },//end data

    mounted(){ this.geetFeed();
    },//end mounted

    methods:{
        geetFeed: function(){
           /** fetch data from API -  func imported  from FeedService */
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
        }, //end  geet Feed
      
    }//end methods
}
</script>


<style scoped lang="scss">

.playlist{
    padding-top: 2rem;
    padding-right: 2rem;
    margin: 0 auto;
    height: 100vh;
    max-width: 1480px;

    .card-body {
      text-align: initial;
      font-weight: 100;
    }
    .card-img {
      width: initial;
    }

    .card h3, .card p {
     font-weight: 100; 
     }

    p {
    margin: .5rem;
      }

    .arrow-up-icon{
      -ms-transform: rotate(50deg); /* IE 9 */
      -webkit-transform: rotate(50deg); /* Safari 3-8 */
      transform: rotate(50deg);
      font-size:1.25rem
    }

    .line{
      margin-top: 2rem;
      border-bottom: 1px solid $darkGrey;
    }


    /* screen with less than 768px*/
    @media screen and (max-width: 768px) {
        .card-body{
          text-align: center;
          margin-top: 1rem;
      }
    }

  }/* end playlist */


</style>