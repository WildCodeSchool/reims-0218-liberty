import { storiesOf } from '@storybook/vue'
import MyButton from '../components/Button.vue'
import MyMessage from '../components/Message.vue'

storiesOf('MyButton', module)
  .add('story as a component', () => ({
    components: { MyButton },
    template: '<my-button :rounded="true">rounded</my-button>'
  }))
  .add('bloc de message', () => ({
    components: { MyMessage },
    template: '<my-message>memessage</my-message>'
  }))
