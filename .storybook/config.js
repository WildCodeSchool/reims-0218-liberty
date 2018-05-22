import "vuetify/dist/vuetify.css";
import { configure } from '@storybook/vue'
import Vue from "vue";
import Vuetify from "vuetify";
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(Vuetify);
Vue.use(VueMaterial)

function loadStories() {
 require('../src/stories')
}

configure(loadStories, module);
