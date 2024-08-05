import '@/style/index.scss'
import Router from './router/index'
import App from './App.vue'
import vant from 'vant'
const app = createApp(App)
app.use(Router).use(vant).use(createPinia()).mount('#app')
console.log(a);