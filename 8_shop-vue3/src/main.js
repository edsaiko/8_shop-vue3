import '@/styles/reset.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import {getCategoryApi} from "@/apis/testApi.js";

import '@/styles/global.css'
import '@/styles/reset.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

getCategoryApi().then(res=>{
    console.log(res)
})

app.mount('#app')
