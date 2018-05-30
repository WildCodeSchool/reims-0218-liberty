<template>
  <v-btn class="rounded gradient">
    {{this.text}}
  </v-btn>
</template>

<script>
export default {
  name: 'Tous',
  data: function() {
    return {
      text: 'Tous'
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Material+Icons');

.rounded {
  border-radius: 5px;
  font-size: 10px;
}
.gradient {
  background: linear-gradient(45deg, indigo, turquoise 96%);
  color: white;
  font-weight: 800;
  letter-spacing: 0.2rem;
}
</style>
