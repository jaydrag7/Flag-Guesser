import { db } from "@/utils/firebase";
import { error } from "console";
import { child, get, onValue, ref, update  } from "firebase/database";
import { resolve } from "path";
import { defineStore } from "pinia";

interface GameProfile{
    games: any,
    quesCount: any,
}
export const useGameStore = defineStore('gameprofile' ,{
    state: (): GameProfile => ({
        games: [],
        quesCount: 0,


    }),
    getters: {
        getEasyGame(state){
            return [
                {
                    gameData: state.games
                }
            ]

        },
        // getCount(state){
        //     return state.quesCount
        // }

    },
    actions: {
        async getGames(mode: String){
            try{

                    const data = await get(child(ref(db),`${mode}`))
                    if(data.exists()){
                        this.games = Object.values(data.val())
                        this.quesCount = this.games.length
                        //console.log(this.quesCount)

                    }
                
            }
            catch(err){
                console.log(err)

            }
        }
    }
})
              
                
