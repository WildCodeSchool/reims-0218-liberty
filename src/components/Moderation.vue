<template>
    <v-layout justify-space-between>
      <h2>
        <v-icon class="mouse">mouse</v-icon> <!-- lead-pencil -->
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

.theme--light .mouse{
  color: black;
}

h2 {
  font-weight: lighter;
  letter-spacing: 0.05em;
  margin: auto 0;
}
</style>
