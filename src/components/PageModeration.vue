<template>
  <v-app class="page-moderation">
    <v-layout row>
      <moderation />
    </v-layout>
    <v-layout row>
      <field-keywords />
    </v-layout>
    <v-layout row>
      <list-messages />
    </v-layout>
    <floating-button class="floating-button" />
  </v-app>
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
</style>
