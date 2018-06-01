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
          <v-list-tile class="label-hidden">
            <li>
              Temps d'affichage du message :
            </li>
            <v-text-field
              label="secondes"
              placeholder="10"
              value="10"
              box
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

.reaction-tile > .reaction-text-field {
  background-color: whitesmoke;
  width: 20em;
}

.input-group__details {
  display: none;
}
.input-group {
  padding-top: 35px;
}

.reaction-text-field label {
    position: absolute;
    top: 18px;
    left: 10px;
}

</style>
