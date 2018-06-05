<template>
  <v-list id="activities">
    <template v-for="activity in listActivities">
      <label-keywords-chosen
        :key="activity.index"
        v-bind:activity="activity"
        v:bind:listActivities.length="activitiesLength"/>
        <hr v-show="listActivities.length != activity.index" />
    </template>
  </v-list>
</template>

<script>
import LabelKeywordsChosen from './LabelKeywordsChosen.vue'

export default {
  name: 'ListLabelActivities',
  components: {
    LabelKeywordsChosen
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

#activities {
  width: 100%;
}
</style>
