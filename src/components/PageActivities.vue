<template>
<v-app>
  <v-layout row>
    <word-drag-and-drop />
  </v-layout>
  <v-layout row>
    <list-label-activities />
  </v-layout>
  <v-layout row>
    <v-flex xs6>
      <activities-form />
    </v-flex>
    <v-flex xs6>
      <public-reaction />
    </v-flex>
  </v-layout>
  <v-layout>
    <short-key />
  </v-layout>
</v-app>
</template>
<script>
import WordDragAndDrop from "./WordDragAndDrop.vue";
import ListLabelActivities from "./ListLabelActivities.vue";
import ActivitiesForm from "./ActivitiesForm.vue";
import ShortKey from "./ShortKey.vue";
import PublicReaction from "./PublicReaction.vue";

export default {
  name: "PageModeration",
  components: {
    WordDragAndDrop,
    ListLabelActivities,
    ActivitiesForm,
    ShortKey,
    PublicReaction
  }
}
</script>
