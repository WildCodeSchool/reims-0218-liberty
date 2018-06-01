
<template>
  <div id="app">
 <p>Un jour on saura faire marcher la tag v-icon</p>
    <app-filtre-bouton></app-filtre-bouton>
    <router-view/>
    <message
      author="Florian Hourlier"
      arobase="florianH"
      date="Aujourd'hui"
      avatar="https://ih1.redbubble.net/image.477633978.8673/flat,800x800,075,f.u1.jpg"
      message="Quelques props sont passées, et on dirait que ça rend pas mal ! :p"
      cover="http://www.mytinyphone.com/uploads/users/lightanddarkness/491429.jpg"
      ></message>

      <message
      author="Maxence Millescamps"
      arobase="kebabDaboum"
      date="Hier"
      avatar="https://www.teachingcave.com/wp-content/uploads/2013/11/Pirate.png"
      message="J'ai faim ! J'ai faim ! J'ai faim ! J'ai faim ! J'ai faim ! J'ai faim ! J'ai faim ! J'ai faim ! J'ai faim ! J'ai faim ! J'ai faim ! J'ai faim ! J'ai faim ! J'ai faim ! J'ai faim ! J'ai faim ! J'ai faim ! J'ai faim ! J'ai faim ! J'ai encore faim !"
      cover="http://cdn2-www.gamerevolution.com/assets/uploads/2017/10/Super-Mario-Odyssey-Mushroom-Kingdom-Peach-Castle.jpg"
      ></message>

  </div>
</template>

<script>
import FiltreBouton from '../src/components/FilterButton.vue'
import Message from '../src/components/Message.vue'
export default {
  name: 'App',
  components: {
    FiltreBouton,
    Message
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Material+Icons');

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
