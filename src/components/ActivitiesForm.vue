<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs6 ml-6 id="activity-options-left">
        <v-list v-for="(option, index) in options" :key="index">
          <v-list-tile>
          <v-switch color="cyan" hide-details class="ml-2"
            :label="option.label"
            v-model="option.switch"
          />
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Tous from './Tous.vue'
export default {
  name: 'ActivitiesForm',
  data: () => ({
      text: 'ActivitiesForm',
      column: null,
      row: null,
      options: [
        {
          label:'Activité permanente',
          switch:false

        },
        {
          label:'Modération',
          switch:true
        },
        {
          label:'Autoriser les photos',
          switch:false
        },
        {
          label:'Voir le pseudo',
          switch:false
        }
      ]
    })
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Material+Icons');

#activity-options-left label {
  font-weight: bold;
}
</style>
