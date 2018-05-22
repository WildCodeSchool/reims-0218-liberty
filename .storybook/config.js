import "vuetify/dist/vuetify.css";
import { configure } from '@storybook/vue'
import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify);

function loadStories() {
 require('../src/stories')
}

configure(loadStories, module);
