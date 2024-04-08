import { createApp } from 'vue'
import { router, store } from './providers'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import './style.css';
import 'primevue/resources/themes/aura-light-green/theme.css'

export const application = createApp(App).use(router).use(store).use(PrimeVue)