<template>
  <v-btn outline color="grey" class="rounded">
    {{this.text}}
  </v-btn>
</template>

<script>
export default {
  name: 'MessagesBloques',
  data: function() {
    return {
      text: 'Message bloqués'
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Material+Icons');

.rounded {
  border-radius: 5px;
  font-size: 10px;
}
</style>
