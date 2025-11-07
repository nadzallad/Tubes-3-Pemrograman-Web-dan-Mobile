<template>
  <div class="detail-komunitas font-lexend">
    <div class="detail-card">
      <img :src="komunitas.gambar" alt="foto komunitas" class="detail-img" />
      <h2>{{ komunitas.nama }}</h2>
      <p class="lokasi">{{ komunitas.lokasi }}</p>
      <p class="anggota">{{ komunitas.anggota }} Anggota</p>
      <p class="deskripsi">{{ komunitas.deskripsi }}</p>

      <button class="join-btn" @click="gabungKomunitas">Gabung Komunitas</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import '@/assets/styleDetailKomunitas.css'

const route = useRoute()
const komunitas = ref({})

// ambil data dari halaman sebelumnya
onMounted(() => {
  const data = JSON.parse(sessionStorage.getItem('detailKomunitas'))
  if (data && data.nama === route.query.nama) {
    komunitas.value = data
  }
})

// tombol join
function gabungKomunitas() {
  alert(`Kamu berhasil bergabung dengan komunitas ${komunitas.value.nama}! 🎣`)
}
</script>
