<template>
  <div id="app">    
    <chart></chart>
  </div>
</template>

<script>
//Registering components Locally
import Chart from './components/Chart.vue'
//import PageContent from './components/PageContent.vue'
export default {
  components: {
    //Registering with a name
    'chart':Chart,
    //Registering without a name
    //PageContent
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
