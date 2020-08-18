<template>
  <div id="app">
    <div class="text-center">
      <h1>Welcome to Your Vue.js + TypeScript App</h1>
      <a class="btn" @click="statusModal(true)">Modal Customizable</a>
    </div>
    <modal v-model="showModal" card_class="card"></modal>
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
    console.log("Abriendo modal...");
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
.btn{
  cursor: pointer;
  background: green;
  color: #fff;
  padding: 7px 15px;
  margin-top: 10px;
}
</style>
