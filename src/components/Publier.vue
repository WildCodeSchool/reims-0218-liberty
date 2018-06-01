<template>
  <v-btn outline color="grey" class="rounded">
    <span class="group pa-2">
      <v-icon>mouse</v-icon> <!-- lead-pencil -->
      {{this.text}}
    </span>
  </v-btn>
</template>

<script>
export default {
  name: 'Publier',
  data: () => ({
    text: 'Publier un message'
  })
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Material+Icons');
.rounded {
  border-radius: 5px;
  font-family: 'Material Icons';
  width: fit-content;
}
</style>
