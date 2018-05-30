import Vuetify from 'vuetify'
import Vue from 'vue'
// stories/index.js
import { storiesOf } from '@storybook/vue'
import FilterButton from '../components/FilterButton.vue'
import MessagesBloques from '../components/MessagesBloques.vue'
import MessagesDiffuses from '../components/MessagesDiffuses.vue'
import Tous from '../components/Tous.vue'
import FieldKeywords from '../components/FieldKeywords.vue'
import Publier from '../components/Publier.vue'
import Moderation from '../components/Moderation.vue'
import ActivitiesForm from '../components/ActivitiesForm.vue'
import Message from '../components/Message.vue'
import ShortKey from '../components/ShortKey.vue'
import LabelActivity from '../components/LabelActivity.vue'
import SwitchActivityOption from '../components/SwitchActivityOption.vue'
import ListLabelActivities from '../components/ListLabelActivities.vue'
import FloatingButton from '../components/FloatingButton.vue'
import PublicReaction from '../components/PublicReaction.vue'
import PageActivities from '../components/PageActivities.vue'
import WordDragAndDrop from '../components/WordDragAndDrop.vue'

Vue.use(Vuetify)
// Stories: Book Component

storiesOf('Bouttons', module)
  .add('FilterButton', () => ({
    components: {
      FilterButton
    },
    template: '<filter-button />'
  }))
  .add('MessagesBloques', () => ({
    components: {
      MessagesBloques
    },
    template: '<messages-bloques />'
  }))
  .add('MessagesDiffuses', () => ({
    components: {
      MessagesDiffuses
    },
    template: '<messages-diffuses />'
  }))
  .add('Tous', () => ({
    components: {
      Tous
    },
    template: '<tous />'
  }))
  .add('SwitchActivityOption', () => ({
    components: {
      SwitchActivityOption
    },
    template: '<switch-activity-option />'
  }))
  .add('FloatingButton', () => ({
    components: {
      FloatingButton
    },
    template: '<floating-button />'
  }))
  .add('WordDragAndDrop', () => ({
    components: {
      WordDragAndDrop
    },
    template: '<word-drag-and-drop />'
  }))
  .add('LabelActivity', () => ({
    components: {
      LabelActivity
    },
    template: '<label-activity />'
  }))
  .add('Publier', () => ({
    components: {
      Publier
    },
    template: '<publier />'
  }))

storiesOf('Blocs', module)
  .add('Message', () => ({
    components: {
      Message
    },
    template: '<message />'
  }))
  .add('ShortKey', () => ({
    components: {
      ShortKey
    },
    template: '<short-key />'
  }))
  .add('PublicReaction', () => ({
    components: {
      PublicReaction
    },
    template: '<public-reaction />'
  }))
  .add('ListLabelActivities', () => ({
    components: {
      ListLabelActivities
    },
    template: '<list-label-activities />'
  }))
  .add('FieldKeywords', () => ({
    components: {
      FieldKeywords
    },
    template: '<field-keywords />'
  }))
  .add('Moderation', () => ({
    components: {
      Moderation
    },
    template: '<moderation />'
  }))
  .add('ActivitiesForm', () => ({
    components: {
      ActivitiesForm
    },
    template: '<activities-form />'
  }))

storiesOf('Pages', module).add('page Activités', () => ({
  components: { PageActivities },
  template: '<page-activities />'
}))
