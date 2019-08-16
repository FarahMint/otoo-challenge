<template>
  <div class="row ">
      <form action="">
          <div class="input-field">
              <label for="search"></label>
                <input 
                id="Searchfeeds" 
                placeholder="Start typing..."
                name="search" 
                type="text"
                class="form-control" 
                aria-label="Search Feed" 
                v-model="searchItem"
                />
          </div>
      </form> 
  </div><!-- search row -->
</template>

<script>
export default {

  name: 'SearchForm',
  data(){
      return {
          searchItem:""
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



</style>