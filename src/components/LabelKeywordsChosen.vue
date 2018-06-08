<template>
  <div>
    <v-list-tile class="pb-3 pt-3 listLabelKeywordsChosen">
      <v-icon class="pt-1">more_vert</v-icon>
      <v-chip :class="[switch1 ? 'blueChip':'outline-blue']">
        {{index + 1}}
      </v-chip>
      <v-chip :class="[switch1 ? 'blueChip':'outline-blue']">
        {{activity.title}}
      </v-chip>
    <div>
      <v-switch hide-details class="ml-2 custom-turquoise-switch"
        v-model="switch1"
      ></v-switch>
    </div>
      <v-icon hide-details class="ml-2" v-bind:class="[switch1 ? 'activeClass':'inactiveClass']">cast_connected</v-icon>
      <p v-if="!switch1" class="unfinished-description">Cette activité n'est pas complète</p>
    </v-list-tile>
    <hr v-if="activity.index === activitiesLength" class="hidden-hr"/>
  </div>
</template>

<script>
export default {
  name: 'LabelKeywordsChosen',
  props: {
    activity: {
      type: Object,
      required: true
    },
    activitiesLength: {
      type: Number,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  data: () => ({
    chipColor: '#102C60',
    checkbox: true,
    radioGroup: 1,
    switch1: true
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

.list__tile{
  padding: 0px;
}

.list__tile > .blueChip {
  background-color: rgb(5, 60, 122);
  border-color: rgb(5, 60, 122);
  border-width: 2px;
  color: white;
  font-weight: 800;
  width: fit-content;
}

.list__tile > .outline-blue {
  background-color: white;
  color: rgb(5, 60, 122);
}

input {
  width: fit-content;
}

.outline-blue {
    font-weight:bolder;
    border-color: rgb(5, 60, 122);
    border-width: 2px;
}

.input-group.input-group--selection-controls.switch label {
  padding-left: 14px;
}

.unfinished-description {
  color: orange;
  font-size: 13px;
  margin-left: 10px;
  margin-top: auto;
  margin-right: auto;
}

.activeClass {
  color:#00D7BF !important;
}

div > .custom-tuquoise-switch {
  /* Hell. */
  color:#00D7BF !important;
  background-color:#00D7BF !important;
}

.listLabelKeywordsChosen .inactiveClass {
  color: rgba(0,0,0,0.2);
}

.listLabelKeywordsChosen{
  padding: 0px;
}

.accent--text {
  color: #2ccdbd !important;
}

.chip__content {
  font-weight: bolder;
  padding: 0 1px;
}
</style>
