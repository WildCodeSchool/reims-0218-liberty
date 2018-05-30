<template>
  <v-app>
    <moderation />
    <field-keywords />
    <list-messages />
  </v-app>
</template>

<script>
import Moderation from "./Moderation.vue"
import FieldKeywords from "./FieldKeywords.vue"
import ListMessages from "./ListMessages.vue"

export default {
  name: "PageModeration",
  components: {
    Moderation,
    FieldKeywords,
    ListMessages
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Material+Icons");
</style>
