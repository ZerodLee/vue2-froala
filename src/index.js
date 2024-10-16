import './style/index.css';

import Froala from './components/Froala.vue'
import FroalaView from './components/FroalaView.vue'

export { Froala, FroalaView }

export default {
    install(vue, options) {
        vue.component('Froala', Froala);
        vue.component('FroalaView', FroalaView);
    }
}