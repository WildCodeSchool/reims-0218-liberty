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
              <span class="activitiesFormScreenDisplayLabel">Bandeau</span>
              <v-radio value="radio-2"></v-radio>
              <span class="activitiesFormScreenDisplayLabel">Pleine page</span>
            </v-radio-group>
          </v-list-tile-action>
        </v-list-tile>

        <v-list-tile>
          <li>
            Temps d'affichage du message :
          </li>
            <v-text-field solo class="definedScreenDisplaySeconds"></v-text-field><span>secondes</span>
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

.input-group.input-group--selection-controls {
  margin-left: 1em;
}

.input-group.input-group--solo .input-group__input {
  padding: 8px 0 8px 4px;
  vertical-align: middle;
}

.input-group input-group--selection-controls {
  margin-left: 1.5em;
}

.activitiesFormScreenDisplayLabel {
  margin-left: 0.5em;
}

.definedScreenDisplaySeconds {
  height: 16px;
  min-height: 16px;
  max-height: 16px;
  width: 72px;
  min-width: 72px;
  max-width: 72px;
  padding: 0 0 0 0.3em;
  margin: 0 0.75em;
  border: 1px solid black;
}

</style>
