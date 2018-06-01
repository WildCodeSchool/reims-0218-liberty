<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-list id="optionsPublic">
        <ul>
          <v-list-tile>
            <li>
              Style d'affichage à l'écran :
            </li>
            <v-radio-group v-model="row" row>
              <v-radio label="bandeau" value="radio-1" ></v-radio>
              <v-radio label="pleine page" value="radio-2"></v-radio>
            </v-radio-group>
          </v-list-tile>
          <v-list-tile class="time-tile">
            <li>
              Temps d'affichage du message :
            </li>
            <v-text-field
              label="secondes"
              placeholder="10"
              value="10"
              box
              class="time-input"
            />
          </v-list-tile>
          <v-list-tile>
            <li>
              Personnalisez la box du message :
            </li>
          </v-list-tile>
            <v-list-tile-content class="reaction-tile">
            <v-text-field
              id="reaction-input"
              name="personnalisation"
              label="Réagissez en direct !"
              class="reaction-text-field"
            />
          </v-list-tile-content>
        </ul>
      </v-list>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'PublicReaction',
  data: () => ({
    column: null,
    row: null
  })
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Material+Icons');
#optionsPublic {
  text-align: left;
  background-color: rgb(255, 255, 255,0);
  color: rgba(0, 0, 0, 0.54);
}

.time-input {
  margin: 0 0.5em;
  position: absolute;
width: 40px;

}

.time-input .input-group__input {
  border: 1px solid rgba(0,0,0,0.5);
  margin-left: 10px;
  height: 22.9px;

}

.time-input label {
  position: relative;
  left: 80px;
}

.reaction-tile > .reaction-text-field {
  background-color: whitesmoke;
  color: rgba(0, 0, 0, 0.54);
  width: 24em;
}

.input-group__details {
  display: none;
}

.reaction-tile .input-group {
  padding-top: 35px;
}

.reaction-text-field label {
    position: absolute;
    top: 18px;
    left: 10px;
}

</style>
