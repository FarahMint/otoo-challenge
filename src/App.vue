<template>

<b-container fluid :class="mode">
 
  <b-row>
    <b-col cols="12">
       
           <Header :mode='mode' @toggle="toggle"/>
    </b-col>
  </b-row>


  <b-row>
    <b-col cols="12" class="content">
      <transition name="view">
       <router-view  :mode='mode'/>
         </transition>
    </b-col>
  </b-row>
  <Footer/>
</b-container>
</template>

<script>

/** import component */
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: 'app',
  components: {
    Header,
    Footer
  },
  data(){
    return {
      mode:"dark"
    }
  },
  methods:{
    toggle: function(){
      if (this.mode ==="dark"){
        this.mode ="light";
      }else{
       this.mode ="dark"; 
      }
    }
  }
  
}
</script>

<style>

/* remove padding for nav  */
.container-fluid {
  padding-left:0!important;
  transition: background .5s ease,
}

.content{
  margin-top:5rem;
}

 a.nav-link , a.router-link-active, a.router-link-exact-active{
   text-decoration:none;
 }


 .view-enter-active,  .view-leave-active{
   transition:opacity .5s ease-in-out, transform ease;
 }

 .view-enter-active{
    transition-delay:.5s;

 }

  .view-enter   {
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
 

.light{
   background:#f3f3f3;
   color:#152028;
 }
 .dark{
   background:#192734;
   color:#f3f3f3;
 }
</style>
