import './style/index.css';

import Vue from 'vue';
import App from './examples/App.vue';
import froala from './index'

Vue.use(froala);

new Vue({
    render: (h) => h(App),
}).$mount('#app');