<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-300">
    <div class="wrapper transition duration-500 ease-in-out"
         style="position: relative; display: flex; justify-content: center; align-items: center; width: 400px; height: 500px; background: transparent; border: 5px solid #333; border-radius: 10px; transition: .5s;">
            <form @submit.prevent="handleSubmit" class="text-white">

        <h2 class="text-3xl mb-6 transition duration-500 ease-in-out"
            style="font-size: 2em; text-align: center; color: #000; transition: .5s;">
          Sign up
        </h2>
        <div class="input-group mb-6"
             style="position: relative; width: 320px; margin: 10px 0;">
          <input type="text" v-model="username" placeholder="Username" required
                 class="w-full h-12 bg-transparent border-2 border-gray-700 outline-none rounded-lg text-black px-4 transition duration-500 ease-in-out focus:border-blue-500"
                 style="width: 100%; height: 50px; background: transparent; border: 2px solid #333; outline: none; border-radius: 5px; font-size: 1em; color: #000; padding: 0 10px; transition: .5s;">
        </div>
        <div class="input-group mb-6"
             style="position: relative; width: 320px; margin: 10px 0;">
          <input type="email" v-model="email" placeholder="Email" required
                 class="w-full h-12 bg-transparent border-2 border-gray-700 outline-none rounded-lg text-black px-4 transition duration-500 ease-in-out focus:border-blue-500"
                 style="width: 100%; height: 50px; background: transparent; border: 2px solid #333; outline: none; border-radius: 5px; font-size: 1em; color: #000; padding: 0 10px; transition: .5s;">
        </div>
        <div class="input-group mb-6"
             style="position: relative; width: 320px; margin: 10px 0;">
          <input type="text" v-model="phone" placeholder="phone" required
                 class="w-full h-12 bg-transparent border-2 border-gray-700 outline-none rounded-lg text-black px-4 transition duration-500 ease-in-out focus:border-blue-500"
                 style="width: 100%; height: 50px; background: transparent; border: 2px solid #333; outline: none; border-radius: 5px; font-size: 1em; color: #000; padding: 0 10px; transition: .5s;">
        </div>
        <div class="input-group mb-6"
             style="position: relative; width: 320px; margin: 10px 0;">
          <input type="password" v-model="password" placeholder="Password" required
                 class="w-full h-12 bg-transparent border-2 border-gray-700 outline-none rounded-lg text-black px-4 transition duration-500 ease-in-out focus:border-blue-500"
                 style="width: 100%; height: 50px; background: transparent; border: 2px solid #333; outline: none; border-radius: 5px; font-size: 1em; color: #000; padding: 0 10px; transition: .5s;">
        </div>
       
        <button type="submit"
                class="w-full h-12 bg-green-500 border-green-500 border-none outline-none rounded-lg cursor-pointer text-white font-semibold transition duration-500 ease-in-out shadow-md"
                style="position: relative; width: 100%; height: 45px; background: #333; border: none; outline: none; border-radius: 5px; cursor: pointer; font-size: 1em; color: #fff; font-weight: 500; transition: .5s;">
          Sign Up
        </button>
        <div class="signUp-link mt-6"
             style="font-size: .9em; text-align: center; margin: 25px 0;">
          <p class="text-black">Already have an account <router-link :to="{ name: 'SignIn' }" class="block text-gray-700 font-semibold mt-2"
             style="color: red; text-decoration: none; font-weight: 600;">
  Sign In
</router-link></p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import router from '@/router';
import axios from 'axios';
export default {
  name: 'SignUpForm',
  data() {
    return {
      username: '',
      email: '',
      phone: '',
      password: ''
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const formData = {
          username: this.username,
          email: this.email,
          phone: this.phone,
          password: this.password
        };

        console.log("form", formData);

        const response = await axios.post('http://localhost:8081/auth/signup', formData);

        if (!response.data) {
          throw new Error('Failed to sign up');
        }
        if (response.status === 201) {
          router.push({ name: 'SignIn' });
        } 

      } catch (error) {
        console.error('Error signing up:', error.message);
      }
    }
  }
};
</script>