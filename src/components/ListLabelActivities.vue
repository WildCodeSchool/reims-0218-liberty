<template>
<v-container fluid class="containerWordDragAndDrop pt-2 pb-1">
  <draggable v-model="activities" :options="{group:{ name:'activities',  pull:'clone', put:false }}">
    <span v-for="(activity, index) in activities" :key="index">
    <v-chip outline color="grey" class="drag-activity-chip">
      {{ activity.title }}
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
        <hr class="bold-hr" :key="index" v-if="listActivities.length > index"/>
        <label-keywords-chosen
          :key="index"
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
        title: 'Nuage de mots clés'

      },
      {
        title: 'Vote'
      },
      {
        title: 'Réaction du public'
      }
    ],
    activities: [
      {
        title: 'Nuage de mots clés'
        },
      {
        title: 'Sondage'
        },
      {
        title: 'Quiz / QCM'
        },
      {
        title: 'Réaction du public'
        },
      {
        title: 'Pixel'
    }]
  })
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Material+Icons');

#listActivities {
  width: 100%;
  padding: 0px;
}
.containerWordDragAndDrop{
  padding: 0px;
}
</style>
