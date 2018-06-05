<template>
  <v-layout>
      <tous />
      <messages-diffuses />
      <messages-bloques />
      <v-spacer />
    <div class="hidden-sm-and-down">
      <filter-bouton />
    </div>
  </v-layout>
</template>

<script>
import FilterBouton from './FilterButton.vue'
import MessagesBloques from './MessagesBloques.vue'
import MessagesDiffuses from './MessagesDiffuses.vue'
import Tous from './Tous.vue'

export default {
  name: 'FieldKeywords',
  components: {
    FilterBouton,
    MessagesBloques,
    MessagesDiffuses,
    Tous
  },
  data: () => ({
    column: null,
    row: null
  })
}
</script>
