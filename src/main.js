import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

// STYLE FILES
import './assets/reset.css';
import './assets/grid.scss';
import './assets/global.scss';