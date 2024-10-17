import FroalaEditor from './components/Froala.vue'
import FroalaView from './components/FroalaView.vue'
import FroalaExtend from './components/froala-extend'

export { FroalaEditor, FroalaView, FroalaExtend }

export default {
    install(vue, options) {
        vue.component('FroalaEditor', FroalaEditor);
        vue.component('FroalaView', FroalaView);
    }
}