<template>
    <div class="page-container">
        <CPlayField
        @endingWon="wonMessage"
        ></CPlayField>

        <CAlert v-if="ending"
        :messageTitle="'GAME OVER'"
        :messageBody="ending"
        >
            
        </CAlert>
    </div>
</template>

<script setup lang="ts">
import CAlert from '@/components/CAlert.vue';
import CPlayField from '@/components/CPlayField.vue';
import { ref } from 'vue'

const ending = ref('')

function wonMessage(player : number){
    ending.value =  `Player ${player === 1 ? 'O' : 'X'} has won!`
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
    }
</style>