<template>

  <!-- <v-container grid-list-md text-xs-center> -->
    <v-layout row wrap>
      <v-flex xs4>
        <!-- Weird behaviour, the label is enough when displaying this component in storybook,
        but it's invisible when I compose the whole page.
        My solution for now:
        adding a text after the switch
        + visibility hidden on the label just in case it reappears in other setups.
        -->
        <span class="no-label"><v-switch v-model="switch1" label="Activité permanente" value="1"></v-switch> Activité permanente</span>
        <span class="no-label"><v-switch v-model="switch2" label="Modération" value="2"></v-switch>Modération</span>
        <span class="no-label"><v-switch v-model="switch3" label="Autoriser les photos" value="3"></v-switch>Autoriser les photos</span>
        <span class="no-label"><v-switch v-model="switch4" label="Voir le pseudo" value="4"></v-switch>Voir le pseudo</span>
      </v-flex>
    </v-layout>
  <!-- </v-container> -->

</template>

<script>
import Tous from "./Tous.vue";
export default {
  name: "ActivitiesForm",
  data: function() {
    return {
      text: "ActivitiesForm",
      column: null,
      row: null,
      switch1: true,
      switch2: true,
      switch3: true,
      switch4: true
    };
  }
};
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Material+Icons');

.no-class label {
  display: none;
}

.rounded {
  border-radius: 5px;
  font-family: "Material Icons";
}
</style>
