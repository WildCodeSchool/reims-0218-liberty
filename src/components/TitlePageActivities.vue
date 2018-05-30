<template>
  <v-container fluid grid-list-md>
    <h2>
      <span class="group pa-2 page-title">
        <v-icon>outlined_flag</v-icon> <!-- lead-pencil -->
        {{ this.text }}
      </span>
    </h2>
  </v-container>
</template>

<script>
import Publier from './Publier.vue'
export default {
  name: 'TitlePageActivities',
  data: () => ({
    text: 'Activités'
  })
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Material+Icons');

.page-title {
  color: grey;
  font-weight: normal;
}

</style>

