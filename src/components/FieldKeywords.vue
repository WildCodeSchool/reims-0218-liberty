

<template>
  <v-container fluid>
      <tous />
    <div d-inline-flex>
      <messages-diffuses />
      <messages-bloques />
      <filtre-bouton />
    </div>
 </v-container>
</template>

<script>
  import FiltreBouton from "./FilterButton.vue";
  import MessagesBloques from "./MessagesBloques.vue";
  import MessagesDiffuses from "./MessagesDiffuses.vue";
  import Tous from "./Tous.vue";

  export default {
    name: "FieldKeywords",
    components: {
      FiltreBouton,
      MessagesBloques,
      MessagesDiffuses,
      Tous
      },
    data: function() {
    return {
      column: null,
      row: null
    };
  }
  }
</script>

<style>

</style>


