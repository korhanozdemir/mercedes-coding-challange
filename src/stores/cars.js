import { defineStore } from 'pinia'

export const useCarsStore = defineStore( {
  id:'cars',
  state:()=> ({
    cars: [],    
    error : null,
    color_list : []
  }),
  actions: {
    async fetchCars() {
      this.cars = [];
      this.loading = true;
      try {
        this.cars = await fetch('https://run.mocky.io/v3/82c83520-6a90-4554-8b28-95515af94449')
        .then((response) => response.json())
        .then((obj)=>{
          const filtered_array = obj.filter(e => e.ID && e.CARID)
          this.color_list = [...new Set(filtered_array.flatMap(({COLOR}) => !COLOR ? [] : COLOR))]
          return filtered_array
        }) 
      } catch (error) {
        this.error = error
      }
    }
  }
  
})
