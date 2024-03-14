<template>
  <div class="home">
  <div class="min-h-full">

    <LayoutPage/>
    <main class="pt-4">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">



    <WeatherDetails />
    <WeatherForecast />
    <NotificationSettings />
    <LocationList />
    <LocationHistory />
    <SignIn />
    <SignUp />
    </div>
    </main>
  </div>
  </div>
</template>

<script>
import WeatherDetails from '@/components/WeatherDetails.vue';
import WeatherForecast from '@/components/WeatherForecast.vue';
import NotificationSettings from '@/components/NotificationSettings.vue';
import LocationList from '@/components/LocationList.vue';
import LocationHistory from '@/components/LocationHistory.vue';
import SignIn from '@/components/SignIn.vue';
import SignUp from '@/components/SignUp.vue';
import LayoutPage from '@/components/LayoutPage.vue';


export default {
  name: 'HomePage',
  components: {
    WeatherDetails,
    WeatherForecast,
    NotificationSettings,
    LocationList,
    LocationHistory,
    SignIn,
    SignUp,
    LayoutPage

  },
  // Add any additional logic or data properties here
};
</script>

<style scoped>
/* Add styles for the home page */
</style>
