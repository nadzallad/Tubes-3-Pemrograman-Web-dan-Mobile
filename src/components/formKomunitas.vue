<template>
  <div class="form-komunitas font-lexend">
    <h2 class="judul-form">Form Komunitas</h2>

    <div class="form-container">
      <div class="form-card">
        <label>Nama Komunitas :</label>
        <input v-model="nama" type="text" placeholder="Masukkan Nama Komunitas" />
      </div>

      <div class="form-card">
        <label>Lokasi :</label>
        <input v-model="lokasi" type="text" placeholder="Masukkan Lokasi Komunitas" />
      </div>

      <div class="form-card">
        <label>Jumlah Anggota :</label>
        <input v-model="anggota" type="number" placeholder="Masukkan Jumlah Anggota" />
      </div>

      <div class="form-card">
        <label>Deskripsi :</label>
        <textarea v-model="deskripsi" rows="3" placeholder="Tuliskan deskripsi komunitas"></textarea>
      </div>

      <div class="form-card">
        <label>Upload Foto Komunitas :</label>
        <input type="file" @change="handleFile" />
      </div>

      <button class="submit-btn" @click="simpanKomunitas">Simpan Komunitas</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// form data
const nama = ref('')
const lokasi = ref('')
const anggota = ref('')
const deskripsi = ref('')
const foto = ref('')

// ubah file jadi URL supaya bisa langsung dipakai untuk <img>
function handleFile(e) {
  const file = e.target.files[0]
  if (file) {
    foto.value = URL.createObjectURL(file)
  }
}

// fungsi simpan
function simpanKomunitas() {
  const dataBaru = {
    nama: nama.value,
    lokasi: lokasi.value,
    anggota: anggota.value,
    deskripsi: deskripsi.value,
    gambar: foto.value || '' // bisa kosong kalau belum upload
  }

  // ambil data lama dari sessionStorage
  const daftar = JSON.parse(sessionStorage.getItem('komunitas')) || []
  daftar.push(dataBaru)

  // simpan lagi ke sessionStorage
  sessionStorage.setItem('komunitas', JSON.stringify(daftar))

  // balik ke halaman komunitas
  router.push('/komunitas')
}
</script>

<style scoped>
@import "@/assets/styleFormKomunitas.css";
</style>
