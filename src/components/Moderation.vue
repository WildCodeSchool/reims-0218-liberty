<template>
    <v-layout justify-space-between>
      <h2>
        <v-icon>mouse</v-icon> <!-- lead-pencil -->
        {{ this.text }}
      </h2>
      <Publier />
    </v-layout>
</template>

<script>
import Publier from './Publier.vue'
export default {
  name: 'Moderation',
  components: {
    Publier
  },
  data: () => ({
    text: 'Modération'
  })
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Material+Icons');
.rounded {
  border-radius: 5px;
  font-family: 'Material Icons';
}

h2 {
  color: black;
  font-weight: lighter;
  letter-spacing: 0.05em;
  height: 32px;
  margin: auto 0 auto 0.5em;
}
</style>
