<template>
 <div class="col-span-4 bg-gray-200 p-4">

  <div class="weather-data">


    <div class="days-forecast">
      <h2>5-Day Forecast</h2>
      <ul class="weather-cards" >
          <div v-for="(forecast, index) in forecastData.list" :key="index">
          <div v-if="index > 1 && (index - 1) % 8 === 0">

        <li class="card" >
          <h3>{{forecast.dt_txt}} </h3>
          <h6>Temp: {{ forecast.main.temp }} °C</h6>
          <h6>Wind: daywind M/S</h6>
          <h6>Humidity:dayhumidity%</h6>
        </li>
        </div>
        </div>
      </ul>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      forecastData: {}
    };
  },
  mounted() {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=c152a89bf45a2585cab63bc112c3e28e`;
    axios.get(apiUrl)
      .then(response => {
        this.forecastData = response.data; // Assign weather data to the data property
        console.log(this.forecastData)

      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });

  },
  methods: {
    // Function to convert temperature to Celsius
    convertToCelsius(kelvin) {
      return Math.round(kelvin - 273.15);
    }
  }
};
</script>

<style scoped>
.weather-data {
  width: 100%;
}

.weather-data .days-forecast {
  margin-top: 20px;
}

.weather-data .days-forecast h2 {
  font-size: 1.5rem;
}

.weather-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.weather-cards .card {
  color: #fff;
  padding: 18px 16px;
  list-style: none;
  flex: 1 1 calc(20% - 20px); /* Adjusted width for responsiveness */
  background: #6c757d;
  border-radius: 5px;
}

.weather-cards .card h3 {
  font-size: 1.3rem;
  font-weight: 600;
}

@media (max-width: 1200px) {
  .weather-cards .card {
    flex-basis: calc(33.33% - 20px); /* Adjusted width for responsiveness */
  }
}

@media (max-width: 750px) {
  .weather-cards .card {
    flex-basis: calc(50% - 20px); /* Adjusted width for responsiveness */
  }
}
</style>
