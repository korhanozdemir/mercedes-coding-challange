
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './index.css'
import App from './App.vue'
import CarTable from './components/CarTable.vue'
import CarsPage from './components/CarsPage.vue'
const app = createApp(App)

app.component('car-table', CarTable)
app.component('cars-page', CarsPage)
app.use(createPinia())

app.mount('#app')
