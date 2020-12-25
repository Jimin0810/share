import { createApp } from 'vue'
import App from './App'
import router from './router'
import store from './store'
import '/@/assets/style/bootstrap.less'
import '/@/assets/style/index.less'

createApp(App).use(router).use(store).mount('#app')
