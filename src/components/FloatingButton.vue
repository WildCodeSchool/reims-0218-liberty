<template>
  <div>
    <v-card height="300" id="floating-button-card">
      <v-container>
      <v-speed-dial class="speed-dial speed-dial--right speed-dial--bottom speed-dial--direction-top"
      >
        <v-btn
          slot="activator"
          color="blue darken-2"
          dark
          fab
        >
          <v-icon>apps</v-icon>
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
  </div>
</template>

<script>
export default {
  name: 'FloatingButton',
  data: () => ({
    direction: 'top',
    right: true,
    bottom: true,
    transition: 'scale-transition'
  })
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Material+Icons');

#floating-button-card .speed-dial {
  position: absolute;
}

#floating-button-card .btn--floating {
  position: relative;
}

div #floating-button-card {
  background-color: rgba(0, 0, 0, 0);
  border-radius: 12px;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0),
    0px 0px 0px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0);
    z-index:99;
}

button i {
  margin-top: 15px;
}
</style>
