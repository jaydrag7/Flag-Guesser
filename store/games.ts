import { db } from "@/utils/firebase";
import { error } from "console";
import { child, get, onValue, ref, update  } from "firebase/database";
import { resolve } from "path";
import { defineStore } from "pinia";

interface GameProfile{
    games: any,
}
export const useGameStore = defineStore('gameprofile' ,{
    state: (): GameProfile => ({
        games: [],


    }),
    getters: {
        getEasyGame(state){
            return [
                {
                    gameData: state.games
                }
            ]

        },

    },
    actions: {
        async getGames(mode: String){
            try{

                    const data = await get(child(ref(db),`${mode}`))
                    if(data.exists()){
                        this.games = Object.values(data.val())

                        //console.log(this.games[0].quesImg)

                    }
                
            }
            catch(err){
                console.log(err)

            }
        }
    }
})
              
                
