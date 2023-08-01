import { db } from "@/utils/firebase";
import { child, get, onValue, ref, update  } from "firebase/database";
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
        getGames(gameMode: String){
            try{
                onValue(child(ref(db),`${gameMode}`), (snapshot:any) => {
                    console.log(Object.values(snapshot.val()))
                    this.games = snapshot.val()
            
                })

            }
            catch(err){
                console.error(err)
            }
        }

    }
})