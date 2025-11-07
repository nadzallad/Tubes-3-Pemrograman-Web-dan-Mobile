<template>
  <div class="font-lexend">
    <section class="riwayat-transaksi font-lexend">
      <div class="riwayat-header">
        <h2>Riwayat Transaksi</h2>
        <div class="search-box">
          <input type="text" v-model="search" placeholder="Cari transaksi..." />
          <button>
            <img :src="searchIcon" alt="Cari" />
          </button>
        </div>
      </div>

      <div class="transaksi-container">
        <div
          class="transaksi-box"
          v-for="(trx, index) in filteredTransaksi"
          :key="index"
        >
          <img :src="trx.gambar" class="gambar-transaksi" />

          <div class="transaksi-info">
            <h3><b>{{ trx.tanggal }}</b></h3>

            <ul>
              <li v-for="(item, i) in trx.items" :key="i">
                {{ item.nama }} - Rp{{ item.harga.toLocaleString("id-ID") }}
              </li>
            </ul>

            <p><b>Total:</b> Rp{{ trx.total.toLocaleString("id-ID") }}</p>
          </div>
        </div>

        <p v-if="filteredTransaksi.length === 0" class="kosong">
          Tidak ada transaksi ditemukan.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// Import aset
import searchIcon from "@/assets/search.png";
import tirtaasri from "@/assets/tirtaasri.jpg";
import sumberalam from "@/assets/sumberalam.jpg";
import aero from "@/assets/aero.jpg";
import chacujo from "@/assets/chacujo.jpg";

const search = ref("");

// Data transaksi menggunakan array items (bisa lebih dari 1 barang)
const daftarTransaksi = ref([
  {
    id: 1,
    tanggal: "03-11-2025",
    items: [
      { nama: "Joran Pancing Shimano", harga: 30000 },
      { nama: "Senar Pancing", harga: 10000 },
    ],
    gambar: tirtaasri,
  },
  {
    id: 2,
    tanggal: "28-10-2025",
    items: [{ nama: "Kail Pancing", harga: 10000 }],
    gambar: sumberalam,
  },
  {
    id: 3,
    tanggal: "15-10-2025",
    items: [{ nama: "Umpan", harga: 40000 }],
    gambar: aero,
  },
  {
    id: 4,
    tanggal: "22-09-2025",
    items: [{ nama: "Karpet", harga: 20000 }],
    gambar: chacujo,
  },
]);

// Filter + hitung total otomatis
const filteredTransaksi = computed(() =>
  daftarTransaksi.value
    .filter((trx) =>
      // Cocokkan nama barang ATAU tanggal
      trx.items.some((item) =>
        item.nama.toLowerCase().includes(search.value.toLowerCase())
      ) ||
      trx.tanggal.toLowerCase().includes(search.value.toLowerCase())
    )
    .map((trx) => ({
      ...trx,
      total: trx.items.reduce((sum, item) => sum + item.harga, 0),
    }))
);

</script>

<style scoped>
@import "@/assets/styleBooking.css";
</style>
