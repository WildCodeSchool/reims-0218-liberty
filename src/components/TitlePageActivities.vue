<template>
  <v-container fluid grid-list-md>
    <h2>
      <v-icon class="outlined_flag">outlined_flag</v-icon>
      <span class="group pa-2 page-title">
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
.outlined_flag{
  /* color: rgba(0, 0, 0, 0.5) */
  color: red;
}

</style>

