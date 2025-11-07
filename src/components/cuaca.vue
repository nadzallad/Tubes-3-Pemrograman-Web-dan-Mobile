<template>
  <section class="cuaca-section">
    <div class="weather-box" v-if="!loading && currentWeather">
      <h2 class="weather-header">Informasi Cuaca</h2>
      <div class="weather-info">
        <img
          :src="`https://openweathermap.org/img/wn/${currentWeather.icon}@2x.png`"
          :alt="currentWeather.desc"
        />
        <div class="weather-details">
          <h3>{{ currentWeather.location }}</h3>
          <p>{{ currentWeather.date }}</p>
          <h1>{{ currentWeather.temp }}°C</h1>
          <p>{{ capitalize(currentWeather.desc) }}</p>
        </div>
      </div>

      <h3 style="margin-top: 40px;">Perkiraan Cuaca</h3>
      <div class="forecast">
        <div class="forecast-day" v-for="(day, i) in forecast" :key="i">
          <p><b>{{ formatDay(day.dt_txt) }}</b></p>
          <img
            :src="`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`"
            alt="icon"
          />
          <p>{{ Math.round(day.main.temp_min) }}° - {{ Math.round(day.main.temp_max) }}°</p>
        </div>
      </div>
    </div>

    <div class="weather-box" v-else>
      <p v-if="loading">Memuat data cuaca...</p>
      <p v-else>Gagal memuat data cuaca 😢</p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const apiKey = "a60fafb7036e4ce4d5a0f95daefa20aa";
const city = "Bandung";

const loading = ref(true);
const currentWeather = ref(null);
const forecast = ref([]);

function capitalize(text) {
  return text ? text.charAt(0).toUpperCase() + text.slice(1) : "";
}

function formatDay(dtTxt) {
  return new Date(dtTxt).toLocaleDateString("id-ID", { weekday: "short" });
}

async function getWeather() {
  console.log("⏳ Mengambil data cuaca...");

  try {
    // Gunakan proxy agar CORS tidak error
    const proxy = "https://api.allorigins.win/raw?url=";

    const currentRes = await fetch(
      `${proxy}https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=id&appid=${apiKey}`
    );
    const forecastRes = await fetch(
      `${proxy}https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=id&appid=${apiKey}`
    );

    console.log("✅ Respons diterima, parsing JSON...");
    const currentData = await currentRes.json();
    const forecastData = await forecastRes.json();

    console.log("🌤️ Data saat ini:", currentData);
    console.log("🔮 Data prakiraan:", forecastData);

    if (currentData.cod != 200) {
      throw new Error(currentData.message || "Gagal ambil data cuaca");
    }

    currentWeather.value = {
      location: currentData.name,
      temp: Math.round(currentData.main.temp),
      desc: currentData.weather[0].description,
      icon: currentData.weather[0].icon,
      date: new Date().toLocaleDateString("id-ID"),
    };

    forecast.value = forecastData.list.filter((_, i) => i % 8 === 0).slice(0, 5);
    console.log("✅ Cuaca berhasil dimuat.");
  } catch (err) {
    console.error("❌ Error ambil cuaca:", err);
    currentWeather.value = null;
  } finally {
    loading.value = false;
  }
}

onMounted(getWeather);
</script>

<style scoped>
.cuaca-section {
  text-align: center;
  padding: 20px;
}
.weather-info {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.forecast {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}
.forecast-day {
  text-align: center;
}
.weather-header {
  margin-bottom: 10px;
}
</style>
