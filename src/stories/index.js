// stories/index.js
import { storiesOf } from '@storybook/vue'
// Components
import MyButton from '../components/Button.vue'
import FiltreBouton from '../components/FilterButton.vue'
import test from '../components/Test.vue'
import Publier from '../components/Publier.vue'
import Moderation from '../components/Moderation.vue'
import ActivitiesForm from '../components/ActivitiesForm.vue'
import Vuetify from 'vuetify'
import Vue from 'vue'
Vue.use(Vuetify)
// Stories: Book Component

storiesOf('button', module)
  .add('de base', () => ({
    components: { MyButton },
    template: '<my-button />'
  }))
  .add('bouton qui filtre les mots-clés', () => ({
    components: { FiltreBouton },
    template: '<filtre-bouton />'
  }))
  .add('Tests', () => ({
    components: { test },
    template: '<test />'
  }))
  .add('Publier', () => ({
    components: { Publier },
    template: '<publier />'
  }))

storiesOf('Moderation', module)
  .add('Moderation', () => ({
    components: { Moderation },
    template: '<moderation />'
  }))
  .add('ActivitiesForm', () => ({
    components: { ActivitiesForm },
    template: '<activities-form />'
  }))

// storiesOf('ActivitiesForm', module)
