<template>
  <div>
    <!-- Informasi Umum -->
    <section class="informasi-umum">
      <div class="slider-container">
        <img
          :src="infoFotos[currentIndex]"
          class="informasi-umum-img"
          alt="Slide Informasi Umum"
        />
        <button class="nav-btn prev" @click="prevSlide">❮</button>
        <button class="nav-btn next" @click="nextSlide">❯</button>
      </div>
    </section>

    <!-- Fitur -->
    <section class="fitur-container font-lexend">
      <div class="fitur-box">
        <img :src="alatFoto" alt="Sewa Alat" class="fitur-img" />
        <div class="fitur-text">
          <h2>Sewa Alat Pemancingan</h2>
          <p>Tersedia berbagai perlengkapan memancing berkualitas yang bisa kamu sewa dengan mudah dan cepat.</p>
          <button class="pesan-btn font-lexend" @click="gotoSewa">Pilih Alat</button>
        </div>
      </div>

      <div class="fitur-box">
        <img :src="tempatFoto" alt="Reservasi Tempat" class="fitur-img" />
        <div class="fitur-text">
          <h2>Reservasi Tempat Mancing</h2>
          <p>Pesan tempat mancing favoritmu langsung dari aplikasi, tanpa perlu antre di lokasi.</p>
          <button class="pesan-btn font-lexend" @click="gotoBooking">Pilih Tempat</button>
        </div>
      </div>
    </section>

    <!-- Informasi Cuaca -->
    <section class="weather-section font-lexend">
      <div class="weather-box">
        <img :src="cuacaFoto" alt="Informasi Cuaca" />
        <div class="weather-text">
          <h2>Informasi Cuaca</h2>
          <p>Dapatkan update cuaca terkini agar kamu tahu waktu terbaik untuk memancing.</p>
        </div>
      </div>
    </section>

    <!-- Tentang Kami -->
    <section class="tentang-kami font-lexend">
      <h2 class="judul-tentang">Tentang Kami</h2>
      <div class="tentang-container">
        <div class="tentang-box" v-for="(img, i) in tentangImgs" :key="i">
          <img :src="img.src" :alt="img.alt" class="tentang-icon" />
          <p>{{ img.text }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import info1 from '../assets/informasiumum1.png'
import info2 from '../assets/informasiumum2.png'
import info3 from '../assets/informasiumum3.png'
import alatFoto from '../assets/alatpancing.jpeg'
import tempatFoto from '../assets/pemancingan.jpeg'
import cuacaFoto from '../assets/cuaca.png'
import tentang1 from '../assets/pertama.png'
import tentang2 from '../assets/chat.png'
import tentang3 from '../assets/fitur.jpg'
import tentang4 from '../assets/komunitas.png'
import tentang5 from '../assets/aman.png'
import { useRouter } from 'vue-router'

const router = useRouter()
function gotoSewa() { router.push('/sewaAlat') }
function gotoBooking() { router.push('/booking') }

const infoFotos = [info1, info2, info3]
const currentIndex = ref(0)
function nextSlide() { currentIndex.value = (currentIndex.value + 1) % infoFotos.length }
function prevSlide() { currentIndex.value = (currentIndex.value - 1 + infoFotos.length) % infoFotos.length }
let interval
onMounted(() => { interval = setInterval(nextSlide, 4000) })
onUnmounted(() => { clearInterval(interval) })

const tentangImgs = [
  { src: tentang1, alt: 'Booking Tempat', text: 'Website booking tempat pemancingan dan sewa alat pancing pertama di Bandung.' },
  { src: tentang2, alt: 'Chat 24/7', text: 'Melayani chat customer selama 24/7 dengan ramah.' },
  { src: tentang3, alt: 'Fitur Pemula', text: 'Menyediakan berbagai fitur yang membantu pemula dalam hal pemancingan.' },
  { src: tentang4, alt: 'Komunitas Pemancing', text: 'Menghubungkan para pemancing melalui komunitas untuk berbagi pengalaman dan tips memancing.' },
  { src: tentang5, alt: 'Pembayaran Aman', text: 'Transaksi cepat dan aman dengan berbagai metode pembayaran terpercaya.' }
]
</script>

<style>

@import '../assets/style.css';
</style>
