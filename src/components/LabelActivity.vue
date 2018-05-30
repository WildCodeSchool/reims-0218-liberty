<template>
  <span>
    <v-chip class="blueChip" d-inline-block>
      1
    </v-chip>
    <v-chip class="blueChip">
      {{ this.activity }}
    </v-chip>
  </span>
</template>

<script>
export default {
  name: 'LabelActivity',
  data: () => ({
    activity: 'Nuage de mots clés'
  })
}
</script>

<style>
.blueChip {
  background-color: rgb(15, 64, 92);
  color: white;
  font-weight: 800;
  width: fit-content;
}
</style>
