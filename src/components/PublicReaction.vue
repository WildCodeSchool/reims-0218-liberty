<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <ul id="optionsPublic">
          <li>
              Style d'affichage à l'écran
            <v-radio-group v-model="row" row>
              <v-radio label="bandeau" value="radio-1" ></v-radio>
              <v-radio label="pleine page" value="radio-2"></v-radio>
            </v-radio-group>
          </li>
          <li class="label-hidden">
            Temps d'affichage du message :
            <v-text-field
              label="secondes"
              placeholder="10"
              value="10"
              suffix="secondes"
              box
            />
          </li>
          <li class="label-hidden">
              <p>Personnalisez la box du message :</p>
              <v-text-field
                name="personnalisation"
                label="Réagissez en direct !"
                placeholder="Réagissez en direct !"
                textarea
            />
          </li>
      </ul>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "PublicReaction",
  data: function() {
    return {
      column: null,
      row: null
    };
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Material+Icons");
#optionsPublic {
  text-align: left;
  line-height: 2em;
}

.label-hidden label {
  visibility: hidden;
}
</style>
