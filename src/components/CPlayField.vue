<template>
    <div class="container-playfield">
        <div class="main-playfield">
          <CPlayCell v-for="i in 9" :key="i"/>
        </div>
    </div>
</template>

<script setup>
import CPlayCell from './CPlayCell.vue'

</script>

<style lang="scss" scoped>

.container-playfield {

  .main-playfield {

    @media screen and (orientation: landscape) {
      width: 60dvh;
      height: 60dvh;
    }

    @media screen and (orientation: portrait) {
      width: 60dvw;
      height: 60dvw;
    }

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 2px;
  }
}

</style>