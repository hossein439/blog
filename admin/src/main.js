import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia';
import router from './routes.js';
import CKEditor from '@ckeditor/ckeditor5-vue';

import 'vue-select/dist/vue-select.css';
import '@/assets/css/tailwind.css'
import 'sweetalert2/dist/sweetalert2.min.css';
import "@fontsource/montserrat";
import "@fontsource/ubuntu"; 

if(localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}

const pinia = createPinia();
const app = createApp(App);
app.use(CKEditor);
app.use(pinia);
app.use(router);
app.mount('#app');