import Vue from 'vue/dist/vue.esm.js'
import Router from './router/router'
import Header from './components/header.vue'

// index.html.erb内の<div id="app">にマウントされる
var app = new Vue({
  // ヘッダーの各リンクを押すと本文が切り替わる
  router: Router,
  el: '#app',
  components: {
    'navbar': Header,
  }
});
