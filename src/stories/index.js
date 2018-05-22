// stories/index.js
import { storiesOf } from '@storybook/vue'
// Components
import MyButton from '../components/Button.vue'
import PanelMessage from '../components/Message.vue'

// Stories: Book Component

storiesOf('button', module)
  .add('active', () => ({
    components: { MyButton },
    template: '<my-button>coucou</my-button>'
  }))
storiesOf('message', module)
  .add('panel', () => ({
    components: { PanelMessage },
    template: '<message><div><p>Madame Soleil - @MadameSoleil - 18-05-2017</p><img style="width: 100px; height: 100px; border-radius: 50%;" src="http://cache.magicmaman.com/data/photo/w800_c18/137/elsa-home.jpg" alt=""/><p>Il fait un froid de coin-coin !</p><img src="http://cache.magicmaman.com/data/photo/w800_c18/137/elsa-home.jpg"/></div></message>'
  }))
