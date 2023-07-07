<script setup>
import { ref, reactive, computed } from "vue";
import { storeToRefs } from "pinia";
import { useCarsStore } from "../stores/cars";
const { cars, color_list } = storeToRefs(useCarsStore());
let isHidden = ref(true);
let chosen_car = reactive({
});
let chosen_id = ref(null)
let isChanged = ref(false)
function editCar(id) {
  window.scrollTo(0, 0);
  chosen_id.value = id
  chosen_car.value = cars.value.find((e) => e.ID === id);
  isHidden.value = false;
}
function hide() {
    event.preventDefault()
    isHidden.value = true
}
</script>

<template :class="{ 'overflow-hidden': !isHidden }">
  <main class="py-48 px-32 bg-gray-dark relative">
    <h1 class="absolute z-10 right-32 top-36 font-thin text-6xl">INVENTORY</h1>
    <car-table
      @edit-car="editCar"
      class="z-20 border-2 border-neutral-300 border-solid rounded shadow-square"
      :cars="cars"
    />
  </main>
  <div
    @wheel.prevent
    @touchmove.prevent
    @scroll.prevent
    class="w-full flex h-full absolute bg-gray-dark top-0 z-40"
    :class="{ hidden: isHidden }"
  >
    <div class="shadow-square p-6 rounded m-auto bg-gray-milk w-96">
      <h2 class="w-16 leading-none font-semibold text-xl">CAR INFORMATION</h2>
      <form v-if="chosen_car.value" action="" @change="" class="flex flex-col gap-1 mt-12 mb-24">
        <div class="flex justify-between">
          <label for="id">ID:</label>
          <input
            id="id"
            v-model="chosen_car.value.ID"
            class="bg-gray-200 border border-solid border-gray-300 w-12 px-2"
            type="text"
            disabled
          />
        </div>
        <div class="flex justify-between">
          <label for="carID">CAR ID:</label>
          <input
            class="bg-gray-200 border border-solid border-gray-300 w-52 px-2"
            id="carID"
            v-model="chosen_car.value.CARID"
            type="text"
            disabled
          />
        </div>
        <div class="flex justify-between">
          <label for="INSTOCK">IN STOCK:</label>
          <input
            class="bg-gray-milk border border-solid border-gray-300 w-4 px-2"
            id="INSTOCK"
            v-model="chosen_car.value.INSTOCK"
            @change="isChanged = true"
            type="checkbox"
            :checked="chosen_car.value?.INSTOCK"
          />
        </div>
        <div class="flex justify-between">
          <label for="PRICE">PRICE(€):</label>
          <input
            class="bg-gray-milk border border-solid border-gray-300 w-24 px-2"
            id="PRICE"
            v-model="chosen_car.value.PRICE"
            @change="isChanged = true"
            type="number"
            min="15000"
            max="75000"
          />
        </div>

        <div class="flex justify-between">
          <label for="HP">HORSE POWER:</label>
          <input
            class="bg-gray-milk border border-solid border-gray-300 w-16 px-2"
            id="HP"
            v-model="chosen_car.value.HP"
            @change="isChanged = true"
            type="number"
            min="100"
            max="550"
          />
        </div>
        <div class="flex justify-between">
          <label for="colors">COLOR:</label>
          <select
            class="bg-gray-milk border border-solid border-gray-300 w-24 px-1"  
            v-model="chosen_car.value.COLOR"
            @change="isChanged = true"
            name="colors"
            
            id="colors"
          >
            <option v-for="color in color_list" :value="color">
              {{ color }}
            </option>
          </select>
        </div>
        <div class="flex gap-1 justify-end mt-4">
          <button
            @click="hide"
            class="bg-black px-2 py-0.5 rounded text-white"
          >
            CANCEL
          </button>
          <button
            class="bg-blue-deep px-2 py-0.5 rounded text-white "
            :class="{ 'cursor-not-allowed': !isChanged }"
            :disabled="!isChanged"
            @click="hide"
            >
            SAVE
          </button>
        </div>
      </form>
      <div class="w-8 flex m-auto items-center">
        <img src="../assets/icons/mercedes-benz.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<style></style>
