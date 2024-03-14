import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const useGameStore = defineStore('gameStore', () => {
  const turn = ref(1)
  const cells : Ref<Array<Number>> = ref([])
  const getTurn = computed(() => turn.value)
  const getCells = computed(() : Array<Number> => cells.value)
  function nextTurn() {
    turn.value = (turn.value % 2) + 1 
  }

  function addCell(cell : number){
    cells.value.push(cell) 
  }

  function changeCell(id : number, newCell: number){
    cells.value[id] = newCell
  }

  return { turn, getTurn, getCells, nextTurn, addCell, changeCell}
})
