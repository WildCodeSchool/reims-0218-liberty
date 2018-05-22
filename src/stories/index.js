// stories/index.js
import { storiesOf } from '@storybook/vue'
// Components
import MyButton from '../components/Button.vue'

// Stories: Book Component

storiesOf('button', module)
  .add('active', () => ({
    components: { MyButton },
    template: '<my-button>coucou</my-button>'
  }))
