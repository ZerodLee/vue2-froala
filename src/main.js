// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')
import Vue from 'vue';
import App from './App.vue';
import froala from './index'

Vue.use(froala);

new Vue({
    render: (h) => h(App),
}).$mount('#app');