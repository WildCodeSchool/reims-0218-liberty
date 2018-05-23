import Vuetify from "vuetify";
import Vue from "vue";
Vue.use(Vuetify);
// stories/index.js
import { storiesOf } from "@storybook/vue";
// Components
import MyButton from "../components/Button.vue";
import FiltreBouton from "../components/FilterButton.vue";
import MessagesBloques from "../components/MessagesBloques.vue";
import MessagesDiffuses from "../components/MessagesDiffuses.vue";
import Tous from "../components/Tous.vue";
import Test from "../components/Test.vue";
import FieldKeywords from "../components/FieldKeywords.vue";
import LabelKeywordsChosen from "../components/LabelKeywordsChosen.vue";
// Stories: Book Component

storiesOf("Boutons", module)
  .add("de base", () => ({
    components: { MyButton },
    template: "<my-button></my-button>"
  }))
  .add("bouton qui filtre les mots-clés", () => ({
    components: { FiltreBouton },
    template: "<filtre-bouton />"
  }))
  .add("Messages bloqués", () => ({
    components: { MessagesBloques },
    template: "<messages-bloques />"
  }))
  .add("Messages diffusés", () => ({
    components: { MessagesDiffuses },
    template: "<messages-diffuses />"
  }))
  .add("Tous", () => ({
    components: { Tous },
    template: "<tous />"
  }))

  storiesOf("Champs de sélection", module)
  .add("Sélection de mots clés", () => ({
    components: { FieldKeywords },
    template: "<field-keywords />"
  }))

  storiesOf('Labels activés', module)
  .add('Nuage de mots clés', () => ({
    components: { LabelKeywordsChosen },
    template: '<label-keywords-chosen />'
  }))
