<template>
  <header>
    <!-- Bar atas -->
    <nav class="navbartop font-lexend">
      <div class="brand">Mancingin Aja</div>
    </nav>

    <!-- Navbar utama -->
    <nav class="navbar font-lexend">
      <!-- Tombol toggle kiri -->
      <div class="menu-toggle" @click="menuTerbuka = !menuTerbuka">
        ☰ Menu
      </div>

      <!-- Daftar menu (toggle muncul/hilang) -->
      <ul class="nav-links" :class="{ aktif: menuTerbuka }">
        <li><router-link to="/index">Index</router-link></li>
        <li><router-link to="/beranda">Beranda</router-link></li>
        <li><router-link to="/ulasan">Ulasan</router-link></li>
        <li><router-link to="/komunitas">Komunitas</router-link></li>
        <li>
          <a href="https://www.instagram.com/charc1nt?igsh=ZTRqbWM4c2FnMG5r" target="_blank" rel="noopener noreferrer">
            Hubungi
          </a>
        </li>
      </ul>

      <!-- Kanan: login dan profil -->
      <div class="nav-right">
        <button class="login-btn font-lexend" @click="showLogin = true">Masuk</button>
        <img :src="profileFoto" alt="Profile" class="profile-icon" @click="openProfile" />
      </div>
    </nav>
  </header>

  <!-- Popup Login -->
  <div v-if="showLogin" class="overlay">
    <div class="login-container">
      <button class="close" @click="showLogin = false">X</button>
      <div class="login-box">
        <h2 style="text-align:center;">Masuk</h2>
        <form @submit.prevent="submitLogin">
          <input v-model="email" type="text" placeholder="Email" class="font-lexend" required /><br />
          <input v-model="password" type="password" placeholder="Kata Sandi" class="font-lexend" required /><br />
          <button type="submit" class="font-lexend">Masuk</button>
        </form>
        <div class="daftar-text font-lexend">
          Belum punya akun? <a href="#" @click.prevent="openRegister">Buat akun</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Popup Register -->
  <div v-if="showRegister" class="overlay">
    <div class="login-container">
      <button class="close" @click="showRegister = false">X</button>
      <div class="login-box">
        <h2 style="text-align:center;">Buat Akun Baru</h2>
        <form @submit.prevent="submitRegister">
          <input type="text" placeholder="Nama Lengkap" class="font-lexend" required />
          <input type="email" placeholder="Email" class="font-lexend" required />
          <input type="text" placeholder="Domisili" class="font-lexend" required />
          <input type="password" placeholder="Kata Sandi" class="font-lexend" required />
          <input type="password" placeholder="Ulangi Kata Sandi" class="font-lexend" required />
          <button type="submit" class="font-lexend">Daftar</button>
        </form>
        <div class="bottom-text font-lexend">
          Sudah punya akun? <a href="#" @click.prevent="openLogin">Masuk</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import profileFoto from '@/assets/profile.png'

const router = useRouter()
const showLogin = ref(false)
const showRegister = ref(false)
const menuTerbuka = ref(false)
const email = ref('')
const password = ref('')

function openProfile() {
  router.push('/profile')
}

function openRegister() {
  showLogin.value = false
  showRegister.value = true
}

function openLogin() {
  showRegister.value = false
  showLogin.value = true
}

function submitLogin() {
  if (email.value === 'user@example.com' && password.value === '1234') {
    alert('Login berhasil!')
    showLogin.value = false
    router.push('/profile')
  } else {
    alert('Email atau kata sandi salah!')
  }
}

function submitRegister() {
  alert('Akun berhasil dibuat! Silakan login.')
  showRegister.value = false
  showLogin.value = true
}
</script>

<style scoped>
@import "@/assets/style.css";
</style>
