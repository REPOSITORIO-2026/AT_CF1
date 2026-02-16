import Vue from 'vue'
import AOS from 'aos'

Vue.prototype.$aos = AOS
Vue.prototype.$aosRefresh = () => {
  for (let i = 0; i <= 3; i++) {
    setTimeout(() => {
      AOS.refresh()
    }, 1000 * i)
  }
}

// Importamos Popper y Bootstrap (en este orden)
import '@popperjs/core'
import 'bootstrap'
import '@/vendor/bootstrap/dist/css/bootstrap.min.css'

// Importamos Font Awesome (corrigiendo la ruta)
import '@fortawesome/fontawesome-free/css/all.min.css'

// Tus imports locales
import './js/GlobalComponents'
import './js/mixins/globalMixins'

Vue.config.productionTip = false

Vue.directive('child', {
  bind(el, binding) {
    el.appendChild(binding.value)
  },
})

export default Vue
