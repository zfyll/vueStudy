import Vue from 'vue'
import App from './App.vue'
// h5rem适配
import 'amfe-flexible/index.js'
import 'vant/lib/button/style/less';

Vue.config.productionTip = false

import { Button, Cell, CellGroup,Image as VanImage, Lazyload, Swipe, SwipeItem} from 'vant';
Vue.use(Button)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(VanImage)
Vue.use(Lazyload);
Vue.use(Swipe);
Vue.use(SwipeItem);

new Vue({
  render: h => h(App)
}).$mount('#app')
