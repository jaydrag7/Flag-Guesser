<template>
    <v-row justify-lg="center" class="mt-16" style="justify-content: center; align-content: center;">
        <v-card elevation="24" color="#A8D9F8" width="300" height="500" class="mt-16  rounded-xl" align="center">
            <v-img class="mt-5" src="earth-globe.png" height="80"/>
            <v-card-title class="text-h5"> Guess The Flag !</v-card-title>
            <v-row justify="center" class="mt-16">
                <v-btn @click="goToGame(); games.getGames('easy')" height="50" width="120" variant="elevated" elevation="10" class="rounded-pill easy-btn">
                     Easy <v-img src="cool.png" width="20"/>
                </v-btn>
            </v-row>
            <v-row justify="center" class="mt-16">
                <v-btn @click="goToGame(); games.getGames('medium')" height="50" width="120" variant="elevated" elevation="10" class="rounded-pill medium-btn">
                     Medium <v-img src="crying.png" width="20"/>
                </v-btn>
            </v-row>
            <v-row justify="center" class="mt-16">
                <v-btn height="50" width="120" variant="elevated" elevation="10" class="rounded-pill hard-btn">
                     Hard <v-img src="shocked.png" width="20"/>
                </v-btn>
            </v-row>
        </v-card>
    </v-row>
    
</template>
<script setup>
    import {useGameStore} from '~~/store/games'

    const games = useGameStore()
    const router = useRouter()
    function goToGame() {
        router.push('/game')
        
    } 
</script>
<style>
    .easy-btn:hover{
        background-color: #4CAF50;
        padding-top: 18px;
        padding-bottom: 18px;
        padding-left: 55px;
        padding-right: 55px;
    }
    .medium-btn:hover{
        background-color: #FF9800;
        padding-top: 18px;
        padding-bottom: 18px;
        padding-left: 55px;
        padding-right: 55px;
    }
    .hard-btn:hover{
        background-color: #D32F2F;
        padding-top: 18px;
        padding-bottom: 18px;
        padding-left: 55px;
        padding-right: 55px;
    }
</style>