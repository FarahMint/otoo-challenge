<template>
  <div id="app">
      <Navbar/>
      <div class="container">
        <router-view/>
      </div>

  </div>
</template>

<script>
import "../node_modules/materialize-css/dist/css/materialize.min.css"
import "../node_modules/materialize-css/dist/js/materialize.min.js"

/** import component */
import Navbar from "./components/Navbar";

export default {
  name: 'app',
  components: {
    Navbar
 
  }
}
</script>

<style>
#app {

}
</style>
