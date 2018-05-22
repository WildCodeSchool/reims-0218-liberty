// stories/index.js
import { storiesOf } from '@storybook/vue'
// Components
import MyButton from '../components/Button.vue'
import FiltreBouton from '../components/FilterButton.vue'
// Stories: Book Component

storiesOf('button', module)
  .add('de base', () => ({
    components: { MyButton },
    template: '<my-button></my-button>'
  }))
  .add('bouton qui filtre les mots-clés', () => ({
    components: { FiltreBouton },
    template: '<filtre-bouton />'
  }))

