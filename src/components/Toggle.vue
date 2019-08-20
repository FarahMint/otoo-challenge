<template>
    <div class="toggle-wrapper">
        <label  class="toggle">
            <input 
            type="checkbox" 
            :checked="(mode === 'dark') ? 'checked' :false"
            @change="$emit('toggle')"
            >
            <span class="toggler round"></span>
        
        </label>
    </div>
</template>

<script>


export default {
      /** props from parent App to control toggle between dark and light color */
    props:{
        mode:{
            type:String,
            required:true,
        }
    }
}
</script>

<style scoped lang="scss">

.toggle{
position:relative;
display:inline-block;
width:60px;
height:34px;

    .toggle input{
    opacity:0;
    width:0;
    height:0;
    background-color: transparent;
    }

    .toggler{
    position:absolute;
    cursor:pointer;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:$mainBlack;
    -webkit-transition: .4s;
    transition: .4s;
    }

    .toggler:before{
    position:absolute;
    content:"";
    height:26px;
    width:26px;
    left:4px;
    bottom:4px;
    background:$mainWhite;
    -webkit-transition: .4s;
    transition: .4s;
    }

    input:checked  + .toggler{
    background:$darkGreen;
    }

    input:focus  + .toggler{
    box-shadow: 0 0 2px $darkGreen;
    }

    input:checked  + .toggler:before{
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
    }


    .toggler.round{
     border-radius:36px;
    }

    .toggler.round:before{
    border-radius: 50%;
    }

}/*end toggle*/

</style>