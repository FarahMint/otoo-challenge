<template>
  <div>
    <b-container fluid :class="mode">
      <b-row>
        <b-col cols="12">
          <Header :mode='mode' @toggle="toggle" />
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="12" class="content">
          <transition name="view">
          <router-view  :mode='mode'/>
            </transition>
        </b-col>
      </b-row>
    </b-container>
    <Footer/>
  </div>
</template>

<script>
/** import components */
import Header from "./components/Header";
import Footer from "./components/Footer";


export default {
  name: 'app',
  components: {
    Header,
    Footer,
  }, // components
  data(){
    return {
      mode:"dark",
   
    }
  }, // data

  methods:{
      /**  control mode - btw dark and light color */
    toggle: function(){
      if (this.mode ==="dark"){
        this.mode ="light";
      }else{
       this.mode ="dark"; 
      }
    },//toggle
   
  }//methods 
}// default 
</script>
 
<style lang="scss">

.container-fluid {
  padding-left:0!important;
  transition: background .5s ease; // mode transition btw dark and light color

  .content{ // some breathing space between nav and main content
  margin:5rem auto;

  /* ANIMATION*/
    .view-enter-active,  .view-leave-active{
      transition:opacity .5s ease-in-out, transform ease;
    }
    .view-enter-active{
      transition-delay:.5s;
    }
      .view-enter{
      opacity:0;
      transform:translateY(-100px);
      }
      .view-enter-to {
      opacity:1;
      transform:translateX(0px);
      }
      .view-leave-to{
      opacity:0;
      transform:translateY(0px);
      }
      .view-leave{
      opacity:1;
      transform:translateX(0px);
      }
     /* end ANIMATION*/  

  }/* end content */

}/* end container-fluid */


/* TOGGLE MODE BTW DARKER AND LIGHER COLOR*/
.light{
  background:$mainWhite;
  color: $blackPearl;
  transition: $transition;

  header{
    background:#313131;

    & h1{
    color:$darkGreen; 
    }
  }

  a.nav-link:hover .home-icon{
    color:$lightGrey;
  }
}/* end light */

 .dark{
  background-image: $gradient;
   color:$mainWhite;
   transition: $transition;

    header{
    background: $mainBlack;
    }

    a.nav-link:hover .home-icon{
    background : $lightBlack;
    color: $lightGrey;
    }
 }/**end dark*/

 /* TOGGLE MODE BTW DARKER AND LIGHER COLOR*/

</style>
