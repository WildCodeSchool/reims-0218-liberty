<template>
  <div>
    <v-list-tile>
      <v-icon>more_vert</v-icon>
      <v-chip class="blueChip">
        {{activity.index}}
      </v-chip>
      <v-chip class="blueChip">
        {{activity.title}}
      </v-chip>
    <div>
      <v-switch hide-details class="ml-2"
        :label="`Switch 1: ${switch1.toString()}`"
        v-model="switch1"
      ></v-switch>
    </div>
      <v-icon hide-details class="ml-2" v-bind:class="[switch1 ? 'activeClass':'inactiveClass']">cast_connected</v-icon>
      <p v-if="!switch1" class="unfinished-description">Cette activité n'est pas complète</p>
    </v-list-tile>
  </div>
</template>

<script>
export default {
  name: 'LabelKeywordsChosen',
  props: {
    activity: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    chipColor: '#102C60',
    checkbox: true,
    radioGroup: 1,
    switch1: false
  }),
  methods:{
    getClass(){
      return this.switch1
  }
}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Material+Icons');

.theme--light .chip,
.application .theme--light.chip .blueChip {
  background-color: rgb(15, 64, 92);
  color: white;
  font-weight: 800;
  width: fit-content;
}

input {
  width: fit-content;
}

.input-group.input-group--selection-controls.switch label {
  padding-left: 14px;
}

.unfinished-description {
  color: orange;
  font-size: 13px;
  font-weight: bolder;
  margin-left: 10px;
  margin-top: auto;
  margin-right: auto;
}

.activeClass {
  color:cyan !important;
}

.inactiveClass {
  color: rgba(0,0,0,0.2);
}
</style>
