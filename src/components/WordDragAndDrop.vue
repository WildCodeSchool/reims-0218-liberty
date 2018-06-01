<template>
  <v-container fluid grid-list-md>
    <span v-for="(activity, index) in activities" :key="index">
    <v-chip class="blueChip">
      {{ activity }}
    </v-chip>
    </span>
    <p class="drag-and-drop-indication">
      <!-- This is a SINGLE arrow down, we need a double one -->
      <v-icon>keyboard_arrow_down</v-icon> Glissez l'activité à ajouter ci-dessous
    </p>
  </v-container>
</template>

<script>
export default {
  name: 'WordDragAndDrop',
  data: () => ({
    activities: ['Nuage de mots clés', 'Sondage', 'Quiz / QCM', 'Réaction du public', 'Pixel']
  })
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Material+Icons');

.blueChip {
  color: rgb(90, 90, 90);
  border: 1px solid rgb(145, 145, 145);
  font-weight: 800;
  width: fit-content;
}

.drag-and-drop-indication {
  font-size: 0.8em;
}
</style>
