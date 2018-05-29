<template>
<v-app>
  <word-cloud />
  <list-label-activities />
  <activities-form />
  <short-key />
</v-app>
</template>
<script>
import WordCloud from "./WordCloud.vue";
import ListLabelActivities from "./ListLabelActivities.vue";
import ActivitiesForm from "./ActivitiesForm.vue";
import ShortKey from "./ShortKey.vue";

export default {
  name: "PageModeration",
  components: {
    WordCloud,
    ListLabelActivities,
    ActivitiesForm,
    ShortKey
  }
}
</script>
