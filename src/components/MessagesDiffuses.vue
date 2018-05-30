<template>
  <v-btn outline color="grey" class="rounded">
    <v-icon class="ml-0 pr-2">cast</v-icon>
    {{this.text}}
  </v-btn>
</template>

<script>
export default {
  name: 'MessagesDiffuses',
  data: function() {
    return {
      text: 'Messages diffusés'
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
