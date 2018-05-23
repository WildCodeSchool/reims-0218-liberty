import { storiesOf } from '@storybook/vue'
import MyButton from '../components/Button.vue'
import MyMessage from '../components/Message.vue'
import Vuetify from 'vuetify'
import Vue from 'vue'
Vue.use(Vuetify)

storiesOf('MyButton', module)
  .add('story as a component', () => ({
    components: { MyButton },
    template: '<my-button :rounded="true">rounded</my-button>'
  }))
  .add('bloc de message', () => ({
    components: { MyMessage },
    template: '<my-message>memessage</my-message>'
  }))
