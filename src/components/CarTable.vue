<script setup>
const props = defineProps(["cars"]);
</script>

<template>
    <div class="relative">
      <div class="relative table-header px-6 py-4 grid grid-cols-8 text-blue-deep font-bold shadow">
        <h2>ID</h2>
        <h2 class="col-span-2">CAR ID</h2>
        <h2>HP</h2>
        <h2>IN STOCK</h2>
        <h2>PRICE</h2>
        <h2>COLOR</h2>
        <h2>EDIT</h2>
      </div>
      <div v-for="car in props.cars" :key="car?.id" class="table-item px-6 py-2 grid grid-cols-8">
      <div><p>{{car?.ID}}</p></div>
      <div class="col-span-2"><p>{{car?.CARID}}</p></div>
      <div><p>{{car?.HP}}</p></div>
      <div><p>{{car?.INSTOCK}}</p></div>
      <div><p v-if="car?.PRICE">€{{car?.PRICE}}</p></div>
      <div><p>{{car?.COLOR}}</p></div>
      <div><button @click="$emit('editCar',car?.ID)" class="edit-button w-6 h-6"></button></div>
    </div>
    </div>
</template>

<style scoped>
.table-item:nth-child(even) {
  background-color: #f3f3f3;
}
.table-header,.table-item:nth-child(odd) {
  background-color: #f8f8f8;
}
.edit-button{
  background-image: url('../assets/icons/edit-tool.png');
  background-size: cover;
}
</style>
