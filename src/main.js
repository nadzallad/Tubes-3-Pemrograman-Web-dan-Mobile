import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/style.css' 
import './assets/styleProfile.css' 
import './assets/styleSewa.css' 
import './assets/styleFormSewa.css' 
import './assets/styleFormBooking.css' 
import './assets/styleBooking.css'
import './assets/styleRiwayatTransaksi.css'
import './assets/styleBiodata.css'

createApp(App)
.use(router)
.mount('#app')
