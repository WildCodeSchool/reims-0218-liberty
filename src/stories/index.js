import { storiesOf } from '@storybook/vue'
import MyButton from '../components/Button.vue'
import MyMessage from '../components/Message.vue'
import MyCloud from '../components/WordCloud.vue'
import Vuetify from 'vuetify'
import Vue from 'vue'
Vue.use(Vuetify)

storiesOf('Machin truc', module)
  .add('story as a component', () => ({
    components: { MyButton },
    template: '<my-button :rounded="true">rounded</my-button>'
  }))
  .add('bloc de message', () => ({
    components: { MyMessage },
    template: '<my-message>memessage</my-message>'
  }))
  .add('nuage de mots-clés', () => ({
    components: { MyCloud },
    template: '<my-cloud>nuage de mots-clés</my-cloud>'
  }))
