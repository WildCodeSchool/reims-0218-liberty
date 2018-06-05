<template>
  <v-btn class="rounded gradient">
    {{this.text}}
  </v-btn>
</template>

<script>
export default {
  name: 'Tous',
  data: () => ({
    text: 'Tous'
  })
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons');

.rounded {
  border-radius: 5px;
  font-size: 10px;
}
.gradient {
  background: linear-gradient(45deg, indigo, turquoise 96%);
  font-weight: 800;
  letter-spacing: 0.2rem;
}

.theme--light .rounded {
  color: white;
  width: fit-content;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.05em;
  background: linear-gradient(to right, #4959A3 0%, #3ACED9 100%);
}
</style>
