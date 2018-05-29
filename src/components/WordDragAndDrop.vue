<template>
  <v-container fluid grid-list-md>
    <div>
    <v-chip class="blueChip">
      {{ this.activity }}
    </v-chip>
  </div>
  <p>
    <v-icon>label</v-icon> glisser l'activité à ajouter mettre ci dessous
  </p>
  </v-container>
</template>

<script>
export default {
  name: "WordDragAndDrop",
  data: function() {
    return {
      activity: "Nuage de mots clés"
    };
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Material+Icons");

.blueChip {
  color: rgb(90, 90, 90);
  border: 1px solid rgb(145, 145, 145);
  font-weight: 800;
  width: fit-content;
}
</style>
