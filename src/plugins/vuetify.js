import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import zhHant from 'vuetify/es5/locale/zh-Hant'

Vue.use(Vuetify, {
  theme: {
    'primary': '#607d8b',
    'secondary': '#f6f6f6',
    'accent': '#82B1FF',
    'error': '#FF5252',
    'info': '#2196F3',
    'success': '#4CAF50',
    'warning': '#FFC107'

  },
  iconfont: 'md',
  lang: {
    locales: { zhHant },
    current: 'zh-Hant'
  }
})
