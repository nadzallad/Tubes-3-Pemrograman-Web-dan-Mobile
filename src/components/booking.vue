<template>
  <div class="font-lexend">
    <section class="pilih-tempat font-lexend">
      <div class="pilih-header">
        <h2>Pilih Tempat</h2>
        <div class="search-box">
          <input type="text" v-model="search" placeholder="Cari Tempat" />
          <button>
            <img :src="searchIcon" alt="Cari" />
          </button>
        </div>
      </div>

      <div class="tempat-container">
        <div
          class="tempat-box"
          v-for="(tempat, index) in filteredTempat"
          :key="index"
        >
          <img :src="tempat.gambar" :alt="tempat.nama" />
          <div class="tempat-info">
            <h3>{{ tempat.nama }}</h3>
            <p>Lokasi: {{ tempat.lokasi }}</p>
            <div class="stars">{{ tempat.rating }}</div>
            <button class="pesan-btn" @click="goToFormBooking(tempat)">Pesan Sekarang</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

// Import gambar dari src/assets
import searchIcon from "@/assets/search.png";
import tirtaasri from "@/assets/tirtaasri.jpg";
import sumberalam from "@/assets/sumberalam.jpg";
import aero from "@/assets/aero.jpg";
import chacujo from "@/assets/chacujo.jpg";

const router = useRouter();
const search = ref("");

// Daftar tempat dengan import gambar
const daftarTempat = ref([
  { nama: "Pemancingan Tirta Asri", lokasi: "Gegerkalong", rating: "★★★★★", gambar: tirtaasri },
  { nama: "Pemancingan Sumber Alam", lokasi: "Kopo", rating: "★★★", gambar: sumberalam },
  { nama: "Pemancingan Aero", lokasi: "Kiara Condong", rating: "★★★★★", gambar: aero },
  { nama: "Pemancingan Chacujo", lokasi: "Cicadas", rating: "★★", gambar: chacujo },
]);

// Filter tempat berdasarkan search
const filteredTempat = computed(() => {
  return daftarTempat.value.filter((t) =>
    t.nama.toLowerCase().includes(search.value.toLowerCase())
  );
});

// Navigasi ke halaman booking
const goToFormBooking = (tempat) => {
  router.push({
    path: '/formBooking',
    query: {
      nama: tempat.nama,
      lokasi: tempat.lokasi,
      gambar: tempat.gambar,
      harga: 10000, // misalnya harga per jam
    },
  })
};
</script>

<style scoped>
@import "@/assets/styleBooking.css";


</style>
