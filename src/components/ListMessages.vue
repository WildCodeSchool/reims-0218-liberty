<template>
  <v-app>
    <template v-for="message in messages">
      <message
        :key="message.index"
        v-bind:author=message.author
        v-bind:arobase=message.arobase
        v-bind:date=message.date
        v-bind:avatar=message.avatar
        v-bind:message=message.message
        v-bind:cover=message.cover
      ></message>
    </template>
  </v-app>
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
          author: "Madame de Montespan",
          arobase: "MmeDeMontespan",
          date: "23 mai 2018 - 17h54",
          avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Portrait_painting_of_Fran%C3%A7oise_de_Rochechouart_%28Madame_de_Montespan%29_by_an_unknown_artist_%28at_the_Mus%C3%A9e_national_du_Ch%C3%A2teau_de_Versailles%29.jpg/260px-Portrait_painting_of_Fran%C3%A7oise_de_Rochechouart_%28Madame_de_Montespan%29_by_an_unknown_artist_%28at_the_Mus%C3%A9e_national_du_Ch%C3%A2teau_de_Versailles%29.jpg",
          message: "Tout va très bien madame la marquise !",
          cover: "https://images.alphacoders.com/454/thumb-1920-454519.jpg",
        },
        {
          index: 2,
          author: "Florian Hourlier",
          arobase: "FlorianHourlier",
          date: "25 mai 2018 - 11h27",
          avatar: "https://forums.dctp.ws/download/file.php?avatar=13904_1487801514.jpg",
          message: "Le REFLET du miroir lui cause des soucis. Il y voit un EMBALLAGE de M&M's par terre, entouré par un CACHALOT en peluche et un origami de PIKACHU tout fripé. VINGT-NEUF fois il avait tenté d'ECARTER le plus possible les jambes pour tester sa souplesse, et autant d'échecs. Son AVENIR allait avoir le même destin qu'une MOISISSURE. Complétement abandonné. Désemparé par son destin, Gérard est parti RONFLER dans son lit, peu importe la MECHANCETE que les autres ont à son égard. Il rêva de frères SIAMOIS qui étaient en train de HACKER Facebook. Serait-ce une PREMONITION ? Pas vraiment, ces frères sont STAGIAIRES là-bas...",
          cover: "http://www.topkool.com/fr/wp-content/uploads/2013/01/detective-conan-012.jpg",
        },
        {
          index: 3,
          author: "Pikachu",
          arobase: "PikaChupaChups",
          date: "27 mai 2018 - 13h39",
          avatar: "https://www.smashbros.com/wiiu-3ds/images/character/pikachu/main.png",
          message: "Pika pikassiette !",
          cover: "https://cdn.allwallpaper.in/wallpapers/2400x1350/650/pikachu-candies-2400x1350-wallpaper.jpg",
        },
        {
          index: 4,
          author: "Dhalsim",
          arobase: "YogaGaga",
          date: "28 mai 2018 - 03h17",
          avatar: "https://tahoefgc.files.wordpress.com/2013/04/dhalsim-s41.png",
          message: "Je suis gaga du yoga et de Lady Gaga !",
          cover: "https://images.alphacoders.com/454/thumb-1920-454519.jpg",
        }
      ]
    };
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Material+Icons");
</style>
