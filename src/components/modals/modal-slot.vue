<template lang="html">
  <transition v-if="modal_slot" :name="transition">
    <div
      :style="maskStyles"
      :class="[ 'modal-mask', {'bg_mask': !no_mask} ]"
    >
      <!-- Close modal out modal-card -->
      <div @click="modalStatus" class="modal-close"></div>

      <div :class="[ 'modal-wrapper', position, {'full-modal': maximized} ]">
        <!-- Modal Card -->
        <div
          :style="cardStyles"
          :class="[ 'modal-card modal-card-' + width, card_class, {'full-width': full_width, 'full-height': full_height, 'layout-fixed': layout_fixed, 'persistent': active_animation} ]"
        >

          <!-- header -->
          <div v-if="(!no_layout && !no_header)" class="modal-header">
            <slot name="header">
              <div class="default__header">
                <div class="default__header-title">
                  <div v-if="icon">
                    <i :style="(icon.style) ? icon.style : ''" class="material-icons">{{(icon.name) ? icon.name : icon}}</i>
                  </div>
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
            <slot>
              <p class="default-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </slot>
          </div>

          <!-- Footer -->
          <div v-if="(!no_layout && !no_footer)" class="modal-footer">
            <slot name="footer">
              <div @click="modal_slot = false" class="default-footer">
                <a class="default-btn">Cerrar</a>
              </div>
            </slot>
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
  // Data
    active_animation: boolean = false;

  updated(){
    // Estableciendo un tiempo limite para este modal
    var time_out: any = this.time_out;
    if(time_out > 0){
      setTimeout(():void => {
        this.modal_slot = false;
      }, time_out);
    }
  }

  // Functions
    modalStatus(): void{
      if(!this.persistent) this.modal_slot = false;
      else{
        this.active_animation = true;
        setTimeout((): void => {
          this.active_animation = false;
        }, 300);
      }
    }

  // Props
    @Prop({type: Boolean, default: false}) value!: boolean;
    @Prop({type: String, default: 'md'}) readonly width!: string;
    @Prop({type: String, default: ''}) readonly bg_card!: string;
    @Prop({type: String, default: ''}) readonly bg_mask!: string;
    @Prop({type: String, default: ''}) readonly position!: string;
    @Prop({type: String, default: '0'}) readonly time_out!: string;
    @Prop({type: String, default: ''}) readonly card_class!: string;
    @Prop({type: Boolean, default: false}) readonly no_mask!: boolean;
    @Prop({type: Boolean, default: false}) readonly no_header!: boolean;
    @Prop({type: Boolean, default: false}) readonly no_footer!: boolean;
    @Prop({type: Boolean, default: false}) readonly no_layout!: boolean;
    @Prop({type: Boolean, default: false}) readonly maximized!: boolean;
    @Prop({type: String, default: 'modal'}) readonly transition!: string;
    @Prop({type: Boolean, default: false}) readonly persistent!: boolean;
    @Prop({type: Boolean, default: false}) readonly full_width!: boolean;
    @Prop({type: Boolean, default: false}) readonly full_height!: boolean;
    @Prop({type: Boolean, default: false}) readonly layout_fixed!: boolean;
    @Prop({type: String, default: 'Modal title'}) readonly title!: string;
    @Prop({type: [String, Object], default: null}) readonly icon!: any;


  // Computeds
    //# v-model
    get modal_slot(): boolean{
      return this.value;
    }
    set modal_slot(value: boolean){
      this.$emit('input', value);
    }

    //# Style of modal-card
    get cardStyles(): any{
      if(this.bg_card != ''){
        return{
          backgroundColor: this.bg_card
        }
      }
      return '';
    }
    //# Style of modal-mask
    get maskStyles(): any{
      if(this.bg_mask != ''){
        return{
          backgroundColor: this.bg_mask
        }
      }
      return '';
    }
}
</script>

<style lang="scss">
/* Estilos para los iconos (material-icons) */
@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url('../../assets/icons/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2') format('woff2');
}
.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 28px;
  margin-right: 5px;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}

// Estilos importantes para el modal-slot
.modal-close {
  top: 0;
  left: 0;
  margin: 0px;
  width: 100%;
  height: 100%;
  position: fixed;
}

.modal-mask {
  top: 0;
  left: 0;
  margin: 0px;
  width: 100%;
  height: 100%;
  position: fixed;
  transition: .3s all ease;
}
.bg_mask{
  background-color: rgba(0, 0, 0, .5);
}

.modal-wrapper {
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
.bottom{
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
  z-index: 2;
  width: 100%;
  margin: 12px;
  display: flex;
  max-height: 90%;
  overflow-y: auto;
  flex-direction: column;
  background-color: #fff;
  transition: .3s all ease;
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
  overflow-y: hidden !important;
  .modal-header{
    border-bottom: 1px solid rgba(0,0,0,.15);
  }
  .modal-body{
    max-height: 82vh;
    overflow-y: auto;
  }
  .modal-footer{
    border-top: 1px solid rgba(0,0,0,.15);
  }
}

.modal-header{
  padding: 15px 12px 10px 12px;
}

.modal-body {
  padding: 10px 12px;
}

.modal-footer {
  padding: 15px 12px;
  margin-top: auto;
}

//# Clases para el header y el footer por defecto
.default{
  &-text{
    margin: 0px;
    line-height: 24px;
    font-size: 16px;
  }
  &__header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-title{
      font-size: 21px;
      line-height: 22px;
      display: flex;
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
  &-footer{
    text-align:right;
  }
  &-btn{
    cursor: pointer;
    background: #a4a4a4;
    color: #fff;
    padding: 7px 15px;
    margin-top: 10px;
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

//# 1
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

//# 2
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}



.persistent{
  animation-name: persistent;
  animation-duration: .12s;
  animation-iteration-count: 2;
}
@keyframes persistent {
    0% {
      transform:scale(1,1);
    }
    50% {
      transform:scale(1.02,1.02);
    }
    100% {
      transform:scale(1,1);
    }
}
</style>
