

<template>
  <v-app>
    <v-content>
      <v-container>{{this.text}}</v-container>
    </v-content>
  </v-app>
</template>
<script>
  export default {
    name: "test",
    data: function(){
      return {
        text: "Je suis juste un test Bacon ipsum dolor amet bacon t-bone ham hock, burgdoggen meatloaf sausage doner andouille turkey. Rump beef ribs beef tongue. Doner cow fatback porchetta sausage, salami pancetta pork chop pork loin shoulder. Cupim short ribs bacon fatback, tenderloin chuck biltong boudin pig. T-bone shoulder drumstick burgdoggen venison short ribs. Pork chop porchetta rump ham prosciutto bresaola meatloaf boudin. Venison pork chop sirloin prosciutto pork loin pancetta ham."
      }
    }
  }
</script>
