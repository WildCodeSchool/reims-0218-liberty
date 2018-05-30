<template>
  <v-app>
    <div>
      <h2>
        <span class="group pa-2">
        <v-icon>mouse</v-icon> <!-- lead-pencil -->
        </span>{{ this.text }}
      </h2>
      <Publier />
    </div>
  </v-app>
</template>

<script>
import Publier from './Publier.vue'
export default {
  name: 'Moderation',
  components: {
    Publier
  },
  data: () => ({
    text: 'Moderation'
  })
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Material+Icons');
.rounded {
  border-radius: 5px;
  font-family: 'Material Icons';
}
</style>
