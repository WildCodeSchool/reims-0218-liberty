<template>
  <v-btn outline color="grey" class="rounded">
    <v-icon class="ml-0 pr-2">label</v-icon>
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
@import url("https://fonts.googleapis.com/css?family=Material+Icons");

.rounded {
  border-radius: 5px;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: .2rem;
}
</style>
