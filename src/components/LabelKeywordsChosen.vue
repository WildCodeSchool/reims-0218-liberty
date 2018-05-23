<template>
  <v-app>
    <v-icon>
      mdi-lead-pencil
    </v-icon>
    <v-chip class="blueChip" d-inline-block>
      1
    </v-chip>
    <v-chip class="blueChip">
      Nuage de mots clés
    </v-chip>
     <v-switch color="cyan"
      :label="`Switch 1: ${switch1.toString()}`"
      v-model="switch1"
    ></v-switch>
    <v-icon color="cyan">cast</v-icon>
    <!-- le vrai: cast-connected -->

  </v-app>
</template>

<script>
export default {
  name: "LabelKeywordsChosen",
  data: function() {
    return {
      chipColor: "#102C60",
      checkbox: true,
      radioGroup: 1,
      switch1: true
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
