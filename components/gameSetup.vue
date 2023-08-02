<template>
    <v-row style="justify-content: center;"  class="mt-10">
        <v-btn variant="text" icon="mdi-home" class="" href="/" color="#000"></v-btn>
    </v-row>
    <v-col v-if="step < 10" v-for="obj in game.getEasyGame">
        <v-row justify-lg="center" class="mt-10" style="justify-content: center; align-content: center;">
        <v-card color="" width="350" height="200" :image="obj.gameData[`ques${step}`].quesImg"> 
        </v-card>
    </v-row>
    <v-row no-gutters class="mr-16 mt-10" style="justify-content:center; align-content: center;">
        <v-btn @click="isClicked = !isClicked; tallyPoints(obj.gameData[`ques${step}`].option_1,obj.gameData[`ques${step}`].ans)" :color="(isClicked && obj.gameData[`ques${step}`].ans === obj.gameData[`ques${step}`].option_1) ? 'green' : 'grey'" :disabled="isClicked" size="x-large" width="250" class="ml-16 mb-2">
            <span align="center"> {{obj.gameData[`ques${step}`].option_1}}</span>
        </v-btn> 
        <v-btn @click="isClicked = !isClicked; tallyPoints(obj.gameData[`ques${step}`].option_2,obj.gameData[`ques${step}`].ans)" :color="(isClicked && obj.gameData[`ques${step}`].ans === obj.gameData[`ques${step}`].option_2) ? 'green' : 'grey'" :disabled="isClicked" size="x-large" width="250" class="ml-16">
            <span align="center"> {{obj.gameData[`ques${step}`].option_2}}</span>
        </v-btn>        
    </v-row>
    <v-row no-gutters class="mr-16 mt-2" style="justify-content:center; align-content: center;">
        <v-btn @click="isClicked = !isClicked; tallyPoints(obj.gameData[`ques${step}`].option_3,obj.gameData[`ques${step}`].ans)" :color="(isClicked && obj.gameData[`ques${step}`].ans === obj.gameData[`ques${step}`].option_3) ? 'green' : 'grey'" :disabled="isClicked" size="x-large" width="250" class="ml-16 mb-2">
            <span align="center"> {{obj.gameData[`ques${step}`].option_3}}</span>
        </v-btn> 
        <v-btn @click="isClicked = !isClicked; tallyPoints(obj.gameData[`ques${step}`].option_4,obj.gameData[`ques${step}`].ans)" :color="(isClicked && obj.gameData[`ques${step}`].ans === obj.gameData[`ques${step}`].option_4) ? 'green' : 'grey'" :disabled="isClicked" size="x-large" width="250" class="ml-16">
            <span align="center"> {{obj.gameData[`ques${step}`].option_4}}</span>
        </v-btn>        
    </v-row>
    <v-row class="mt-5" justify="center">
        
        <v-btn @click="step++; isClicked = false" :disabled="isClicked === false" size="x-large" color="#A8D9F8" width="360" variant="flat" align="center">
            <span align="center"> Next <v-icon>mdi-arrow-right-bold</v-icon> {{ step }}/{{ totalQues }}</span>
        </v-btn>
        
    </v-row>

    </v-col>
    <v-row v-if="step === 10" style="justify-content: center;"  class="mt-10">
        <pointsCard :points="pointStanding"></pointsCard>
    </v-row>

</template>
<script setup>
    import {useGameStore} from '~~/store/games'
    import pointsCard from '~/components/pointsCard.vue';

    const game = useGameStore()
    const obj = game.getEasyGame
    //console.log(Object.keys(obj[0].gameData).length)
    const totalQues = Object.keys(obj[0].gameData).length
    const pointStanding = ref(40)

    function tallyPoints(option,ans){
        if(option === ans){
            pointStanding.value+=pointStanding.value
            console.log(pointStanding.value)
        }

    }

    const step = ref(1)  
    const isClicked = ref(false)
</script>
