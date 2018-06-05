<template>
  <v-container fluid class="containerTitlePageActivities pb-2">
    <h2>
      <v-icon>outlined_flag</v-icon>
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

.page-title .icon{
  color: rgba(0,0,0,0.8);
}

.containerTitlePageActivities{
  padding: 0px;
}
</style>

