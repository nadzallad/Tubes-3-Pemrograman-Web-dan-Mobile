<template>
  <div class="container">
    <h2 style="color: #ffff; text-align: center;">Formulir Booking Tempat</h2>

    <!-- Nama & Nomor Telepon -->
    <label class="label">Nama :</label>
    <input type="text" v-model="nama" placeholder="Masukkan Nama Lengkap" class="input-box" />

    <label class="label">Nomor Telepon :</label>
    <input type="tel" v-model="telepon" placeholder="08xxxxxxxxxx" class="input-box" />

    <!-- Tempat yang dipesan -->
    <div class="row">
      <label class="label">Tempat yang Dipesan :</label>
      <div class="place-box">
        <img :src="tempat.gambar" :alt="tempat.nama" />
        <div class="place-info">
          <h3>{{ tempat.nama }}</h3>
          <div>Lokasi: {{ tempat.lokasi }}</div>
          <div>Harga Sewa: <span style="font-weight: 800;">Rp {{ tempat.harga.toLocaleString() }} / Jam</span></div>
        </div>
      </div>
    </div>

    <!-- Durasi & Posisi -->
    <div class="row flex-between">
      <div class="half">
        <label class="label">Durasi (Jam) :</label>
        <input type="number" min="1" v-model.number="durasi" placeholder="Contoh: 2" class="input-box" />
      </div>

      <!-- Total Harga -->
      <div class="row">
        <div class="total-box">
          Total Harga : Rp {{ totalHarga.toLocaleString() }},-
        </div>
      </div>

      <div class="half">
        <label class="label">Posisi Tempat Duduk :</label>
        <input type="text" v-model="posisi" placeholder="Contoh: Dekat Kolam Tengah" class="input-box" />
      </div>
    </div>
    

    <!-- Metode Pembayaran -->
    <div class="row">
      <label class="label">Metode Pembayaran :</label>
      <select v-model="metodeBayar">
        <option value="">Pilih metode pembayaran</option>
        <option value="transfer">Transfer Bank</option>
        <option value="qris">QRIS</option>
        <option value="cash">Cash</option>
        <option value="ewallet">E-Wallet (Dana, OVO, GoPay)</option>
      </select>
    </div>

    <!-- Tombol Submit -->
    <div class="row" style="text-align:center;">
      <button class="submit-button" @click="openPopup">Konfirmasi Booking</button>
    </div>

    <!-- Popup Konfirmasi -->
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
          <strong>0812-3456-7890 (DANA / OVO / GoPay)</strong>
        </div>

        <div v-else-if="metodeBayar === 'cash'">
          <p>Silakan melakukan pembayaran langsung di tempat.</p>
        </div>

        <p style="margin-top: 10px;">
          Detail pembayaran akan dikonfirmasi ke nomor <strong>{{ telepon }}</strong>.
        </p>

        <button class="submit-button" @click="closePopup">Selesai / Kembali ke Beranda</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

// Ambil data dari query
const tempat = ref({
  nama: route.query.nama || 'Tempat Tidak Diketahui',
  lokasi: route.query.lokasi || '-',
  gambar: route.query.gambar || '',
  harga: parseInt(route.query.harga || 0),
})

// Data form lainnya
const nama = ref('')
const telepon = ref('')
const durasi = ref(1)
const posisi = ref('')
const metodeBayar = ref('')
const showPopup = ref(false)

// Hitung total
const totalHarga = computed(() => durasi.value * tempat.value.harga)

// Fungsi popup
function openPopup() {
  if (!nama.value || !telepon.value || !metodeBayar.value || durasi.value <= 0) {
    alert('Silakan isi semua data dengan lengkap!')
    return
  }
  showPopup.value = true
}

function closePopup() {
  showPopup.value = false
  router.push('/')
}
</script>

<style scoped>
@import '../assets/styleForm.css';
</style>
