<template>
  <div>
    <v-toolbar>
      <v-chip class="blueChip">
        {{activity.index}}
      </v-chip>
      <v-chip class="blueChip">
        {{activity.title}}
      </v-chip>
      <!-- <v-toolbar-items > -->
    <div>
      <v-switch color="cyan" hide-details class="ml-2"
        :label="`Switch 1: ${switch1.toString()}`"
        v-model="switch1"
      ></v-switch>
    </div>
      <v-icon color="cyan" class="ml-2">cast</v-icon>
      <!-- le vrai: cast-connected -->
      <!-- </v-toolbar-items> -->
    </v-toolbar>
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
  data: function() {
    return {
      chipColor: '#102C60',
      checkbox: true,
      radioGroup: 1,
      switch1: true
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
  display: none;
}
</style>
