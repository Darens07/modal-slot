// Import vue component
import ButtonOne from './src/components/ButtonOne.vue'
import ButtonTwo from './src/components/ButtonTwo.vue'

// Export components
export { ButtonOne, ButtonTwo }

// Declare install function executed by Vue.use()
export function install(Vue) {
  if (install.installed) return;

	install.installed = true;

  Vue.component('ButtonOne', ButtonOne)
  Vue.component('ButtonTwo', ButtonTwo)
}

const plugin = {
	install,
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}

if (GlobalVue) {
	GlobalVue.use(plugin);
}


// Export lib how plugin
export default { install: install }
