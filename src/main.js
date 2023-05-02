import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import TabMenu from 'primevue/tabmenu'

import App from './App.vue'
import router from './router'

import 'primeflex/primeflex.css'
import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
//import "./index.css";
//import "./flags.css";

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(PrimeVue)
app.component('TabMenu', TabMenu)

app.mount('#app')
