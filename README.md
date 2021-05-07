# Vue+Rails練習アプリ
### 目的
frontendはVue.js、backendがRailsというアプリの大まかな作りを学ぶ  
下記のQiita記事でVue.jsとRailsのアプリを作ってみる。  

[Vue.jsとRailsでTODOアプリのチュートリアルみたいなものを作ってみた](https://qiita.com/naoki85/items/51a8b0f2cbf949d08b11#axios%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6api%E9%80%9A%E4%BF%A1)

起動方法  
`
bin/server  
`  
localhost:5000

## Gem
  * gem 'foreman'
  * gem 'jquery-rails'
  * gem 'materialize-sass' (cssのフレームワーク)
  * gem 'material_icons'

## HTTPライブラリ
  [https://axios-http.com/](https://axios-http.com/)  
  下記の様に記述するとAPI通信ができる様になる  
  `import axios from 'axios';`  
  `axios.get('/api/tasks').then((response) => {`  
  `axios.post('/api/tasks', { task: { name: this.newTask } }).then((response) => {`

## Vue-Router
  [https://router.vuejs.org/ja/](https://router.vuejs.org/ja/)
