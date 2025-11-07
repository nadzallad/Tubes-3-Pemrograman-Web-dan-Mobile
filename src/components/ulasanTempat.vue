<template>
  <div class="ulasan-page font-lexend">
    <h2 class="judul-review">Ulasan untuk {{ selectedPlaceDisplay }}</h2>

    <!-- Daftar Ulasan -->
    <div
      v-for="(review, index) in reviews[selectedPlace]"
      :key="index"
      class="review-card"
    >
      <div class="profile">
        <img src="@/assets/profile.png" alt="User" class="profile-img" />
      </div>
      <div class="review-content">
        <h3 class="username">{{ review.username }}</h3>
        <div class="stars" v-html="getStars(review.rating)"></div>
        <p class="comment">"{{ review.comment }}"</p>
      </div>
    </div>

    <!-- Kontainer Tambah Review -->
    <div class="add-review-container">
      <h3>Tambah Ulasan Kamu</h3>
      <form @submit.prevent="addReview">
        <input
          v-model="newReview.username"
          type="text"
          placeholder="Nama kamu"
          required
        />
        <select v-model.number="newReview.rating" required>
          <option disabled value="">Pilih Rating</option>
          <option v-for="n in 5" :key="n" :value="n">{{ n }} ★</option>
        </select>
        <textarea
          v-model="newReview.comment"
          placeholder="Tulis ulasan kamu..."
          required
        ></textarea>
        <button type="submit">Kirim</button>
      </form>
    </div>

    <button class="back-btn" @click="$router.push('/ulasan')">← Kembali</button>
  </div>
</template>

<script>
export default {
  name: "UlasanTempat",
  data() {
    return {
      selectedPlace: "",
      reviews: {
        "tirta-asri": [
          {
            username: "Selika_kanajmi",
            rating: 4,
            comment:
              "Tempatnya bersih dan adem, cocok untuk melepas penat. Hanya saja perlu ditambahkan lampu penerangan kalau mancing di malam hari.",
          },
          {
            username: "Rizkaaulia_",
            rating: 3,
            comment:
              "Tempatnya lumayan, kolam cukup besar. Tapi fasilitas perlu ditingkatkan, seperti kebersihan toilet dan ketersediaan tempat duduk.",
          },
          {
            username: "Naura Faizah",
            rating: 5,
            comment:
              "Tempatnya sangat nyaman! Kolamnya luas dan ikannya banyak, recommend banget!",
          },
        ],
        "sumber-alam": [
          {
            username: "Andri",
            rating: 4,
            comment: "Suasananya asri, tapi parkiran agak sempit.",
          },
          {
            username: "Fitri",
            rating: 5,
            comment:
              "Pelayanannya bagus dan tempatnya bersih, cocok untuk keluarga!",
          },
        ],
        lele: [
          {
            username: "Eko",
            rating: 4,
            comment: "Murah dan santai, cocok buat pemula.",
          },
        ],
      },
      newReview: {
        username: "",
        rating: "",
        comment: "",
      },
    };
  },
  computed: {
    selectedPlaceDisplay() {
      return this.selectedPlace
        .replace("-", " ")
        .replace(/\b\w/g, (l) => l.toUpperCase());
    },
  },
  methods: {
    getStars(rating) {
      const full = "★".repeat(rating);
      const empty = "☆".repeat(5 - rating);
      return `<span class='stars-colored'>${full}</span>${empty}`;
    },
    addReview() {
      if (!this.newReview.username || !this.newReview.rating || !this.newReview.comment) {
        alert("Harap isi semua kolom ulasan!");
        return;
      }
      this.reviews[this.selectedPlace].push({ ...this.newReview });
      this.newReview = { username: "", rating: "", comment: "" };
    },
  },
  mounted() {
    this.selectedPlace = this.$route.params.namaTempat;
  },
};
</script>

<style scoped>
@import "../assets/styleulasanTempat.css";
</style>
