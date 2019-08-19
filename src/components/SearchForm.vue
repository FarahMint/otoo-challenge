<template>

<div class="form-container">
   <transition name="slide-fade">
  <b-form v-show="show">
    <label class="sr-only" for="Searchfeeds" >Name</label>
    <b-input
    type="text"
    id="Searchfeeds"
    class="mb-2 mr-sm-2 mb-sm-0"
    aria-label="Search Feed" 
    placeholder="Start typing..."
    v-model="searchItem"
    ></b-input>
  </b-form>
   </transition> 
    <font-awesome-icon 
    class="search-icon"
    icon="search" 
    aria-hidden="true"
     @click="show = !show"
    ></font-awesome-icon>   
</div>
   
</template>

<script>
export default {

  name: 'SearchForm',
  data(){
      return {
          searchItem:"",
             show: false,
      }//return
  },//data
  watch:{
      searchItem: function(){
          this.$emit('searchRecords', this.searchItem);
      }
  }

} // export
</script>


<style >


.form-container{
    margin: 2rem 0; 
    position:relative;
}

.search-icon{
      position: absolute;
      top: 2px;
    right: 20px;

    font-size:2rem;
    cursor: pointer;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .4s ease;
}
.slide-fade-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(100px);
  opacity: 0;
}

</style>