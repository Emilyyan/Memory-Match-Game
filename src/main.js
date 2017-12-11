// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import SuiVue from 'semantic-ui-vue'

Vue.config.productionTip = false

Vue.use(SuiVue);

Vue.filter('two_digits', function (value) {
  if(value.toString().length <= 1)
  {
      return "0"+value.toString();
  }
  return value.toString();
});

/* eslint-disable no-new */
new Vue({
  el: '#App',
  template: '<App/>',
  components: { App }
})

