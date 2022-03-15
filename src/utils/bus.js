import Vue from 'vue'

const vue = new Vue({})
vue._$on = vue.$on
// eslint-disable-next-line func-names
vue.$on = function (event, fn) {
  // eslint-disable-next-line consistent-this
  const vm = this
  if (vm._events[event]) {
    vm.$off(event)
  }
  vm._$on(event, fn)
}
export default vue
