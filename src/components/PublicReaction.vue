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
              <input type="number" class="time-input" placeholder="10" min="5" max="20"/>
            </li>
            <p>secondes</p>
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
  max-width: 100%;
}

.time-input {
  margin: 0 0.5em;
  position: absolute;
  width: 40px;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type="number"] {
    -moz-appearance: textfield;
    width: 56px;
    padding: 0 0.5em;
    margin-left: 0.25em;
    border: 1px solid black;
    background-color: white;
}
</style>
