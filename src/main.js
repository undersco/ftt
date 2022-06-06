import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//03/06
import store from "./store";

createApp(App).use(router).use(store).mount('#app')
