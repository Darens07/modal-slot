// Import vue component
import './src/assets/icons/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2';
import ModalSlot from './src/components/modals/modal-slot.vue';
import ModalVerify from './src/components/modals/types-modals/modal-verify.vue';

// Export components
export { ModalSlot, ModalVerify };

// Declare install function executed by Vue.use()
export function install(Vue) {
  if (install.installed) return;

	install.installed = true;

  Vue.component('ModalSlot', ModalSlot);
  Vue.component('ModalVerify', ModalVerify);
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
