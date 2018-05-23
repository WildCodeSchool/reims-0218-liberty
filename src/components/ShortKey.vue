<template>
    <span>
        Définir la touche raccourci
        <input class="inputField" type="text" readonly id="definedShortKey" value="">
        <button>C'est prêt !</button><v-icon>mouse</v-icon>
    </span>
</template>

<script>

export default {
    name: 'MaterialIcons',
    mounted() {
        // Script d'attribution de touche clavier
        // Recours à l'événement focus, appliqué à l'input
        // Ecouter l'input fait
        // Avoir la possibilité de le changer à tout moment
        const target = document.getElementById("definedShortKey")
        let inputDefined = "F3" // Valeur par défaut
        const activatePlaceholder = () => {
            // alert("Il y a focus !")
            target.setAttribute("placeholder", "Appuyez sur une touche")
        }

        const killPlaceholder = () => {
            // alert("Il y a focus !")
            target.setAttribute("placeholder", "")
        }

        target.addEventListener("focusin", activatePlaceholder, false)
        target.addEventListener("focusout", killPlaceholder, false)
        document.addEventListener('keydown', function(event) {
           target.value = event.key
        })
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Material+Icons');
span {
    width: 100%;
}

.inputField {
    border: 1px solid black;
    margin: 0 0.5em;
    width: 15%;
}

button {
    min-width: 10%;
    border-radius: 33.33% / 50%;
    background-color: #aaa;
    color: white;
    font-weight: bold;
    margin: 0 1em;
    padding: 1em;
}

</style>
