<template>
    <div 
    class="cell-container"
    @click="changeState(store.getTurn)">
        <img v-if="state[props.id] === 1" src="../assets/icons/circle.svg" />
        <img v-else-if="state[props.id] === 2" src="../assets/icons/cross.svg" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useGameStore } from '@/stores/gameStore'

const emit = defineEmits(['endTurn', 'refreshCells'])
const props = defineProps({
    id : {
        type : Number,
        required: true
    }
})

const store = useGameStore()
const state = ref(store.getCells)

function changeState(newState: number) : void{
    if (state.value[props.id] === 0){

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