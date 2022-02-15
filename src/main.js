import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import Vue from 'vue'
// import axios from 'axios'

window.axios = require('axios')


createApp(App).use(router).mount('#app')

// STYLE FILES
import './assets/reset.css';
import './assets/grid.scss';
import './assets/global.scss';