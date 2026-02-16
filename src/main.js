import Vue from 'vue'
import App from './App.vue'
import router from './js/router'
import store from './js/store'
import legored from 'legored'

import './css/_styles.sass'

import config from './js/json'

const packageJson = require('../package.json')

Vue.use(legored, { config, packageJson })

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
