<template>
  <div class="font-lexend">
    <!-- Daftar Tempat -->
<section class="places font-lexend">
  <h2 class="judul-section">Tempat Pemancingan Populer</h2>
  <div class="place-container">

    <!-- Tirta Asri -->
    <div class="place-card" @click="$router.push('/ulasan/tirta-asri')">
      <img src="@/assets/tempat1.jpg" alt="Tirta Asri" />
      <div class="place-info">
        <h3>Pemancingan Tirta Asri</h3>
        <p>Geger Kalong, Bandung</p>
        <div class="stars">★★★★★</div>
      </div>
    </div>

    <!-- Sumber Alam -->
    <div class="place-card" @click="$router.push('/ulasan/sumber-alam')">
      <img src="@/assets/tempat2.jpg" alt="Sumber Alam" />
      <div class="place-info">
        <h3>Pemancingan Sumber Alam</h3>
        <p>Kopo, Bandung</p>
        <div class="stars">★★★★☆</div>
      </div>
    </div>

    <!-- Lele -->
    <div class="place-card" @click="$router.push('/ulasan/lele')">
      <img src="@/assets/tempat3.jpg" alt="Pemancingan Lele" />
      <div class="place-info">
        <h3>Pemancingan Kolam Lele</h3>
        <p>Padalarang, Bandung</p>
        <div class="stars">★★★★☆</div>
      </div>
    </div>

  </div>
</section>



    <!-- Bagian Review -->
    <transition name="fade">
      <section
        v-if="selectedPlace"
        class="review-section font-lexend"
        key="selectedPlace"
      >
        <h2 class="judul-review">Ulasan untuk {{ selectedPlace }}</h2>

        <div
          class="review-card"
          v-for="(review, index) in reviews[selectedPlace]"
          :key="index"
        >
          <div class="profile">
            <img
              src="@/assets/profile.png"
              alt="User"
              class="profile-img"
            />
          </div>
          <div class="review-content">
            <h3 class="username">{{ review.username }}</h3>
            <div class="stars" v-html="getStars(review.rating)"></div>
            <p class="comment">"{{ review.comment }}"</p>
          </div>
        </div>
      </section>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'UlasanPage',
  data() {
    return {
      selectedPlace: null,
      reviews: {
        'Tirta Asri': [
          {
            username: 'Selika_kanajmi',
            rating: 4,
            comment:
              'Tempatnya bersih dan adem, cocok untuk melepas penat. Hanya saja perlu ditambahkan lampu penerangan kalau mancing di malam hari.'
          },
          {
            username: 'Rizkaaulia_',
            rating: 3,
            comment:
              'Tempatnya lumayan, kolam cukup besar. Tapi fasilitas perlu ditingkatkan, seperti kebersihan toilet dan ketersediaan tempat duduk.'
          },
          {
            username: 'Naura Faizah',
            rating: 5,
            comment:
              'Tempatnya sangat nyaman! Kolamnya luas dan ikannya banyak, recommend banget!'
          },
          {
            username: 'Nadzalladiva',
            rating: 5,
            comment:
              'Tempatnya bagus untuk healing, bisa bertemu teman baru yang sama-sama suka memancing.'
          }
        ],
        'Sumber Alam': [
          {
            username: 'Andri',
            rating: 4,
            comment:
              'Suasananya asri, tapi parkiran agak sempit.'
          },
          {
            username: 'Fitri',
            rating: 5,
            comment:
              'Pelayanannya bagus dan tempatnya bersih, cocok untuk keluarga!'
          }
        ],
        'Lele': [
          {
            username: 'Eko',
            rating: 4,
            comment: 'Murah dan santai, cocok buat pemula.'
          }
        ]
      }
    };
  },
  methods: {
    toggleReview(place) {
      // klik tempat yang sama = sembunyikan, klik lain = tampilkan review baru
      this.selectedPlace = this.selectedPlace === place ? null : place;
    },
    getStars(rating) {
      const full = '★'.repeat(rating);
      const empty = '☆'.repeat(5 - rating);
      return `<span class='stars-colored'>${full}</span>${empty}`;
    }
  }
};
</script>

<style scoped>
@import '../assets/styleUlasan.css';
</style>
