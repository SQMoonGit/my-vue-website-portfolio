import Vue from 'vue';
import Vuetify from 'vuetify';
import '@fortawesome/fontawesome-free/css/all.css';
import 'vuetify/dist/vuetify.css';
import '../assets/icons/mhw_all_icons/css/mhw-icons.css'


Vue.use(Vuetify);

export default new Vuetify({
  icons:{
    iconfont: 'fa',
  },
  theme:{
    dark: true
  }
})
