import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router/router'
import App from './App.vue'
import './style.css'

// 导入组件

const app = createApp(App)

app.use(router)
app.use(createPinia())

app.mount('#app')

// createApp(App).mount('#app')
