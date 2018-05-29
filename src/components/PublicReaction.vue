<template>
  <v-app>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <ul id="optionsPublic">
            <li>
                Style d'affichage à l'écran <input type="radio" name="affichage" id="bandeau"> Bandeau <input type="radio" name="affichage" id="pleinepage"> Pleine page
            </li>
            <li>
                Temps d'affichage du message <input type="number" name="affichage" id="affichage" min="2" max="20" step="1"> secondes
            </li>
            <li>
                <p>Personnalisez la box du message:</p>
                <textarea name="box" id="box" placeholder="Réagissez en direct !"></textarea>
            </li>
        </ul>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "PublicReaction",
  data: function() {
    return {
      text: "Réaction du public",
      column: null,
      row: null,
      switch1: true
    };
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Material+Icons");
#optionsPublic {
  text-align: left;
  line-height: 4em;
}

#optionsPublic li input {
  margin-left: 4em;
}

#box,
#affichage {
  border: 1px solid black;
}

#box {
  width: 100%;
  height: 5em;
}

#affichage {
  height: 2em;
  width: 4em;
}
</style>
