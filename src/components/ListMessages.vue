<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex v-for="message in messages" :key="`${message.index}`" xs6>
          <message
            :key="message.index"
            v-bind:author=message.author
            v-bind:arobase=message.arobase
            v-bind:date=message.date
            v-bind:avatar=message.avatar
            v-bind:message=message.message
            v-bind:cover=message.cover
          ></message>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Message from './Message.vue'

export default {
  name: "ListMessages",
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
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Material+Icons");
</style>
