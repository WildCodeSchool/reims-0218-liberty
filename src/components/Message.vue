<template>
    <div id="card">
        <v-content>
            <v-layout row wrap>
                <v-flex xs12>
                    <p id="author">{{this.author}} - @{{this.arobase}} - {{this.date}}</p>
                </v-flex>
            </v-layout>
            <v-layout row id="bodyMessage">
                <v-flex hidden-xs-only>
                    <v-avatar :size="64"><img id="avatar" v-bind:src="this.avatar"></v-avatar>
                </v-flex>
                <v-flex xs12 md10>
                    <p id="message">{{this.message}}</p>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <img id="cover" v-bind:src="this.cover">
                <v-icon>label</v-icon> <v-text-field value="Associez ce message à un ou plusieurs mots-clés"></v-text-field>
                <span id="actionButton" class="mx-auto">
                    <v-icon>check_box_marked_outline</v-icon>
                    <v-icon>image_plus</v-icon>
                    <v-icon>cast_connected</v-icon>
                    <v-icon>mouse</v-icon> <!-- pencil -->
                    <v-icon>mouse</v-icon> <!-- trash -->
                </span>
            </v-layout>
        </v-content>
    </div>
</template>

<script>
export default {
  name: 'Message',
  props: ['author', 'arobase', 'date', 'avatar', 'message', 'cover'],
  data: function () {
    return {
      author: this.author,
      arobase: this.arobase,
      date: this.date,
      avatar: this.avatar,
      message: this.message,
      cover: this.cover
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Material+Icons');

#card {
    width: 50%;
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
    height: auto;
    padding: 0;
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
