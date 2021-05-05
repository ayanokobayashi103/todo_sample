// 登録されたパスとコンポーネントで画面内を差し替えることができます。
import Vue from 'vue/dist/vue.esm.js'
import VueRouter from 'vue-router'
import Index from '../components/index.vue'
import About from '../components/about.vue'
import Contact from '../components/contact.vue'

Vue.use(VueRouter)

// パスとコンポーネントを結びつけます。
export default new VueRouter({
// mode: 'history'とすることで、HTMLのhistory APIを使用して、一見同じビュー内ですがURLを書き換えることができます
  mode: 'history',
  routes: [
    { path: '/', component: Index },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
  ],
})
