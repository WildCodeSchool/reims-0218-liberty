<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-list id="optionsPublic">
        <v-list-tile>
            Style d'affichage à l'écran
          <v-radio-group v-model="row" row>
            <v-radio label="bandeau" value="radio-1" ></v-radio>
            <v-radio label="pleine page" value="radio-2"></v-radio>
          </v-radio-group>
        </v-list-tile>
        <v-list-tile class="label-hidden">
          Temps d'affichage du message :
          <v-text-field
            label="secondes"
            placeholder="10"
            value="10"
            suffix="secondes"
            box
          />
        </v-list-tile>
        <v-list-tile class="label-hidden">
          Personnalisez la box du message :
        </v-list-tile>
        <v-spacer></v-spacer>

          <v-list-tile-content>
          <v-text-field
              id="reaction-input"
              name="personnalisation"
              label="Réagissez en direct !"
              placeholder="Réagissez en direct !"
              textarea
          />
        </v-list-tile-content>


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
}

#reaction-input {
  height: 20px;
}

.label-hidden label {
  visibility: hidden;
}
</style>
