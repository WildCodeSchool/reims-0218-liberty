<template>
  <div id="card">
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
        <div id="cover" :style="{'background-image': 'url(' + this.cover + ')'}"></div>
      </div>
    </v-flex>
      <v-icon id="inputIcon">label</v-icon>
      <v-text-field class="textfield" placeholder="Associez ce message à un ou plusieurs mots-clés"></v-text-field>
      <span id="actionButton">
        <v-icon class="icon">check_box_marked_outline</v-icon>
        <v-icon class="icon">image_plus</v-icon>
        <v-icon class="icon">cast_connected</v-icon>
        <v-icon class="icon">mouse</v-icon> <!-- pencil -->
        <v-icon class="icon">mouse</v-icon> <!-- trash -->
      </span>
    </v-layout>
  </div>
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
  width: 40%;
  display: inline-grid;
  min-width: 300px;
  min-height: 500px;
  border-radius: 5%;
  border: 2px solid purple;
  padding: 0;
  margin: 24px 5%;
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

.input-group__details:after,
.input-group__details:before {
  display: none;
}

#cover {
  width: 100%;
  height: 240px;
  padding: 0;
  margin: auto;
  background-image: url();
  background-position: center;
  background-size: cover;
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
  height: 50px;
  padding: 0 2%;
  text-align: center;
}

#actionButton .icon {
  width: 17%;
  margin: 0 1%;
}

.textfield {
  margin-left: 12px;
  height: 36px;
}

#inputIcon {
  margin-left: 12px;
  height: 24px;
}

</style>
