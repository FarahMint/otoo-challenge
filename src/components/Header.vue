<template>
    <header>
        <h1>FeedMuz</h1>
        <Toggle 
        :mode="mode"
        @toggle="$emit('toggle')"/> 
    
        <b-nav-item><router-link to="/">
        <font-awesome-icon 
        class="home-icon"
        icon="home" 
        aria-hidden="true"
        ></font-awesome-icon> 
        </router-link></b-nav-item>   
    </header>
</template>

<script>
/** import components */
import Toggle from "./Toggle";

export default {
    /** props from parent App to control toggle between dark and light color */
    props:["mode"],
    components:{
        Toggle
    }
}
</script>

<style  scoped lang="scss">
header{
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:0px 25px;
    height:60px;
    width:100vw;
    position:fixed;
    z-index: 100;

    .home-icon{
        color:$mainWhite;
        font-size:2rem; 
    }

}
/* screen with less than 768px*/
@media screen and (max-width: 768px) {
    header h1{
    font-size:1.5rem; 
    }
}


</style>