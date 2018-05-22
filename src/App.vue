
<template>
  <div id="app">
 <p>Un jour on saura faire marcher la tag v-icon</p>
    <app-filtre-bouton></app-filtre-bouton>
    <router-view/>

  </div>
</template>

<script>
import FiltreBouton from '../src/components/FilterButton.vue'
export default {
  name: 'App',
  components: {
    appFiltreBouton: FiltreBouton
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
