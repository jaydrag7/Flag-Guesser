<template>
    <v-row style="justify-content: center;"  class="mt-5">
        <v-btn variant="text" icon="mdi-home" class="" href="/" color="#000"></v-btn>
    </v-row>
    <v-col v-if="(game.games.length) && (count < 10)">
        <v-row justify-lg="center" class="mt-10" style="justify-content: center; align-content: center;">
        <v-card width="350" height="200" :image="game.games[step].quesImg">
        </v-card>
    </v-row>
    <v-row no-gutters class="mr-16 mt-10" style="justify-content:center; align-content: center;">
        <v-btn @click="isClicked = !isClicked; tallyPoints(game.games[step].option_1,game.games[step].ans)" :color="(isClicked && game.games[step].ans === game.games[step].option_1) ? 'green' : 'grey'" :disabled="isClicked" size="x-large" width="250" class="ml-16 mb-2">
            <span align="center"> {{game.games[step].option_1}}</span>
        </v-btn> 
        <v-btn @click="isClicked = !isClicked; tallyPoints(game.games[step].option_2,game.games[step].ans)" :color="(isClicked && game.games[step].ans === game.games[step].option_2) ? 'green' : 'grey'" :disabled="isClicked" size="x-large" width="250" class="ml-16">
            <span align="center"> {{game.games[step].option_2}}</span>
        </v-btn>        
    </v-row>
    <v-row no-gutters class="mr-16 mt-2" style="justify-content:center; align-content: center;">
        <v-btn @click="isClicked = !isClicked; tallyPoints(game.games[step].option_3,game.games[step].ans)" :color="(isClicked && game.games[step].ans === game.games[step].option_3) ? 'green' : 'grey'" :disabled="isClicked" size="x-large" width="250" class="ml-16 mb-2">
            <span align="center"> {{game.games[step].option_3}}</span>
        </v-btn> 
        <v-btn @click="isClicked = !isClicked; tallyPoints(game.games[step].option_4,game.games[step].ans)" :color="(isClicked && game.games[step].ans === game.games[step].option_4) ? 'green' : 'grey'" :disabled="isClicked" size="x-large" width="250" class="ml-16">
            <span align="center"> {{game.games[step].option_4}}</span>
        </v-btn>        
    </v-row>
    <v-row class="mt-5" justify="center">
        
        <v-btn @click="step++;count++; isClicked = false" :disabled="isClicked === false" size="x-large" color="#A8D9F8" width="360" variant="flat" align="center">
            <span align="center"> Next <v-icon>mdi-arrow-right-bold</v-icon> {{ count }}/{{ 9 }}</span>
        </v-btn>
        
    </v-row>

    </v-col>
    <v-row v-if="(count) === 10" style="justify-content: center;"  class="mt-10">
        <PointsCard :points="pointStanding"/>
    </v-row>

</template>
<script setup>
    import {useGameStore} from '@/store/games'
    import PointsCard from "~/components/PointsCard.vue"

    const game = useGameStore()
    //const quesCount = (game.games).length

    //console.log(quesCount)
    //const totalQues = test
    const pointStanding = ref(40)

    function tallyPoints(option,ans){
        if(option === ans){
            pointStanding.value+=pointStanding.value
            //console.log(pointStanding.value)
        }

    }


    const step = ref(0)
    const count = ref(1)  
    const isClicked = ref(false)
</script>
