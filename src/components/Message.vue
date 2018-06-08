<template>
  <!-- <div id="card">
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
      <span id="actionButton" class="message-controllers">
        <v-icon>check_box_marked_outline</v-icon>
        <v-icon>image_plus</v-icon>
        <v-icon>cast_connected</v-icon>
        <v-icon>mouse</v-icon> <!-- pencil -->
        <!--<v-icon>mouse</v-icon> <!-- trash -->
      <!--</span>
    </v-layout>
  </div> -->
  <v-card class="cardMessage">
    <div class="grey--text pa-2">{{ author }} - @{{ arobase }} - {{ date }}</div>

    <v-layout row wrap>
      <v-flex class="text-xs-center" xs2>
        <v-avatar class="pl-3" :size="64"><img :src="avatar"></v-avatar>
      </v-flex>

      <v-flex xs10>
        <v-card-text class="textMessage pl-3">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores libero cumque molestiae eos voluptates, voluptatum facere aspernatur, nobis numquam deserunt soluta sunt corporis? Quis accusantium recusandae placeat reprehenderit, repudiandae maiores.</p>
        </v-card-text>
      </v-flex>
    </v-layout>

    <v-card-media :src="cover" height="200px"></v-card-media>

    <v-text-field
      single-line
      placeholder="truc bidule"
      prepend-icon="label"
      class="textFieldMessage grey--text"
    ></v-text-field>

    <v-card-actions>
      <v-icon class="pl-3 MessageIconeMouse">mouse</v-icon>
      <v-spacer />
      <v-icon class="MessageIconeMouse">mouse</v-icon>
      <v-spacer />
      <v-icon class="MessageIconeFavorite">favorite</v-icon>
      <v-spacer />
      <v-icon class="MessageIconeBookmark">bookmark</v-icon>
      <v-spacer />
      <v-icon class="pr-3 MessageIconeShare">share</v-icon>
    </v-card-actions>

  </v-card>
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
.cardMessage{
  border: double 2px transparent;
  border-radius: 1em;
  background-image: linear-gradient(white, white), radial-gradient(circle at bottom left, #542B8F,#2ECCD7);
  background-origin: border-box;
  background-clip: content-box, border-box;
}

.textFieldMessage .icon{
  /* cheating a little here */
  padding-left: 24px;
  padding-right: 5px;
}

.textFieldMessage input {
  font-size: 0.8em;
}

.input-group__details{
  display: none;
}

.textMessage{
  padding: 0px;
}
.theme--light .MessageIconeMouse,.theme--light .MessageIconeFavorite{
  color: #2CCDBD
}
/* #card {
  display: inline-grid;
  min-width: 300px;
  min-height: 500px;
  border-radius: 5%;
  border: 3px solid transparent;
  border-image: linear-gradient(to right,
  #4959A3
  0%,
  #3ACED9
  100%);
  border-image-slice: 1;
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
  font-size: 14px;
}

.input-group {
  color: #9094a7;
  font-size: 8px;
  margin: 0;
  padding: 0;
}

.input-group--text-field input {
  font-size: 12px;
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
  font-size: 16px;
}

input {
  width: 100%;
}

#actionButton {
  width: 100%;
  height: 28px;
  padding: 0 2%;
  text-align: center;
}

#actionButton .icon, #inputIcon {
  color: rgb(0,0,0,0.2);
  width: 17%;
  margin: 0 1%;
}

.textfield {
  margin-left: 12px;
  height: 36px;
  font-size: 10px;
}

#inputIcon {
  margin-left: 12px;
  height: 24px;
} */

</style>
