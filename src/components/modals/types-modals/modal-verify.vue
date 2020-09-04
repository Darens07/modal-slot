<template lang="html">
  <modal-slot
    width="sm"
    v-model="modalStatus"
    :persistent="(!no_persistent) ? true : false "
    :title=" (jsonData && jsonData.title) ? jsonData.title : 'Alerta' "
    :icon="{
      name: (jsonData && jsonData.icon && jsonData.icon.name) ? jsonData.icon.name : 'report_problem',
      style: (jsonData && jsonData.icon && jsonData.icon.style) ? jsonData.icon.style : {color: 'red'}
    }"
  >
    <!-- Content modal -->
    <slot>
      Modal para verificar cualquier acción
    </slot>

    <!-- Footer -->
    <div slot="footer">
      <slot name="footer">
        <div class="modal_verify_footer">
          <a
            @click="$emit('acepted', (jsonData && jsonData.dataEmit) ? jsonData.dataEmit : false)"
            class="modal_verify_actions modal_verify_actions_acepted"
          >
            Aceptar
          </a>
          <a
            @click="modalStatus = false"
            class="modal_verify_actions modal_verify_actions_cancel"
          >
            Cancelar
          </a>
        </div>
      </slot>
    </div>
  </modal-slot>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ModalSlot from '../modal-slot.vue';

@Component({
  components:{
    ModalSlot
  }
})
export default class ModalVerify extends Vue {
  // Props
    @Prop({ default: null }) readonly jsonData!: any;
    @Prop({ type: Boolean, default: false }) value!: boolean;
    @Prop({ type: Boolean, default: false }) readonly no_persistent!: boolean;

  // Computeds
    //# v-model
    get modalStatus(): boolean{
      return this.value;
    }
    set modalStatus(value: boolean){
      this.$emit('input', value);
    }
}
</script>

<style lang="scss">
.modal_verify_footer{
  display: flex;
  justify-content: flex-end;
}
.modal_verify_actions{
  border: none;
  cursor: pointer;
  background: none;
  transition: .5s all ease;
  padding: 10px 15px;
  font-weight: bold;
  font-size: 15px;
  &_acepted{
    color: red;
  }
  &_cancel{
    color: #4c4c4c;
  }
  &_acepted:hover{
    background: rgba(255,0,0,.15);
  }
  &_cancel:hover{
    background: rgba(0,0,0,.15);
  }
}

</style>
