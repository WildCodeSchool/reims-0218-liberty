<template>
  <v-btn outline color="grey" class="rounded publierMessage">
    <span class="group px-0 my-auto">
      <strong>
        <v-icon>mouse</v-icon> <!-- lead-pencil -->
        {{this.text}}
      </strong>
    </span>
  </v-btn>
</template>

<script>
export default {
  name: 'Publier',
  data: () => ({
    text: 'Publier un message'
  })
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons');
.publierMessage {
  border-radius: 5px;
  width: fit-content;
  font-family: "Roboto", sans-serif;
}

.icon {
  height: 26px;
}

.group {
  color: black;
}

.toolbar__content > :not(.btn):not(.menu):last-child:not(:only-child) {
  margin-right: 0;
}
</style>
