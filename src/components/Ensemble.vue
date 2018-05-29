<template>
  <v-app>
    <moderation />
    <field-keywords />
    <list-last-messages />
  </v-app>
</template>

<script>
import Moderation from "./Moderation.vue"
import FieldKeywords from "./FieldKeywords.vue"
import ListLastMessages from "./GroupMessages.vue"

export default {
  name: "EnsembleMessage",
  components: {
    Moderation,
    FieldKeywords,
    ListLastMessages
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Material+Icons");
</style>
