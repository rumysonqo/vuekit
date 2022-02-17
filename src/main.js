import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'vue-material-design-icons/styles.css'
import axios from 'axios'
import VueAxios from 'vue-axios'



//import Vuetify from 'vuetify/lib'

//Vue.use(Vuetify)

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')