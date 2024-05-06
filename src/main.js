import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'highlight.js/styles/stackoverflow-light.css';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import hljsVuePlugin from '@highlightjs/vue-plugin';
hljs.registerLanguage('javascript', javascript);

//import './assets/main.css'
// import {i18n} from './locales/i18n.js'
// createApp(App).use(i18n).mount('#app') // 注入国际化函数$t

const app = createApp(App)
app.use(ElementPlus)
app.use(hljsVuePlugin)
app.mount('#app')
