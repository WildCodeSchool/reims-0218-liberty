<template>
  <v-list id="activities">
    <template v-for="activity in listActivities">
      <!-- <v-btn :key="activity.index">{{activity.title}}</v-btn> -->
      <label-keywords-chosen :key="activity.index" v-bind:activity="activity">
      </label-keywords-chosen>
    </template>
  </v-list>
</template>

<script>
import LabelKeywordsChosen from "./LabelKeywordsChosen.vue";
import Tous from "./Tous.vue";
import LabelActivity from "./LabelActivity.vue";

export default {
  name: "ListLabelActivities",
  components: {
    LabelKeywordsChosen,
    Tous,
    LabelActivity
  },
  data: function() {
    return {
      listActivities: [
        {
          index: 1,
          title: "Nuage de mots clés"
        },
        {
          index: 2,
          title: "Vote"
        },
        {
          index: 3,
          title: "Réaction du public"
        }
      ]
    };
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Material+Icons");

#activities {
  width: 100%;
}
</style>
