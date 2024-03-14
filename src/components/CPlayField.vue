<template>
    <div class="container-playfield">
        <div class="main-playfield">
          <CPlayCell 
          v-for="i in props.fieldSize" :key="i"
          :id = "i - 1"
          @endTurn="checkField"
          />
        </div>
    </div>
</template>

<script setup lang="ts">
import CPlayCell from './CPlayCell.vue'
import { useGameStore } from '@/stores/gameStore'

const emit = defineEmits(['endingWon'])

const props = defineProps({
  fieldSize: {
    type: Number,
    default: 9
  }
})

const store = useGameStore()

for (let i = 0; i < props.fieldSize; i++){
  store.addCell(0)
}

function checkField(): void {
  const bound = Math.sqrt(props.fieldSize)
  const fieldArray: Array<Number> = store.getCells

  //check horizontal axes
  for (let i = 0; i < fieldArray.length - 1; i += bound) {
    let won = true

    if (!fieldArray[i]){
      won = false
      continue
    }

    for (let j = 0; j < bound - 1; j++) {
      if (fieldArray[i + j] != fieldArray[i + j + 1]) {
        won = false
        break
      }
    }

    if (won) {
      console.log('hor')
      emit('endingWon', fieldArray[i])
      return
    }
  }

  //check vertical axes
  for (let i = 0; i < bound; i++) {
    let won = true

    if (!fieldArray[i]){
      won = false
      continue
    }

    for (let j = 0; i + j + bound < fieldArray.length; j += bound) {
      if (fieldArray[i + j] != fieldArray[i + j + bound]) {
        won = false
        break
      }
    }

    if (won) {
      console.log('vert')
      emit('endingWon', fieldArray[i])
      return
    }
  }

  //check first diagonal axe
  let won = true
  
  for (let i = 0; i < fieldArray.length - 1; i += bound + 1) {

    if (!fieldArray[i]){
      won = false
      break
    }

    if (fieldArray[i] != fieldArray[i + bound + 1]) {
      won = false
      break
    }
  }
  if (won) {
    emit('endingWon', fieldArray[0])
    return
  }

  //check second diagonal axe
  won = true
  for (let i = bound - 1; i < fieldArray.length - 1 - bound; i += bound - 1) {

    if (fieldArray[i] === 0){
      won = false
      break
    }

    if (fieldArray[i] != fieldArray[i + (bound - 1)]) {
      won = false
      break
    }
  }
  if (won) {
    emit('endingWon', fieldArray[bound - 1])
    return
  }

}

</script>

<style lang="scss" scoped>

.container-playfield {

  .main-playfield {
    position: relative;

    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 2px;
  }
}

</style>