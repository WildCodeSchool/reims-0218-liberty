<template>
  <v-list id="listActivities">
    <draggable v-model="listActivities">
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
    ]
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
