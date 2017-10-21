import Hello from './Hello/Hello.vue'

const options = {
    Hello
}

let install = function(Vue) {
    for (let c in options) {
        let component = options[c]
        Vue.component(component.name, Vue.extend(component))
    }
}

export default {
    ...options,
    install
}