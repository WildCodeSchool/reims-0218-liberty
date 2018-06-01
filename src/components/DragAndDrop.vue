<script>
import { ContainerMixin, ElementMixin } from 'vue-slicksort'
import Vue from 'vue'

export default {
  name: 'ActivitiesForm',
}
const SortableList = {
  mixins: [ContainerMixin],
  template: `
    <ul class="list">
      <slot />
    </ul>
  `
}

const SortableItem = {
  mixins: [ElementMixin],
  props: ['item'],
  template: `
    <li class="list-item">{{item}}</li>
  `
}

const ExampleVue = {
  name: 'Example',
  template: `
    <div class="root">
      <SortableList lockAxis="y" v-model="items">
        <SortableItem v-for="(item, index) in items" :index="index" :key="index" :item="item"/>
      </SortableList>
    </div>
  `,

  components: {
    SortableItem,
    SortableList
  },

  data() {
    return {
      items: [
        {name:'Item 1'},
        {name:'Item 2'},
        {name:'Item 3'},
        {name:'Item 4'},
        {name:'Item 5'},
        {name:'Item 6'},
        {name:'Item 7'},
        {name:'Item 8'}
      ]
    }
  }
}
const app = new Vue({
  el: '#root',
  render: (h) => h(ExampleVue),
});
</script>
