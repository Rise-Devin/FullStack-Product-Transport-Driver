import Vue from 'vue'
import Vonic from 'vonic/src/index.js'
import VueResource from 'vue-resource'
const jQuery = require('jquery');
window.jQuery = jQuery;
window.$ = window.jQuery;
// Page Components
import Index from './components/Index.vue'
import About from './components/About.vue'
import Intro from './components/Intro.vue'
import Login from './components/Login.vue'
import Order from './components/Order.vue'
import Welcome from './components/Welcome.vue'
import Register from './components/Register.vue'
import SearchOrder from './components/SearchOrder.vue'
import MyOrder from './components/MyOrder.vue'
import SideMenu from './components/sidemenu.vue'
import MyCustomer from './components/myCustomer.vue'
import Chart from './components/Chart.vue'
import ScreenShot from './components/screenshot.vue'
import Vconfirm from '../confirm'





import store from './module/vuex.js'
// import Router from 'vue-router'

Vue.use(VueResource)
Vue.use(Vconfirm)

require('./static/css/style.less')
require('../node_modules/cropperjs/dist/cropper.min.css');
require('../font-awesome/css/font-awesome.css');
// require('font-awesome/css/font-awesome.css');
// Routes
const routes = [
  { path: '/Index', component: Index },
  { path: '/about', component: About },
  { path: '/sidemenu', component: SideMenu },
  { path: '/customer', component: MyCustomer },
  { path: '/chart', component: Chart },
  { path: '/screenshot', component: ScreenShot },

  { path: '/order', component: Order ,
    children:[
        {path:'search',component:SearchOrder},
        {path:'mine',component:MyOrder},
  ]},
  { path: '/intro', component: Intro,
    children:[
        {path:'welcome', component:Welcome},
        {path:'login', component:Login},
        {path:'register', component:Register},
  ]},
  // { path: '/login', component: Login },
   {path:'*', redirect:'/intro/welcome'}  //404


]



Vue.use(Vonic.app, {
  routes: routes,
  store,
})
