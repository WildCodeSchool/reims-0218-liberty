<template>
    <v-app>
      <div>
        <v-flex xs6 id="card">
          <v-layout row wrap>
            <v-flex xs12>
              <p id="author">{{ author }} - @{{ arobase }} - {{ date }}</p>
            </v-flex>
          </v-layout>
          <v-layout row id="bodyMessage">
            <v-flex hidden-xs-only>
              <v-avatar :size="64"><img id="avatar" v-bind:src="avatar"></v-avatar>
            </v-flex>
            <v-flex xs12 md10>
              <p id="message">{{ message }}</p>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs12 justify-center>
            <div class="illustration text-xs-center">
              <img id="cover" v-bind:src="cover">
            </div>
          </v-flex>
            <v-icon>label</v-icon> <v-text-field value="Associez ce message à un ou plusieurs mots-clés"></v-text-field>
            <span id="actionButton" class="mx-auto">
              <v-icon>check_box_marked_outline</v-icon>
              <v-icon>image_plus</v-icon>
              <v-icon>cast_connected</v-icon>
              <v-icon>mouse</v-icon> <!-- pencil -->
              <v-icon>mouse</v-icon> <!-- trash -->
            </span>
          </v-layout>
        </v-flex>
      </div>
    </v-app>
</template>

<script>
export default {
  name: 'Message',
  props: {
    author: {
      type: String,
      required: true
    },
    arobase: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    cover: {
      type: String,
      required: true
    }
  },
  data: () => ({
    addAuthor: this.author,
    addArobase: this.arobase,
    addDate: this.date,
    addAvatar: this.avatar,
    addMessage: this.message,
    addCover: this.cover
  })
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Material+Icons');

#card {
  width: 60%;
  min-width: 300px;
  border-radius: 5%;
  border: 2px solid purple;
  padding: 0;
  margin: 1em;
}

#avatar {
  border-radius: 50%;
  float: left;
  width: 64px;
  height: 64px;
}

.avatar {
  margin: 1em;
}

#author {
  text-align: left;
  color: #9094a7;
  margin: 0.5em 1em;
}

.input-group {
  color: #9094a7;
  font-size: 8px;
  margin: 0;
  padding: 0;
}

#cover {
  width: 100%;
  height: 240px;
  padding: 0;
  margin: auto;
}

#message {
  text-align: left;
  margin: 0.5em;
}

input {
  width: 100%;
}

#actionButton {
  width: 100%;
  text-align: center;
}

#actionButton .icon {
  width: 8%;
  margin: 5%;
}
</style>
