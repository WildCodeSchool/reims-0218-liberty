<template>
  <v-container>
    <v-layout row class="moderation pb-1">
      <moderation />
    </v-layout>
    <v-layout row class="fieldKeywords pt-1 pb-1">
      <field-keywords />
    </v-layout>
    <v-layout row>
      <list-messages />
    </v-layout>
  </v-container>
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
.moderation{
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
}
.fieldKeywords{
  border-bottom: 2px solid slateblue;
}
</style>
