<template>
  <v-app>
    <v-chip class="blueChip" d-inline-block>
      1
    </v-chip>
    <v-chip class="blueChip">
      {{ this.activity }}
    </v-chip>
  </v-app>
</template>

<script>
  export default {
    name: "LabelActivity",
    data: function() {
      return {
        chipColor: "#102C60",
        checkbox: true,
        radioGroup: 1,
        switch1: true,
        activity: "Nuage de mots clés"
      }
    }
  };
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Material+Icons");

  .application--wrap .blueChip {
    background-color: rgb(15, 64, 92);
    color: white;
    font-weight:800;
    width: fit-content;
  }

  .application--wrap label {
    display: none;
  }
</style>
