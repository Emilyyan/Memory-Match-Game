// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import SuiVue from 'semantic-ui-vue'
Vue.config.productionTip = false
Vue.use(SuiVue);

/* eslint-disable no-new */
new Vue({
  el: '#App',
  template: '<App/>',
  components: { App }
  /*props: {
    /*image_src: ['https://pbs.twimg.com/profile_images/936736533457002496/d9vv-4Yn_400x400.jpg', 
    'https://i.pinimg.com/736x/83/72/12/837212dd8b71f9b5d175ac98f2c7668a--pikachu-tail-pokemon.jpg',
    'https://i.pinimg.com/736x/d3/9b/39/d39b3927b6ea9146cf19596ecbbb92bf--pokemon-lol-pokemon-starters.jpg']

  }*/
  
})
