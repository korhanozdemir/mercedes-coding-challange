<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia'
import { useCarsStore } from './stores/cars'
const { cars } = storeToRefs(useCarsStore())
const { fetchCars } = useCarsStore()
fetchCars()
</script>

<template>
  <main>
    <cars-page :cars="cars"/>
  </main>
</template>

<style >
@font-face {
  font-family: "Inter";
  src: local("Inter"),
   url(./fonts/inter/inter-variable.ttf) format("truetype");
}
body{
  font-family: 'Inter';
}

</style>
