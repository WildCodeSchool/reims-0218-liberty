<template>
  <v-app>
    <v-card height="300" id="create">
      <v-container>
      <v-speed-dial class="speed-dial speed-dial--right speed-dial--bottom speed-dial--direction-top"
      >
        <v-btn
          slot="activator"
          color="blue darken-2"
          dark
          fab
        >
          <v-icon>account_circle</v-icon>
          <v-icon>close</v-icon>
        </v-btn>
        <v-btn
          fab
          dark
          small
          color="green"
        >
          <v-icon>edit</v-icon>
        </v-btn>
        <v-btn
          fab
          dark
          small
          color="indigo"
        >
          <v-icon>add</v-icon>
        </v-btn>
        <v-btn
          fab
          dark
          small
          color="red"
        >
          <v-icon>delete</v-icon>
        </v-btn>
      </v-speed-dial>
      </v-container>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: "FloatingButton",
  data: () => ({
    direction: "top",
    right: true,
    bottom: true,
    transition: "scale-transition"
  })
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Material+Icons");

#create .speed-dial {
  position: absolute;
}

#create .btn--floating {
  position: relative;
}
</style>
