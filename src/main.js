import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import App from './App.vue'

import router from '@/router/router'

// 导入组件

const app = createApp(App)

app.use(router)
app.use(createPinia())

app.mount('#app')

// createApp(App).mount('#app')
