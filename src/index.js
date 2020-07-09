import popup from './popup.vue'

popup.install = function (Vue) {
  Vue.component(popup.name, popup)
}

// if ( typeof window !== 'undefined' && window.Vue ) {
//   install(window.Vue);
// }

export default popup
 