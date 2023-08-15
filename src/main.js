import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
window.axios = require('axios');
createApp(App).use(store).use(router).mount('#app')
