<template>
  <v-app>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs6>
          <v-switch v-model="switch1" label="1" value="1"></v-switch>
          <v-switch v-model="switch2" label="2" value="2"></v-switch>
          <v-switch v-model="switch3" label="3" value="3"></v-switch>
          <v-switch v-model="switch4" label="4" value="4"></v-switch>
        </v-flex>
        <v-flex xs6>
          <v-radio-group v-model="row" row>
            <v-radio label="Option 1" value="radio-1" ></v-radio>
            <v-radio label="Option 2" value="radio-2"></v-radio>
          </v-radio-group>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import Tous from "./Tous.vue";
export default {
  name: 'ActivitiesForm',
  data: function () {
    return {
      text: "ActivitiesForm",
      column: null,
      row: null,
      switch1: true,
      switch2: true,
      switch3: true,
      switch4: true
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
