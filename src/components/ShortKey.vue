<template>
    <span>
        Définir la touche raccourci:
        <input type="text" readonly id="definedShortKey" value="">
        <button>C'est prêt !</button><v-icon>mouse</v-icon>
    </span>
</template>

<script>

// Script d'attribution de touche clavier
// Recours à l'événement focus, appliqué à l'input
// Ecouter l'input fait
// Avoir la possibilité de le changer à tout moment

export default {
    name: 'MaterialIcons'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Material+Icons');
span {
    width: 100%;
}

input {
    border: 1px solid black;
    background-color: #999;
    margin: 0 0.5em;
    width: 15%;
}

button {
    min-width: 10%;
    border-radius: 50%;
    background-color: darkslategrey;
    color: white;
    margin: 1em;
    padding: 1em
}

</style>
