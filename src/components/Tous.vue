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
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 10px;
  width: fit-content;
}

.gradient {
  background: linear-gradient(45deg, indigo, turquoise 96%);
  font-weight: 800;
  letter-spacing: 0.2rem;
}

</style>
