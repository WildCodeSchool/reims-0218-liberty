import Vue from 'vue'
Vue.use(Vuetify)

<template>
  <v-btn outline color="grey" class="rounded">
    <span class="group pa-2">
      <v-icon>label</v-icon>
    </span>
    {{this.text}}
  </v-btn>
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
}
</style>
