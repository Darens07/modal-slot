<template lang="html">
  <transition v-if="modal_slot" name="modal">
    <div class="modal-mask">
      <div @click="modalStatus" id="wrapper" :class="['modal-wrapper', position, {'full-modal': !maximized}]">

        <!-- Modal Card -->
        <div :class="['modal-card modal-card-' + width, card_class, {'full-width': !full_width, 'full-height': !full_height, 'layout-fixed': !layout_fixed}]">
          <!-- header -->
          <div v-if="(no_layout && no_header)" class="modal-header">
            <slot name="header">
              <div class="default__header">
                <div class="default__header-title">
                  {{ title }}
                </div>
                <div class="default__header-close">
                  <div @click="modal_slot = false" id="default-close">X</div>
                </div>
              </div>
             </slot>
          </div>

          <!-- body -->
          <div class="modal-body">
            <slot> Default body </slot>
          </div>

          <!-- Footer -->
          <div v-if="(no_layout && no_footer)" class="modal-footer">
            <slot name="footer"> Default footer </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ModalSlot extends Vue {

  // Props
  @Prop(String) value!: boolean;
  @Prop({type: String, default: 'md'}) readonly width!: string;
  @Prop({type: String, default: ''}) readonly position!: string;
  @Prop({type: Boolean, default: true}) readonly no_header!: boolean;
  @Prop({type: Boolean, default: true}) readonly no_footer!: boolean;
  @Prop({type: Boolean, default: true}) readonly no_layout!: boolean;
  @Prop({type: Boolean, default: true}) readonly maximized!: boolean;
  @Prop({type: Boolean, default: true}) readonly card_class!: boolean;
  @Prop({type: Boolean, default: true}) readonly persistent!: boolean;
  @Prop({type: Boolean, default: true}) readonly full_width!: boolean;
  @Prop({type: Boolean, default: true}) readonly full_height!: boolean;
  @Prop({type: Boolean, default: true}) readonly layout_fixed!: boolean;
  @Prop({type: String, default: 'Default header'}) readonly title!: string;


  // Functions
  modalStatus(event: any): void{
    if(event.target.id == "wrapper"){
      if(this.persistent) this.modal_slot = false;
    }
  }

  // Computeds
  get modal_slot(): boolean{
    return this.value;
  }
  set modal_slot(value: boolean){
    this.$emit('input', value);
  }
}
</script>

<style lang="scss">
.modal-mask {
  top: 0;
  left: 0;
  margin: 0px;
  width: 100%;
  height: 100%;
  z-index: 9998;
  position: fixed;
  transition: opacity .3s ease;
  background-color: rgba(0, 0, 0, .5);
}

.modal-wrapper {
  // display: table-cell;
  // vertical-align: middle;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.left{
  justify-content: flex-start;
}
.right{
  justify-content: flex-end;
}
.top{
  align-items: flex-start;
}
.botton{
  align-items: flex-end;
}
.full-modal{
  align-items: flex-start;
  justify-content: flex-start;
  .modal-card{
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    margin: 0px !important;
  }
}

.modal-card {
  width: 100%;
  margin: 12px;
  max-height: 90%;
  overflow-y: auto;
  background-color: #fff;
  transition: all .3s ease;
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  &-xs{
    max-width: 300px;
  }
  &-sm{
    max-width: 575px;
  }
  &-md{
    max-width: 767px;
  }
  &-lg{
    max-width: 991px;
  }
  &-xl{
    max-width: 1200px;
  }
}
.full-width{
  max-width: 100%;
  margin-left: 0px;
  margin-right: 0px;
}
.full-height{
  height: 100%;
  margin-top: 0px;
  max-height: 100%;
  margin-bottom: 0px;
}
.layout-fixed{
  max-height: none !important;
  overflow-y: inherit !important;
  .modal-body{
    max-height: 82vh;
    overflow-y: auto;
  }
}

.modal-header{
  padding: 15px 12px;
}

.modal-body {
  padding: 10px 12px;
}

.modal-footer {
  padding: 15px 12px;
}

.default{
  &__header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-title{
      font-size: 19px;
      line-height: 20px;
    }
    &-close #default-close{
      width: 32px;
      height: 32px;
      display: flex;
      color: #4c4c4c;
      cursor: pointer;
      font-weight: bold;
      font-size: 16px;
      border-radius: 50%;
      align-items: center;
      justify-content: center;
      transition: .3s all ease;
    }
    &-close #default-close:hover{
      background-color: rgba(0,0,0,.1);
    }
    &-close #default-close:focus, &-close #default-close:active{
      background-color: rgba(0,0,0,.05);
    }
  }
}
/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-card,
.modal-leave-active .modal-card {
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
}
</style>
