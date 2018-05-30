<template>
  <v-toolbar>
      <tous />
      <v-spacer />
    <div class="hidden-sm-and-down">
      <messages-diffuses />
      <messages-bloques />
      <filter-bouton />
    </div>
  </v-toolbar>
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
