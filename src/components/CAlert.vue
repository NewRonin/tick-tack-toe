<template>
    <div class="container-alert">
        <v-card
            height="fit-content"
            width="50%"
            :title="messageTitle"
            :text="messageBody"
        >
        </v-card>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    messageTitle : String,
    messageBody : String,
})

</script>

<style>
    .v-card-title{
        font-size: 56px;
        height: 56px;
        text-align: center;
    }

    .v-card-text {
        font-size: 56px;
        height: 56px;
        text-align: center;
    }
</style>

<style scoped lang="scss">

.container-alert{
    width: 100dvw;
    height: 100dvh;
    display: flex;
    justify-content: center;
    align-items: center;

    .v-card{
        border-radius: 16px;
        box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.233); 
        padding: 16px;
        outline: 2px solid black;
    }
}

</style>