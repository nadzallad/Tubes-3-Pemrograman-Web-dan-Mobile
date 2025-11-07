<template>
  <div class="komunitas-page font-lexend">
    <!-- tombol buat komunitas baru -->
    <div class="buat-komunitas">
      <button class="buat-btn" @click="buatKomunitas">Buat Komunitas Baru +</button>
    </div>

    <!-- daftar komunitas -->
    <section class="komunitas-container">
      <div class="komunitas-card" v-for="(k, i) in daftarKomunitas" :key="i">
        <img :src="k.gambar" :alt="k.nama" class="komunitas-img" />
        <div class="komunitas-info">
          <h3><span class="dot">•</span>{{ k.nama }}</h3>
          <p>{{ k.lokasi }}</p>
          <p>{{ k.anggota }} Anggota</p>
          <!-- tombol detail -->
          <button class="detail-btn" @click="lihatDetail(k)">selengkapnya..</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import kom1 from '@/assets/kom1.jpg'
import kom2 from '@/assets/kom2.jpg'
import kom3 from '@/assets/kom3.jpg'
import kom4 from '@/assets/kom4.jpg'

const router = useRouter()

// fungsi untuk pindah ke form
function buatKomunitas() {
  router.push('/form-komunitas')
}

// daftar komunitas awal
const daftarKomunitas = ref([
  {
    gambar: kom1,
    nama: 'Mancing Mania',
    lokasi: 'Sukajadi',
    anggota: 30,
    deskripsi: 'Mancing Mania adalah komunitas pemancingan yang menyatukan para pecinta mancing dari berbagai kalangan. Di sini, kami berbagi hobi, pengalaman, tips, dan spot mancing terbaik, baik air tawar maupun laut. Dengan semangat kebersamaan dan kecintaan terhadap alam, Mancing Mania hadir sebagai wadah untuk mempererat tali silaturahmi antar pemancing dan menjadikan kegiatan mancing lebih seru, aman, dan bermanfaat.'
  },
  {
    gambar: kom2,
    nama: 'Juragan Empang',
    lokasi: 'Ujung Berung',
    anggota: 12,
    deskripsi: 'Tempat nongkrong para penguasa empang sejati. Kadang mancing, kadang rebahan di saung sambil dengerin suara air — soalnya di sini, strike bukan tujuan utama, tapi kebahagiaan yang penting.'
  },
  {
    gambar: kom3,
    nama: 'Kail Ngabers',
    lokasi: 'Cimahi',
    anggota: 17,
    deskripsi: 'Komunitas pancing paling hits se-Cimahi! Kami mancing bukan buat ikan, tapi buat konten story. Kalau gak dapet ikan, ya minimal dapet foto gaya megang kail sambil senyum tipis, asixx xixixi.'
  },
  {
    gambar: kom4,
    nama: 'Strike Squad',
    lokasi: 'Cibiru',
    anggota: 20,
    deskripsi: 'Strike Squad bukan sembarang komunitas kami dari Cibiru, pasukan pemancing paling solid! Kalau kail kosong bukan karena gak jago, tapi karena kasih kesempatan ikan lain buat hidup damai dulu. STRIKE!'
  }
])

// ambil tambahan dari sessionStorage
onMounted(() => {
  const tambahan = JSON.parse(sessionStorage.getItem('komunitas')) || []
  if (tambahan.length > 0) {
    daftarKomunitas.value.push(...tambahan)
  }
})

// fungsi ke detail
function lihatDetail(k) {
  sessionStorage.setItem('detailKomunitas', JSON.stringify(k))
  router.push({ path: '/detail-komunitas', query: { nama: k.nama } })
}
</script>

<style scoped>
@import "@/assets/styleKomunitas.css";
</style>
