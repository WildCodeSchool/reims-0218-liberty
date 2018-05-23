<template>
  <v-app>
    <v-btn outline color="grey" class="rounded">
      <span class="group pa-2">
        <v-icon>mouse</v-icon> <!-- lead-pencil -->
      </span>
      {{this.text}}
    </v-btn>
  </v-app>
</template>

<script>
export default {
  name: 'Publier',
  data: function () {
    return {
      text: 'Publier un message'
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Material+Icons');
.rounded {
  border-radius: 5px;
  font-family: "Material Icons";
}

</style>
