import { createApp } from 'vue'
import App from './App.vue'
import 'tailwindcss/tailwind.css'
//import store from './store';
import router from './router';



createApp(App).use(router).mount('#app');


