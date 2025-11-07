<template>
  <div>
    <section class="pilih-alat font-lexend">
      <div class="pilih-header">
        <h2>Pilih Alat</h2>
        <div class="search-box">
          <input type="text" placeholder="Cari Alat" v-model="searchText" />
          <button>
            <img :src="search" alt="Cari" class="search-icon" />
          </button>
        </div>
      </div>

      <div class="alat-container">
        <div class="alat-box" v-for="(alat, i) in filteredAlat" :key="i">
          <img :src="alat.gambar" :alt="alat.nama" />
          <div class="alat-text">
            <h3>{{ alat.nama }}</h3>
            <p>Rp{{ alat.harga.toLocaleString('id-ID') }}</p>
          </div>
          <button class="add-btn" @click="tambahKeKeranjang(alat)">+</button>
        </div>
      </div>

      <!-- Keranjang -->
      <div class="checkout-bar" v-if="keranjang.length > 0">
        <p>{{ keranjang.length }} item di keranjang</p>

        <!-- Daftar isi keranjang -->
        <div class="keranjang-list">
          <div
            v-for="(item, index) in keranjang"
            :key="index"
            class="keranjang-item"
          >
            <div style="display:flex; align-items:center; gap:10px;">
              <img :src="item.gambar" :alt="item.nama" />
              <span>{{ item.nama }}</span>
            </div>

            <div style="display:flex; align-items:center; gap:8px;">
              <span class="harga">Rp{{ item.harga.toLocaleString('id-ID') }}</span>
              <button class="hapus-btn" @click="hapusDariKeranjang(index)">−</button>
            </div>
          </div>
        </div>

        <button @click="goToCheckout">Checkout</button>
        <p v-if="pesan" style="color: #0077b6; font-weight:600;">{{ pesan }}</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import search from '@/assets/search.png'
import shimano from '@/assets/shimano.jpeg'
import daiwa from '@/assets/daiwa.jpeg'
import okuma from '@/assets/okuma.jpeg'
import kail from '@/assets/kail.jpeg'
import topi from '@/assets/topi.jpeg'
import umpan from '@/assets/umpan.jpeg'
import karpet from '@/assets/karpet.jpeg'

const router = useRouter()
const searchText = ref('')
const keranjang = ref([])
const pesan = ref('')

const daftarAlat = [
  { gambar: shimano, nama: 'Joran Pancing Shimano', harga: 40000 },
  { gambar: daiwa, nama: 'Joran Pancing Daiwa', harga: 45000 },
  { gambar: okuma, nama: 'Joran Pancing Okuma', harga: 50000 },
  { gambar: kail, nama: 'Kail Pancing', harga: 10000 },
  { gambar: topi, nama: 'Topi', harga: 10000 },
  { gambar: umpan, nama: 'Umpan', harga: 40000 },
  { gambar: karpet, nama: 'Karpet', harga: 20000 },
]

const filteredAlat = computed(() =>
  daftarAlat.filter(a =>
    a.nama.toLowerCase().includes(searchText.value.toLowerCase())
  )
)

function tambahKeKeranjang(alat) {
  keranjang.value.push(alat)
  localStorage.setItem('keranjang', JSON.stringify(keranjang.value))
  pesan.value = `${alat.nama} berhasil ditambahkan!`
  setTimeout(() => (pesan.value = ''), 2000)
}

function hapusDariKeranjang(index) {
  const nama = keranjang.value[index].nama
  keranjang.value.splice(index, 1)
  localStorage.setItem('keranjang', JSON.stringify(keranjang.value))
  pesan.value = `${nama} dihapus dari keranjang`
  setTimeout(() => (pesan.value = ''), 2000)
}

onMounted(() => {
  const savedKeranjang = localStorage.getItem('keranjang')
  if (savedKeranjang) keranjang.value = JSON.parse(savedKeranjang)
})

function goToCheckout() {
  router.push('/checkout')
}
</script>

<style scoped>
  @import "@/assets/styleSewa.css";
</style>
