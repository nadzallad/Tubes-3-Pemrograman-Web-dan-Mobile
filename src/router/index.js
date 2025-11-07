import { createRouter, createWebHistory } from 'vue-router'
import Beranda from '../components/beranda.vue'
import Ulasan from '../components/ulasan.vue'
import Komunitas from '../components/komunitas.vue'
import Hubungi from '../components/hubungi.vue'
import Profile from '../components/profile.vue'
import SewaAlat from '../components/sewaAlat.vue'
import Booking from '../components/booking.vue'
import FormBooking from '../components/formBooking.vue'
import Biodata from '../components/biodata.vue'
import RiwayatTransaksi from '../components/riwayatTransaksi.vue'
import FormKomunitas from '../components/formKomunitas.vue'
import detailKomunitas from '../components/detailKomunitas.vue'
import Checkout from '../components/formSewa.vue'
import Index from '../components/index.vue'


const routes = [
  { path: '/beranda', component: Beranda },
  { path: '/ulasan', component: Ulasan },
  { path: '/komunitas', component: Komunitas },
  { path: '/hubungi', component: Hubungi },
  { path: '/sewaAlat', component: SewaAlat },
  { path: '/booking', component: Booking },
  { path: '/formBooking', component: FormBooking },
  { path: '/form-komunitas', component: FormKomunitas },
  { path: '/detail-komunitas', component: detailKomunitas },
  { path: '/checkout', component: Checkout },
  { path: '/index', component: Index },
  {
    path: '/profile', component: Profile,
    children: [
      { path: '', component: Biodata }, 
      { path: 'riwayatTransaksi', component: RiwayatTransaksi } 
    ]
  },

  {
  path: '/ulasan/:namaTempat',
  component: () => import('../components/ulasanTempat.vue')
  },

  { path: '/', redirect: '/index' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
