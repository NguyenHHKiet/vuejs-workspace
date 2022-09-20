import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin)

createApp(App).mount('#app')
