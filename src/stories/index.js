import { storiesOf } from '@storybook/vue'
import MyButton from '../components/Button.vue'
import MyMessage from '../components/Message.vue'
import MyCloud from '../components/WordCloud.vue'
import MyShortKey from '../components/ShortKey.vue'
import Vuetify from 'vuetify'
import Vue from 'vue'
Vue.use(Vuetify)

storiesOf('Composants', module)
  .add('Juste pour test', () => ({
    components: { MyButton },
    template: '<my-button :rounded="true">rounded</my-button>'
  }))
  .add('Bloc de message', () => ({
    components: { MyMessage },
    template: '<my-message>memessage</my-message>'
  }))
  .add('Nuage de mots-clés', () => ({
    components: { MyCloud },
    template: '<my-cloud>nuage de mots-clés</my-cloud>'
  }))
  .add('Attribution du raccourci clavier', () => ({
    components: { MyShortKey },
    template: '<my-short-key></my-short-key>'
  }))
