<template>
  <v-app>
    <div>
      <v-switch color="cyan"
          :label="`Switch 1: ${switch1.toString()}`"
          v-model="switch1"
      ></v-switch>
      <v-icon class="cyanSwitch">cast</v-icon>
      <!-- le vrai: cast-connected -->
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'SwitchActivityOption',
  data: function() {
    return {
      switchColor: 'cyan',
      checkbox: true,
      radioGroup: 1,
      switch1: true
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Material+Icons');

.cyanSwitch {
  color: cyan;
}

.input-group.input-group--selection-controls.switch label {
  padding-left: 14px;

  /* display: none; */
}

div .input-group.input-group--selection-controls .switch {
  flex-wrap: nowrap;
}
</style>
