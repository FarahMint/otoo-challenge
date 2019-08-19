<template>
<header>
       <h1>FeedMuz</h1>

       <Toggle 
       :mode="mode"
       @toggle="$emit('toggle')"/> 
 
      <b-nav-item active><router-link to="/">
    <font-awesome-icon 
    class="home-icon"
    icon="home" 
    aria-hidden="true"
    ></font-awesome-icon> 
      </router-link></b-nav-item>
        
  
</header>
 
</template>

<script>
import Toggle from "./Toggle";

export default {
    props:["mode"],
    components:{
        Toggle
    }
}
</script>

<style scoped>
header{
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:0px 25px;
    height:60px;
    width:100vw;


    position:fixed;
    z-index: 100;
}
.dark header{
 background:#152028;
}

.light header{
 background:#313131;
}

.home-icon{
    color:#fff;
}

.light a.nav-link:hover .home-icon{
color:#ddd;
 
}
.dark a.nav-link:hover .home-icon{
 background:#101520;
 color: #ddd;
}

.home-icon{
   color:none;
   font-size:2rem;
    
}
</style>