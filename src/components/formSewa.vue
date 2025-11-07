<template>
  <div class="container">
    <h2 style="color: #ffff; text-align: center;">Formulir Pemesanan Alat</h2>
    
    <label class="label">Nama :</label>
    <input type="text" v-model="nama" placeholder="Masukkan Nama Lengkap" class="input-box">

    <label class="label">Alamat Email :</label>
    <input type="email" v-model="email" placeholder="contoh@email.com" class="input-box">

    <label class="label">List Alat yang Disewa / Dibeli :</label>
    <div class="info-box">
      <ol>
        <li v-for="(alat, i) in listAlat" :key="i">
          {{ alat.nama }} - Rp {{ alat.harga.toLocaleString() }}
        </li>
      </ol>
    </div>

    <div class="total-box">
      Total Harga : Rp {{ totalHarga.toLocaleString() }},-
    </div>

    <label class="label">Metode Pembayaran :</label>
    <select v-model="metodeBayar">
      <option value="">Pilih metode pembayaran</option>
      <option value="transfer">Transfer Bank</option>
      <option value="qris">QRIS</option>
      <option value="cash">Cash</option>
      <option value="ewallet">E-Wallet</option>
    </select>

    <button class="submit-button" @click="openPopup">Pesan Sekarang</button>

    <!-- ===== POPUP MODAL ===== -->
    <div v-if="showPopup" class="popup-overlay">
      <div class="popup-box">
        <h3>Konfirmasi Pembayaran</h3>
        <p>Mohon lakukan pembayaran sejumlah:</p>
        <h2>Rp {{ totalHarga.toLocaleString() }}</h2>

        <div v-if="metodeBayar === 'transfer'">
          <p>ke nomor rekening:</p>
          <strong>1234567890 (Bank BRI a.n. Mancingin Aja)</strong>
        </div>

        <div v-else-if="metodeBayar === 'qris'">
          <p>Scan QR berikut untuk melakukan pembayaran:</p>
          <img src="../assets/sumberalam.png" alt="QRIS" class="qr-image" />
        </div>

        <div v-else-if="metodeBayar === 'ewallet'">
          <p>ke nomor e-wallet:</p>
          <strong>0812-3456-7890 (DANA / OVO)</strong>
        </div>

        <div v-else-if="metodeBayar === 'cash'">
          <p>Silakan melakukan pembayaran langsung di tempat.</p>
        </div>

        <p style="margin-top: 10px;">Detail pembayaran juga telah dikirim ke email <strong>{{ email }}</strong>.</p>

        <button class="submit-button" @click="closePopup">Selesai / Kembali ke Beranda</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const nama = ref('')
const email = ref('')
const metodeBayar = ref('')
const listAlat = ref([])
const totalHarga = ref(0)
const showPopup = ref(false)

onMounted(() => {
  const data = localStorage.getItem('keranjang')
  if (data) {
    listAlat.value = JSON.parse(data)
    totalHarga.value = listAlat.value.reduce((sum, item) => sum + item.harga, 0)
  }
})

function openPopup() {
  if (!nama.value || !email.value || !metodeBayar.value) {
    alert('Silakan isi semua data dengan lengkap!')
    return
  }
  showPopup.value = true
}

function closePopup() {
  showPopup.value = false
  localStorage.removeItem('keranjang')
  router.push('/') // kembali ke beranda
}
</script>

<style scoped>
  @import '../assets/styleForm.css';
</style>
