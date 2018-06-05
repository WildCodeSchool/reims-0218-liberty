<template>
  <v-container class="page-moderation">
    <v-layout row class="moderation pb-1">
      <moderation />
    </v-layout>
    <v-layout row class="fieldKeywords pt-1 pb-1">
      <field-keywords />
    </v-layout>
    <v-layout row>
      <list-messages />
    </v-layout>
    <floating-button class="floating-button" />
  </v-container>
</template>

<script>
import Moderation from "./Moderation.vue"
import FieldKeywords from "./FieldKeywords.vue"
import ListMessages from "./ListMessages.vue"
import FloatingButton from "./FloatingButton.vue"

export default {
  name: "PageModeration",
  components: {
    Moderation,
    FieldKeywords,
    ListMessages,
    FloatingButton
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Material+Icons");

.page-moderation {
  position: relative
}

.floating-button {
  position: absolute;
  right: 0;
}

.moderation{
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
}

.fieldKeywords{
  border-bottom: 2px solid slateblue;
}
</style>
