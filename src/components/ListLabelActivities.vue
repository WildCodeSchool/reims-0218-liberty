<template>
<v-container fluid class="containerWordDragAndDrop pt-2 pb-1">
    <draggable v-model="activities" :options="{group:{ name:'activities',  pull:'clone', put:false }}">
      <span v-for="(activity, index) in activities" :key="index">
      <v-chip outline color="grey" class="drag-activity-chip">
        {{ activity }}
      </v-chip>
      </span>
    </draggable>
    <p class="drag-and-drop-indication">
      <!-- This is a SINGLE arrow down, we need a double one -->
      <v-icon>keyboard_arrow_down</v-icon> Glissez l'activité à ajouter ci-dessous
    </p>

  <v-list id="listActivities">
    <draggable v-model="listActivities" :options="{group:'activities'}">
      <template v-for="(activity, index) in listActivities">
        <label-keywords-chosen
          :key="activity.index"
          v-bind:activity="activity"
          v-bind:index="index"
          />
            <!-- <hr v-show="listActivities.length != index + 1"
            :key="activity.index"/> -->

      </template>
    </draggable>
  </v-list>
 </v-container>
</template>

<script>

import draggable from 'vuedraggable'
import LabelKeywordsChosen from './LabelKeywordsChosen.vue'

export default {
  name: 'ListLabelActivities',
  components: {
    LabelKeywordsChosen,
    draggable
  },
  data: () => ({
    listActivities: [
      {
        index: 1,
        title: 'Nuage de mots clés'
      },
      {
        index: 2,
        title: 'Vote'
      },
      {
        index: 3,
        title: 'Réaction du public'
      }
    ],
    activities: ['Nuage de mots clés', 'Sondage', 'Quiz / QCM', 'Réaction du public', 'Pixel']
  })
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Material+Icons');

#listActivities {
  width: 100%;
  padding: 0px;
}
</style>
