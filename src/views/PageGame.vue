<template>
    <div class="page-container">
        <CPlayField
        @endingWon="wonMessage"
        @endingDraw="drawMessage"
        ></CPlayField>

        <CAlert v-if="ending"
        :messageTitle="'GAME OVER'"
        :messageBody="ending"
        >
            
        </CAlert>
        <img 
        v-if="ending" 
        class="button-restart"
        src="../assets/icons/restart.svg"
        @click="restartGame"/>
    </div>
</template>

<script setup lang="ts">
import CAlert from '@/components/CAlert.vue';
import CPlayField from '@/components/CPlayField.vue';
import { ref } from 'vue'
import { useGameStore } from '@/stores/gameStore';

const ending = ref('')
const store = useGameStore()

function wonMessage(player : number){
    ending.value =  `Player ${player === 1 ? 'O' : 'X'} has won!`
}

function drawMessage(player : number){
    ending.value =  `Draw!`
}

function restartGame(){
    store.clearCells()
    ending.value = ''
}

</script>

<style lang="scss" scoped>
    .page-container{
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;

        .container-playfield {
            @media screen and (orientation: landscape) {
                height: 60%;
                aspect-ratio: 1/1;
                }

            @media screen and (orientation: portrait) {
                width: 60%;
                aspect-ratio: 1/1;
            }
         }

         .container-alert{
            position: absolute;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
         }

         .button-restart{
            position: absolute;
            width: 15%;
            aspect-ratio: 1 / 1;
            bottom: 0;
         }
    }
</style>