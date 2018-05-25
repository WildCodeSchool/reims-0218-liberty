import Vuetify from 'vuetify'
import Vue from 'vue'
// stories/index.js
import { storiesOf } from '@storybook/vue'
import MyButton from '../components/Button.vue'
import FiltreBouton from '../components/FilterButton.vue'
import MessagesBloques from '../components/MessagesBloques.vue'
import MessagesDiffuses from '../components/MessagesDiffuses.vue'
import Tous from '../components/Tous.vue'
import FieldKeywords from '../components/FieldKeywords.vue'
import LabelKeywordsChosen from '../components/LabelKeywordsChosen.vue'
import Publier from '../components/Publier.vue'
import Moderation from '../components/Moderation.vue'
import ActivitiesForm from '../components/ActivitiesForm.vue'
import MyMessage from '../components/Message.vue'
import MyCloud from '../components/WordCloud.vue'
import MyShortKey from '../components/ShortKey.vue'
import LabelActivity from '../components/LabelActivity.vue'
import SwitchActivityOption from '../components/SwitchActivityOption.vue'
import ListLabelActivities from '../components/ListLabelActivities.vue'
import FloatingButton from '../components/FloatingButton.vue'
import MyReaction from '../components/PublicReaction.vue'

Vue.use(Vuetify)
// Stories: Book Component

storiesOf('Boutons', module)
  .add('de base', () => ({
    components: { MyButton },
    template: '<my-button />'
  }))
  .add('bouton qui filtre les mots-clés', () => ({
    components: { FiltreBouton },
    template: '<filtre-bouton />'
  }))
  .add('Messages bloqués', () => ({
    components: { MessagesBloques },
    template: '<messages-bloques />'
  }))
  .add('Messages diffusés', () => ({
    components: { MessagesDiffuses },
    template: '<messages-diffuses />'
  }))
  .add('Tous', () => ({
    components: { Tous },
    template: '<tous />'
  }))
  .add('Switch', () => ({
    components: { SwitchActivityOption },
    template: '<switch-activity-option />'
  }))
  .add('Bouton flottant', () => ({
    components: { FloatingButton },
    template: '<floating-button />'
  }))

storiesOf('Labels', module)
  .add('labels activités', () => ({
    components: { LabelActivity },
    template: '<label-activity />'
  }))

storiesOf('Champs de sélection', module)
  .add('Sélection de mots clés', () => ({
    components: { FieldKeywords },
    template: '<field-keywords />'
  }))

storiesOf('Labels activés', module)
  .add('Activités', () => ({
    components: { LabelActivity },
    template: '<label-activity />'
  }))
  .add('Nuage de mots clés', () => ({
    components: { LabelKeywordsChosen },
    template: '<label-keywords-chosen />'
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

storiesOf('Blocs', module)
  .add('ActivitiesForm', () => ({
    components: { ActivitiesForm },
    template: '<activities-form />'
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
  .add('Encart de réaction du public', () => ({
    components: { MyReaction },
    template: '<my-reaction></my-reaction>'
  }))
  .add('Liste des activités sélectionnées', () => ({
    components: { ListLabelActivities },
    template: '<list-label-activities></list-label-activities>'

  }))
