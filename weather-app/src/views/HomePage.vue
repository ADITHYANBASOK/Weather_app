<template>
  <div class="container mx-auto p-4 bg-gray-300">
    <LayoutPage />
    <div class="flex flex-col md:flex-row ">
      <div class="md:w-1/3 mr-4">
        <WeatherSearching @weather-updated="updateWeatherData"  @search-location="updateLocation"  />
      </div>
      <div class="md:w-2/3">
        <WeatherDetails :weatherData="weatherData"/>
        <WeatherForecast :location="location" :apiKey="apiKey" />
      </div>
    </div>
  </div>
</template>

<script>
import LayoutPage from '../components/LayoutPage.vue'
import WeatherSearching from '../components/WeatherSearching.vue'
import WeatherDetails from '../components/WeatherDetails.vue'
import WeatherForecast from '../components/WeatherForecast.vue';

export default {
  name: 'HomeView',
  components: {
    LayoutPage,
    WeatherSearching,
    WeatherDetails,
    WeatherForecast,
  },
  data() {
    return {
      weatherData: null,
      location: '',
      apiKey: '3fb88be94d55466ac863dba74951b1fc'
    }
  },
  methods: {
    updateWeatherData(data) {
      this.weatherData = data;
    },
    updateLocation(location) {
      this.location = location;
    }
  } 
}
</script>

<style lang="">
</style>

