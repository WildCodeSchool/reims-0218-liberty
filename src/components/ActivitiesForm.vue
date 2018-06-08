<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs4 id="activity-options-left">
        <v-list v-for="(option, index) in options" :key="index">
          <v-list-tile>
          <v-switch color="cyan" hide-details class="ml-2"
            :label="option.label"
            v-model="option.switch"
          />
          </v-list-tile>
        </v-list>
      </v-flex>

      <v-flex xs8 id="activity-options-right">
        <v-list-tile>
          <v-list-tile-action>
            <v-radio-group v-model="row" row>
              <li>
                Style d'affichage à l'écran
              </li>
              <v-radio value="radio-1"></v-radio>
              <span>bandeau</span>
              <v-radio value="radio-2"></v-radio>
              <span>pleine page</span>
            </v-radio-group>
          </v-list-tile-action>
        </v-list-tile>

        <v-list-tile>
          <li>
            Temps d'affichage du message :
          </li>
            <v-text-field solo></v-text-field><span>secondes</span>
        </v-list-tile>

        <v-list-tile>
          <li>
            Personnalisez la box du message :
          </li>
        </v-list-tile>
        <v-text-field
          id="reaction-input"
          name="personnalisation"
          label="Réagissez en direct !"
          class="reaction-text-field"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
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
          switch:false
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

#activity-options-left .list{
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0);
}

.input-group.input-group--solo{
  height: 2em;
  max-width: 4em;
  min-height: 0px;
}

.input-group.input-group--solo .input-group__input{
  padding: 0px 16px 0px 16px;
}

</style>
