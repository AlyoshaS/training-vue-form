import Vue from 'vue';

const bus = new Vue();

/* eslint-disable */
export default function install(Vue) {
  Object.defineProperties(Vue.prototype, {
    $bus: {
      get() {
        return bus;
      },
    },
  });
}
