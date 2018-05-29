<template>
  <v-app>
    <div id="card">
      <v-content>
        <v-layout row wrap>
          <v-flex xs12>
            <p id="author">Super Nanny Officiel - @SuperNanny - 25 mai 2018</p>
          </v-flex>
        </v-layout>
        <v-layout row id="bodyMessage">
          <v-flex hidden-xs-only>
            <v-avatar :size="64"><img id="avatar" src="https://pbs.twimg.com/media/DSEsQf7W0AA5rNd.jpg"></v-avatar>
          </v-flex>
          <v-flex xs12 md10>
            <p id="message">Maxence est comme un enfant de 3 ans. Toujours en train de râler pour un oui ou pour un non. Si je devais vous donner un conseil, ça serait de le priver de kebabs pour le restant de ses jours ; et de le forcer à boire de l'huile de foie de morue ! C'est un ami qui m'a proposé cette idée ! :)</p>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <div class="illustration">
            <img id="cover" src="http://www.toutelatele.com/IMG/arton54183.jpg">
          </div>
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
  </v-app>
</template>

<script>
export default {
  name: 'Message',
  props: ['author', 'arobase', 'date', 'avatar', 'message', 'cover'],
  data: function () {
    return {
      addAuthor: this.author,
      addArobase: this.arobase,
      addDate: this.date,
      addAvatar: this.avatar,
      addMessage: this.message,
      addCover: this.cover
    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Material+Icons");

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
  max-width: 100%;
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
