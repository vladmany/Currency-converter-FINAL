import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

export const outputBus = new Vue()
export const chart = new Vue()

Vue.directive("changestyle",{
    bind(e1) {
        console.log(e1);
        e1.style.color = "red";
        e1.style.fontSize = "30px";
    }
});

new Vue({
    render: h => h(App),
    store
}).$mount('#app')
