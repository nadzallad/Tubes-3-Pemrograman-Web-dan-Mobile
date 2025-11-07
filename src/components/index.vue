<template>
  <div class="index-container">
    <!-- Foto profil atau logo -->
    <img src="../assets/blekping.png" alt="logo" class="logo">

    <h1 class="title">Kelompok 9 🎣</h1>
    <ul>
        <li>Nadzalla Diva Asmara Sutedja (2408095)</li>
        <li>Naura Nur Faizah (2408352)</li>
        <li>Rizka Aulia (2403245)</li>
        <li>Selika Kanajmi (2408495)</li>
    </ul>
    <p class="subtitle">Website Sewa Alat & Tempat Pancing</p>

    <!-- Ikon sosmed -->
    <div class="social-links">
      <a href="#"><i class="fab fa-facebook"></i></a>
      <a href="#"><i class="fab fa-youtube"></i></a>
      <a href="#"><i class="fab fa-tiktok"></i></a>
    </div>

    <!-- Daftar link -->
    <div class="link-list">
      <router-link to="/beranda" class="link-item">🏠 Beranda</router-link>
      <router-link to="/booking" class="link-item">🌊 Pemesanan Tempat</router-link>
       <router-link to="/sewaAlat" class="link-item">🪣 Pemesanan Alat</router-link>
      <router-link to="/formBooking" class="link-item">📝 Formulir Pemesanan</router-link>
      <router-link to="/checkout" class="link-item">🎒 Formulir Sewa Alat</router-link>
      <router-link to="/ulasan" class="link-item">⭐ Ulasan Pengguna</router-link>
      <router-link to="/komunitas" class="link-item">👥 Komunitas</router-link>
      <router-link to="/riwayat" class="link-item">📜 Riwayat Transaksi</router-link>
      <router-link to="/profile" class="link-item">👤 Profil</router-link>
      <router-link to="/hubungi" class="link-item">☎️ Hubungi Kami</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage"
}
</script>

<style scoped>
/* 🌊 Background gradasi lembut */
.index-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #b5e2fa, #e4f1fe, #ffffff);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 130px 20px;
  font-family: 'Lexend', sans-serif;
  color: #023047;
}

/* 🪸 Logo */
.logo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 15px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  object-fit: cover;
}

/* 🧭 Judul dan subjudul */
.title {
  font-size: 2rem;
  font-weight: 700;
  color: #013a63;
  margin-bottom: 8px;
}

.subtitle {
  font-size: 1rem;
  color: #014f86;
  margin-bottom: 25px;
}

/* 🌐 Ikon sosmed */
.social-links {
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
}

.social-links a {
  color: #013a63;
  font-size: 1.6rem;
  transition: 0.3s;
}

.social-links a:hover {
  color: #00b4d8;
  transform: scale(1.15);
}

/* 🎣 Kotak link */
.link-list {
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

/* Kotak tombol */
.link-item {
  background: white;
  border-radius: 14px;
  padding: 15px 25px;
  text-decoration: none;
  color: #023047;
  font-weight: 600;
  font-size: 1.05rem;
  text-align: center;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.07);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

/* ✨ Efek hover */
.link-item:hover {
  background: linear-gradient(135deg, #90e0ef, #caf0f8);
  color: #03045e;
  transform: translateY(-3px);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.15);
}

/* 📱 Responsif */
@media (max-width: 600px) {
  .title {
    font-size: 1.6rem;
  }
  .link-item {
    font-size: 1rem;
  }
}
</style>
