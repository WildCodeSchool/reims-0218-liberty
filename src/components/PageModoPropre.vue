<template>
  <v-app>
    <v-container>

      <!-- barre moderation -->
      <v-layout row justify-space-between class="pb-1">
        <h2 class="BarreModerationH2">
          <v-icon class="BarreModerationMouse">mouse</v-icon>
          {{ this.text }}Moderation
        </h2>
        <v-btn outline class="rounded BarreModerationPublier">
          <v-icon class="pr-2">mouse</v-icon> <!-- lead-pencil -->
          {{this.text}}publier un message
        </v-btn>
      </v-layout>
<hr>
      <!-- barre filtre -->
      <v-layout row class="pb-1 pt-1">
        <v-btn class="rounded BarreFiltreTous">
          {{this.text}}Tous
        </v-btn>
        <v-btn outline class="rounded BarreFiltreDiffuses">
          <v-icon class="pr-2">cast</v-icon>
          {{this.text}}Message diffusés
        </v-btn>
        <v-btn outline class="rounded BarreFiltreBloques">
          {{this.text}}Messages bloqués
        </v-btn>
        <v-spacer />
        <v-btn outline class="rounded BarreFiltreMotCle">
          <v-icon class="pr-2">label</v-icon>
          {{this.text}}Filtres mots clés
        </v-btn>
      </v-layout>
<hr class="HrGradiant">
      <!-- card message -->
      <v-layout row wrap justify-space-between class="mt-3">
        <v-flex v-for="message in messages" :key="`${message.index}`" xs6 class="pl-3 pr-3 pb-4">
            <message
              :key="message.index"
              :author=message.author
              :arobase=message.arobase
              :date=message.date
              :avatar=message.avatar
              :message=message.message
              :cover=message.cover
            ></message>
        </v-flex>
      </v-layout>

    </v-container>
  </v-app>
</template>

<script>
import Message from './Message.vue'

export default {
  name: 'PageModoPropre',
  components: {
    Message
  },
  data: function() {
    return {
      messages: [
        {
          index: 1,
          author: "Aurélie Bayre",
          arobase: "AmourSucré",
          date: "23/05/2018 - 17h54",
          avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Portrait_painting_of_Fran%C3%A7oise_de_Rochechouart_%28Madame_de_Montespan%29_by_an_unknown_artist_%28at_the_Mus%C3%A9e_national_du_Ch%C3%A2teau_de_Versailles%29.jpg/260px-Portrait_painting_of_Fran%C3%A7oise_de_Rochechouart_%28Madame_de_Montespan%29_by_an_unknown_artist_%28at_the_Mus%C3%A9e_national_du_Ch%C3%A2teau_de_Versailles%29.jpg",
          message: "J'ai \"Vue(JS)\" la guerre, la victoire, était au bout de leurs fusils !",
          cover: "https://vignette.wikia.nocookie.net/souleater/images/3/3a/Maka.jpg/revision/latest?cb=20130423083710&path-prefix=fr",
        },
        {
          index: 2,
          author: "Florian Hourlier",
          arobase: "FlorianHourlier",
          date: "25/05/2018 - 11h27",
          avatar: "https://forums.dctp.ws/download/file.php?avatar=13904_1487801514.jpg",
          message: "Tu dis que la vie qu'on t'a donné est faite pour ça, tant de choses grâce au son tu connaitras. Ton coeur est un saphir de pick-up, on a trouvé des décibels dans ton check-up ! Et tu chantes chantes chantes ce refrain qui te plait ! Et tu tapes tapes tapes, c'est ta façon d'aimer ! Ce rythme qui t'entraine jusqu'au bout de la nuit, réveille en toi le tourbillon d'un vent de folie !",
          cover: "http://www.topkool.com/fr/wp-content/uploads/2013/01/detective-conan-012.jpg",
        },
        {
          index: 3,
          author: "Maxence Millescamps",
          arobase: "TrucRandomJeSuisPasInspiré",
          date: "27/05/2018 - 13h39",
          avatar: "https://res.cloudinary.com/teepublic/image/private/s--9w8wi2TW--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1503088418/production/designs/1834029_1.jpg",
          message: "Selon vous, je serais mieux avec les cheveux courts ?",
          cover: "https://vignette.wikia.nocookie.net/powerlisting/images/2/2c/L_Death_Note.jpg/revision/latest?cb=20170926102307",
        },
        {
          index: 4,
          author: "Thomas Culdaut",
          arobase: "DadTmt",
          date: "28/05/2018 - 03h17",
          avatar: "https://ih1.redbubble.net/image.436067462.0019/flat,800x800,075,f.u1.jpg",
          message: "Celui qui oublie de tester sa PR aura affaire à moi ! Gare à vous !",
          cover: "https://pre00.deviantart.net/8eb5/th/pre/f/2017/082/a/c/saitama__one_punch_man__vector_wallpaper_by_max028-db39ewx.png",
        }
      ]
    };
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons');
@import url('https://fonts.googleapis.com/css?family=Montserrat');

.BarreModerationH2{
  font-weight: lighter;
  color: #434564;
  margin: auto 0;
}
.theme--light .BarreModerationMouse{
  color: black;
}

.theme--light .BarreModerationPublier,  .theme--light .BarreFiltreMotCle{
  color: #434555;
  border-color: grey;
}

.theme--light .BarreFiltreDiffuses, .theme--light  .BarreFiltreBloques{
  color: grey;
  border-color: grey;
}

.BarreFiltreTous > .btn__content{
  background: linear-gradient(45deg, #542B8F, #2ECCD7 96%);
  font-weight: 800;
  letter-spacing: 0.1em;
  color: white;
}

.HrGradiant{
    background-image: linear-gradient(90deg, #542B8F, #2ECCD7 60%);
    border: 0;
    height: 2px;
}
.btn{
  text-transform: initial;
  border-radius: 7px;
}
</style>
