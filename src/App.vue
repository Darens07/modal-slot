<template>
  <div id="app">
    <div class="text-center">
      <h1>Welcome to Your Vue.js + TypeScript App</h1>
      <a class="default-btn" @click="statusModal(true)">Modal Customizable</a>
    </div>
    <modal v-model="showModal" width="sm" layout_fixed>
      <div style="margin: 10px 0px;">
        Welcome to Modal-slot
      </div>
    </modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

// Components
import modal from './components/modal-slot.vue';

@Component({
  components: { modal },
})
export default class App extends Vue {
  // Data
  showModal: boolean = false;

  // Functions
  statusModal(value: boolean): void{
    this.showModal = value;
  }
}
</script>

<style media="screen">
#app{
  font-family: arial;
}
.text-center{
  text-align: center;
}
</style>
