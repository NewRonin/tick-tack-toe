<template>
    <div class="page-container">
        <CPlayField
        @endingWon="wonMessage"
        ></CPlayField>
        <div v-if="ending">
            {{ ending }}
        </div>
    </div>
</template>

<script setup lang="ts">
import CPlayField from '@/components/CPlayField.vue';
import { ref } from 'vue'

const ending = ref('')

function wonMessage(player : number){
    ending.value = player.toString()
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

        * {
            @media screen and (orientation: landscape) {
                height: 60%;
                aspect-ratio: 1/1;
                }

            @media screen and (orientation: portrait) {
                width: 60%;
                aspect-ratio: 1/1;
            }
         }
    }
</style>