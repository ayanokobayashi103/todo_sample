import Vue from 'vue/dist/vue.esm.js'
import Header from './componets/header.vue'

// index.html.erb内の<div id="app">にマウントされる
var app = new Vue({
  el: '#app',
  components: {
    'navbar': Header,
  }
});
