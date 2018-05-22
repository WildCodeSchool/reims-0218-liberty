import Vue from 'vue'
Vue.use(Vuetify)

<template>
  <v-app>
    <v-btn outline color="grey" class="rounded">
      {{this.text}}
      </v-btn>
      <span class="group pa-2">
        <v-icon class="icones">mouse</v-icon>
      </span>
      <span class="group pa-2 icones">
        <v-icon color="black">home</v-icon>
        <v-icon dark left>event</v-icon>
        <v-icon>info</v-icon>
      </span>
      <v-icon>cloud</v-icon>
    <i class="material-icons">label</i>
    <i class="material-icons">accessible</i>
  </v-app>
</template>

<script>
export default {
  name: 'FiltreBouton',
  data: function () {
    return {
      text: 'Filtre mots-clés'
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Material+Icons');
.rounded {
  border-radius: 5px;
  font-family: "Material Icons";
}

.icones {
  font-family: "Material Icons";
}

</style>
