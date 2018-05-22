<template>
  <button class="rounded">{{this.text}}</button>
</template>

<script>
export default {
 name: 'FiltreBouton',
 data: function() {
   return {
     text:"Filtre mots-clés"
   }

 }
}
</script>
<style>
.rounded {
  border-radius: 10px;
}
</style>
