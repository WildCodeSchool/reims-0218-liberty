<template>
    <div id="card">
        <v-content>
            <v-layout row wrap>
                <v-flex xs12>
                    <p id="author">Sherlock Holmes Officiel - @SherlockOff - 24 mai 2018</p>
                </v-flex>
            </v-layout>
            <v-layout row id="bodyMessage">
                <v-flex hidden-xs-only>
                    <v-avatar :size="64"><img id="avatar" src="https://i.pinimg.com/originals/ef/c8/d1/efc8d1918502b53a8615711bb75ec7b7.jpg"></v-avatar>
                </v-flex>
                <v-flex xs12 md10>
                    <p id="message">Je lis en vous comme dans un livre grand ouvert. Je sais que Dracula a menti à propos de son alibi. Il ne pouvait pas être en rendez-vous chez Pôle Emploi, on était dimanche ! Dracula est donc accusé du meurtre de Maxence Millescamps !</p>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <img id="cover" src="https://i.kinja-img.com/gawker-media/image/upload/s---dtVtuO7--/c_scale,f_auto,fl_progressive,q_80,w_800/obbfrtkouoiki2zhad0f.jpg">
                <v-icon>label</v-icon> <v-text-field value="Associez ce message à un ou plusieurs mots-clés"></v-text-field>
                <span id="actionButton" class="mx-auto">
                    <v-icon>check_box_marked_outline</v-icon>
                    <v-icon>image_plus</v-icon>
                    <v-icon>cast_connected</v-icon>
                    <v-icon>mouse</v-icon> <!-- pencil -->
                    <v-icon>mouse</v-icon> <!-- trash -->
                </span>
            </v-layout>
        </v-content>
    </div>
</template>

<script>
export default {
    name: 'MaterialIcons'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Material+Icons');

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
    width: 64px;
    height: 64px;
}

.avatar {
    margin: 1em;
}

#author {
    text-align: left;
    color: #9094a7;
    margin: 0.5em 1em;
}

.input-group {
    color: #9094a7;
    font-size: 8px;
    margin: 0;
    padding: 0;
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

#actionButton {
    width: 100%;
    text-align: center;
}

#actionButton .icon {
    width: 8%;
    margin: 5%;
}
</style>
