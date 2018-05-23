<template>
  <v-btn outline color="grey" class="rounded">
    {{ texte }}
  </v-btn>
</template>

<script>
export default {
  name: "test",
  props: {
    texte: ""
  }
};
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Material+Icons");

  .rounded {
    border-radius: 5px;
    font-size: 10px;
  }
</style>
