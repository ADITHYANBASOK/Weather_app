<template>
<div class="flex justify-center items-center min-h-screen bg-gray-300">
    <div class="wrapper transition duration-500 ease-in-out"
         style="position: relative; display: flex; justify-content: center; align-items: center; width: 400px; height: 500px; background: transparent; border: 5px solid #333; border-radius: 10px; transition: .5s;">
      <form action="" class="text-white" @submit.prevent="signIn">
        <h2 class="text-3xl mb-6 transition duration-500 ease-in-out"
            style="font-size: 2em; text-align: center; color: #000; transition: .5s;">
          Login
        </h2>
        <div class="input-box mb-6"
             style="position: relative; width: 320px; margin: 30px 0;">
          <span class="icon text-white" style="position: absolute; left: 10px; color: #fff; font-size: 1.2em; line-height: 55px; transition: .5s;">
            <ion-icon name="person"></ion-icon>
          </span>
          <input type="email" v-model="email" placeholder="email" required 
                 class="w-full h-12 bg-transparent border-2 border-gray-700 outline-none rounded-lg text-black px-4 transition duration-500 ease-in-out focus:border-blue-500"
                 style="width: 100%; height: 50px; background: transparent; border: 2px solid #333; outline: none; border-radius: 5px; font-size: 1em; color: #000; padding: 0 10px 0 35px; transition: .5s;">
        </div>
        <div class="input-box mb-6"
             style="position: relative; width: 320px; margin: 30px 0;">
          <span class="icon text-white" style="position: absolute; left: 10px; color: #fff; font-size: 1.2em; line-height: 55px; transition: .5s;">
            <ion-icon name="lock-closed"></ion-icon>
          </span>
          <input type="password" v-model="password" placeholder="Password" required 
                 class="w-full h-12 bg-transparent border-2 border-gray-700 outline-none rounded-lg text-white px-4 transition duration-500 ease-in-out focus:border-blue-500"
                 style="width: 100%; height: 50px; background: transparent; border: 2px solid #333; outline: none; border-radius: 5px; font-size: 1em; color: #000; padding: 0 10px 0 35px; transition: .5s;">
        </div>
        <div class="forgot-pass mb-6"
             style="margin: -15px 0 15px;">
          <a href="#" class="text-white hover:underline"
             style="color: #000; font-size: .9em; text-decoration: none;">Forgot password?</a>
        </div>
        <button type="submit"
                class="w-full h-12 bg-green-500 border-green-500 border-none outline-none rounded-lg cursor-pointer text-white font-semibold transition duration-500 ease-in-out shadow-md"
                style="position: relative; width: 100%; height: 45px; background: #333; border: none; outline: none; border-radius: 5px; cursor: pointer; font-size: 1em; color: #fff; font-weight: 500; transition: .5s;">
          Login
        </button>
        <div class="register-link mt-6"
             style="font-size: .9em; text-align: center; margin: 25px 0;">
          <p class="text-black"
             style="color: #000;">Don't have an account? <router-link :to="{ name: 'SignUp' }" class="block text-gray-700 font-semibold mt-2"
             style="color: red; text-decoration: none; font-weight: 600;">
  Sign UP
</router-link>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  
  methods: {
  async signIn() {
    try {
      const formData = {
        email: this.email,
        password: this.password
      };

      const response = await axios.post('https://weather-app-six-henna-77.vercel.app/auth/login', formData);

      if (response.data && response.data.token) {
        // Optionally, you can store the token in local storage or Vuex state for future use
        localStorage.setItem('token', response.data.token);

        // Navigate to the home page after successful login
        this.$router.push('/home');
      } else {
        throw new Error('Failed to sign in');
      }
    } catch (error) {
      console.error('Error signing in:', error.message);
      // Optionally, handle sign-in error (e.g., show an error message to the user)
    }
  }
}
}
</script>