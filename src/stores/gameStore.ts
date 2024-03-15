import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const useGameStore = defineStore('gameStore', () => {
  const turn = ref(1)
  const cells : Ref<Array<Number>> = ref([])
  const getTurn = computed(() => turn.value)
  const getCells = computed(() : Array<Number> => cells.value)
  const getCell = computed(() => ({ index } : {index: number}) => cells.value[index])
  function nextTurn() {
    turn.value = (turn.value % 2) + 1 
  }

  function addCell(cell : number){
    cells.value.push(cell) 
  }

  function changeCell(id : number, newCell: number){
    cells.value[id] = newCell
  }

  function clearCells(){
    turn.value = 1;
    for (let i = 0; i < cells.value.length; i++){
      cells.value[i] = 0
    }
  }

  return { turn, cells, getTurn, getCell, getCells, nextTurn, addCell, changeCell, clearCells}
})
