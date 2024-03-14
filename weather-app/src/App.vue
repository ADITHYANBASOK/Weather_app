<template>
<HelloWorld msg="Welcome to Your Vue.js App"/>
  <HomePage/>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import HomePage from './views/HomePage.vue'


export default {
  name: 'App',
  components: {
  //  HelloWorld,
    HomePage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
