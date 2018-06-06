<template>
  <v-container fluid class="containerWordDragAndDrop pt-2 pb-1">
    <span v-for="(activity, index) in activities" :key="index">
    <v-chip outline color="grey" class="drag-activity-chip">
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

.drag-activity-chip {
  width: fit-content;
  padding: 1px 0.5px;
  margin-right: 8px;
}

.drag-and-drop-indication {
  font-size: 0.8em;
  color: rgba(0,0,0,0.54);
  margin: 0;
}
.containerWordDragAndDrop{
  padding: 0px
}
</style>
