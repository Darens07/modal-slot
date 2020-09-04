<template>
  <div id="app">
    <div class="text-center">
      <h1>Welcome to Your Vue.js + TypeScript App</h1>
      <div class="modals_example">
        <a class="default-btn" @click="openCustomizable(true)">Modal Customizable</a>
        <a class="default-btn modals_example_red" @click="openVerify(true)">Modal Verify</a>
      </div>
    </div>
    <modal-verify v-model="modalVerify" />
    <modal-custom v-model="modalCustom" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

// Components
import modalVerify from './components/modals/types-modals/modal-verify.vue';
import modalCustom from './components/modals/modal-slot.vue';

@Component({
  components: { modalVerify, modalCustom },
})
export default class App extends Vue {
  // Data
  modalCustom: boolean = false;
  modalVerify: boolean = false;
  jsonData: any = {
    title: 'Alerta',
    icon:{
      name: 'report_problem',
      style:{
        color: 'red',
        fontSize: '24px'
      }
    }
  };

  // Functions
  openVerify(value: boolean): void{
    this.modalVerify = value;
  }
  openCustomizable(value: boolean): void{
    this.modalCustom = value;
  }
}
</script>

<style lang="scss">
#app{
  font-family: arial;
}
.text-center{
  text-align: center;
}
.modals_example{
  display: flex;
  flex-direction: column;
  &_red{
    background: red;
    color: #fff;
  }
}
</style>
