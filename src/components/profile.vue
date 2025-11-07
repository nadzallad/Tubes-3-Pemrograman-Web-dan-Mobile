<template>
  <div class="latar">
    <!-- Main -->
    <main class="container">
      <aside class="sidebar">
        <div class="profile-card">
          <img :src="profileFoto" alt="Foto Profil" class="profile-photo">
        </div>
          <div class="button">
            <router-link to="/profile">Biodata</router-link>
          </div>
          <div class="button">
            <router-link to="/profile/riwayatTransaksi">Riwayat Transaksi</router-link>
          </div>

      </aside>
      <section class="content">
       <router-view></router-view>
      </section>
    </main>
  </div>
</template>

<script setup>
import profileFoto from '../assets/profile.png'

</script>

<style scoped>
@import '../assets/styleProfile.css';
</style>
