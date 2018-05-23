<template>
    <div id="card">
        <v-content>
            <v-container text-xs-center>
                <v-layout row wrap>
                    <v-flex xs12>
                        <p id="author">Madame Soleil - @MadameSoleil - 28 janv. 2018</p>
                    </v-flex>
                </v-layout>
                <v-layout row id="bodyMessage">
                    <v-flex hidden-xs-only md2>
                        <v-avatar :size="64"><img id="avatar" src="http://cache.magicmaman.com/data/photo/w800_c18/137/elsa-home.jpg"></v-avatar>
                    </v-flex>
                    <v-flex xs12 md10>
                        <p id="message">Quand on prend de la hauteur, tout semble insignifiant ! La tristesse, l'angoisse et la peur, m'ont quitté depuis longtemps ! Je veux voir ce que je peux faire, de cette magie pleine de mystères. Le bien, le mal, je dis tant pis ! Tant pis !</p>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex>
                        <img id="cover" src="http://cache.magicmaman.com/data/photo/w800_c18/137/elsa-home.jpg">
                        <p><input type="text" placeholder="Associez ce message à un ou plusieurs mots-clés..."></p>
                        <div id="actionButton">
                            <button>Bouton 1</button><button>Bouton 2</button><button>Bouton 3</button><button>Bouton 4</button><button>Bouton 5</button>
                        </div>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </div>
</template>

<script>
export default {
    props: {
        name: "Madame Soleil",
        shortName: "MadameSoleil",
        date: "2018-01-28",
        avatar: "http://cache.magicmaman.com/data/photo/w800_c18/137/elsa-home.jpg",
        message: "Il fait un froid de coin-coin !",
        cover: "http://cache.magicmaman.com/data/photo/w800_c18/137/elsa-home.jpg",
    }
}
</script>

<style>
#card {
            width: 50%;
            min-width: 300px;
            border-radius: 5%;
            border: 2px solid purple;
            padding: 0;
            margin: 1em;
        }

        #avatar {
            border-radius: 50%;
            float: left;
            margin: 1em;
        }

        #author {
            text-align: left;
            color: #999;
        }

        #cover {
            width: 100%;
            height: auto;
            padding: 0;
        }

        #message {
            text-align: left;
            margin: 0.5em;
        }

        input {
            width: 100%;
        }

        button {
            margin: 0 5%;
            width: 10%;
        }
</style>
