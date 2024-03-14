<template>
    <div 
    class="cell-container"
    @click="changeState(store.getTurn)">
        <img v-if="state === 1" src="../assets/icons/circle.svg" />
        <img v-else-if="state === 2" src="../assets/icons/cross.svg" />
    </div>
</template>

<script setup lang="ts">
import { getCurrentInstance, ref } from 'vue'
import { useGameStore } from '@/stores/gameStore'

const emit = defineEmits(['endTurn'])
const props = defineProps({
    id : {
        type : Number,
        required: true
    }
})

const store = useGameStore()
const state = ref(0)

function changeState(newState: number) : void{
    if (state.value === 0){
        state.value = newState;

        store.changeCell(props.id, newState)

        store.nextTurn()
        emit('endTurn')
    }
}

</script>

<style lang="scss" scoped>
    .cell-container{
        padding: 2%;
        width: 100%;
        height: 100%;
        aspect-ratio: 1 / 1;
        outline: 2px solid black;
        overflow: hidden;

        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
</style>