<template>
<v-app id="page-activities">
  <v-container>
      <v-layout row>
      <title-page-activities />
    </v-layout>
    <hr />
    <v-layout row>
      <word-drag-and-drop />
    </v-layout>
    <hr class="bold-hr" />
    <v-layout row>
      <list-label-activities />
    </v-layout>
    <v-layout row id="activity-options">
      <v-flex xs12 sm4>
        <activities-form />
      </v-flex>
      <v-flex xs12 sm8>
        <public-reaction />
      </v-flex>
    </v-layout>
    <v-layout>
      <short-key />
    </v-layout>
    <hr />
    </v-container>
    <floating-button id="floating-component"/>
</v-app>
</template>

<script>
import FloatingButton from './FloatingButton.vue'
import TitlePageActivities from './TitlePageActivities.vue'
import WordDragAndDrop from './WordDragAndDrop.vue'
import ListLabelActivities from './ListLabelActivities.vue'
import ActivitiesForm from './ActivitiesForm.vue'
import ShortKey from './ShortKey.vue'
import PublicReaction from './PublicReaction.vue'

export default {
  name: 'PageModeration',
  components: {
    FloatingButton,
    TitlePageActivities,
    WordDragAndDrop,
    ListLabelActivities,
    ActivitiesForm,
    ShortKey,
    PublicReaction
  }
}
</script>

<style>
#activity-options {
  background-color: rgb(225, 233, 232);
  border-radius: 7px;
  border-style: solid;
  border-width: 0.5px;
  border-color: rgba(0, 0, 0, 0.2);
}

#page-activities {
  position: relative;
}

#floating-component {
  position: absolute;
  right: 0;
}

.bold-hr {
  border: none;
  height: 2px;
  color: rgba(0, 0, 0, 0.2);
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
