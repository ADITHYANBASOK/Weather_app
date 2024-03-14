<template>
  <!-- First Column (4/12) -->
  <div class="col-span-1 bg-blue-500 p-4">
    <!-- Search box -->
    <div class="flex items-center">
      <input type="text" placeholder="Search..." class="w-full bg-white rounded-l-md px-4 py-2 outline-none focus:ring-blue-500 focus:border-blue-500">
      <button class="bg-green-500 text-white px-4 py-2 rounded-r-md">Search</button>
    </div>
  </div>
  <!-- Second Column (8/12) -->
<div class="col-span-3 bg-gray-200 p-4">
    <!-- Second column content -->
    <section class="vh-100 bg-gray-200">
      <div class="container py-1 h-full">
        <div class="flex justify-center items-center h-full">
          <div class="md:w-5/5 lg:w-4/4 xl:w-3/3 relative">
            <!-- Image Container -->
            <div :class="{ 'h-full': !weatherData, 'h-auto': weatherData }" class="relative w-full">
              <img src="../assets/images/SL-031821-41530-15.jpg" class="w-full h-auto" alt="weather" />
              <div class="absolute inset-0 bg-opacity-50 bg-blue-300"></div>
            </div>
            <!-- Text Container -->
            <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center text-center">
              <div v-if="weatherData" class="w-1/2 p-5">
                <h4 class="mb-0">{{ weatherData.name }},</h4>
                <p class="text-4xl my-3">{{ weatherData.temp }}°C</p>
                <p class="mb-2">Feels Like: <strong>{{ weatherData.main && weatherData.main.temp }}°C</strong></p>
                <p class="mb-2">Humidity: <strong>%</strong></p>
                <h5>description</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      weatherData: {}
    };
  },
  mounted() {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=c152a89bf45a2585cab63bc112c3e28e`;
    axios.get(apiUrl)
      .then(response => {
        this.weatherData = response.data.main; // Assign weather data to the data property
        console.log(this.weatherData)

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
/* Component-specific styles go here */
</style>