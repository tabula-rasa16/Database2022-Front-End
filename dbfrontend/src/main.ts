import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './routes'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
VueAxios.prototype.$axios = axios
axios.defaults.baseURL = '/api'  //关键代码


const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.use(VueAxios,axios)
app.mount('#app')



