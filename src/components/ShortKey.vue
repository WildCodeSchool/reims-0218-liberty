<template>
    <span>
        Définir la touche raccourci
        <input class="inputField" type="text" readonly id="definedShortKey" value="">
        <v-chip>C'est prêt !</v-chip><v-icon>mouse</v-icon>
    </span>
</template>

<script>

export default {
    name: 'MaterialIcons',
    mounted() {
        const target = document.getElementById("definedShortKey")
        const activatePlaceholder = () => {
            target.setAttribute("placeholder", "Appuyez sur une touche")
        }

        const killPlaceholder = () => {
            target.setAttribute("placeholder", "")
        }

        target.addEventListener("focusin", activatePlaceholder, false)
        target.addEventListener("focusout", killPlaceholder, false)
        document.addEventListener('keydown', function(event) {
           target.value = (event.key).toLowerCase()
            switch (target.value) {
                case "&":
                    target.value = "1"
                    break
                case "é":
                    target.value = "2"
                    break
                case "\"":
                    target.value = "3"
                    break
                case "'":
                    target.value = "4"
                    break
                case "(":
                    target.value = "5"
                    break
                case "-":
                    target.value = "6"
                    break
                case "è":
                    target.value = "7"
                    break
                case "_":
                    target.value = "8"
                    break
                case "ç":
                    target.value = "9"
                    break
                case "à":
                    target.value = "0"
                    break
                case " ":
                    target.value = "ESPACE"
                    break
                default:
                    break
            }
        })
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Material+Icons');
span {
    width: 100%;
    color: #72768d;
}

.inputField {
    border: 1px solid black;
    margin: 0 0.5em;
    width: auto;
}

.chip {
    background-color: #72768d;
    margin: 0 1em;
    width: auto;
}

.chip__content {
    color: white;
    font-weight: 800;
}

</style>
