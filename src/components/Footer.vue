<template>
    <footer>
      <span>Muz<font-awesome-icon 
        icon="music" 
        aria-hidden="true"
        ></font-awesome-icon></span>
    </footer>
</template>

<style scoped lang="scss">

footer{
   position: absolute;
    bottom: 0;
    /* Set the fixed height of the footer here */
    height: 60px;
    line-height: 60px; /* Vertically center the text there */
    background:$mainBlack;
    text-align: center;
    width:100vw;
     flex-shrink: none;
     color:$mainWhite;
}
 
</style>