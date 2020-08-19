# Modal-Slot for VUE

## Installation

To install "modal-slot" in your project, just execute the following command:

```
npm install @darens/modal-slot
```

## How to use

There are two ways to use the modal slot:

### General component

Declaring as a general component in the index.js or .ts file of our vue project as follows:

```
import Vue from 'vue'
import App from './App.vue'
import '@darens/modal-slot/dist/modal-slot.css';
import ModalSlot from '@darens/modal-slot';

Vue.config.productionTip = false;

Vue.use(ModalSlot);

new Vue({
  render: h => h(App),
}).$mount('#app')
```
And we would use it anywhere in our project, as follows:

```
<template>
  <div id="app">
    Contact us
    <section>
      <modal-slot v-model="showModal">
        Hello word
      </modal-slot>
    </section>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      showModal: false,
    }
  }
}
</script>
```

### Direct import

Directly importing the component where we want to use it, as follows:

```
<template>
  <div id="app">
    Contact us
    <section>
      <modal-slot v-model="showModal">
        Hello word
      </modal-slot>
    </section>
  </div>
</template>

<script>
import '@darens/modal-slot/dist/modal-slot.css';
import ModalSlot from '@darens/modal-slot';

export default {
  name: 'app',
  data(){
    return{
      showModal: false,
    }
  },
  components: {
    ModalSlot
  }
}
</script>
```

## Slots

### Content:

To modify the body, simply write code inside the tags:

 ```
 <template>
   <modal-slot v-model="showModal">
    Hello word
   </modal-slot>
 </template>
 ```

### Header:

If you want to get a better customization of the modal header, you can use the slot-header in the following way.

 ```
 <template>
  <modal-slot v-model="showModal">
    <div slot="header">
      hello word
    </div>
  </modal-slot>
 </template>
 ```

### Footer:

To modify the footer of the modal is done as follows:

 ```
 <template>
  <modal-slot v-model="showModal">
    <div slot="footer">
      Actions
    </div>
  </modal-slot>
 </template>
 ```

## Props

 - width: The prop width is of type string and is the one that determines the size of our modal, it accepts the following measures: ['xs','sm','md','lg','xl'].
 If the prop width is not sent by default, our modal will be of size 'md'.

 - position: The prop position is of type string, and it helps us to position our modal wherever we want. Accepts the following values: ['top','right','botton','left'], Combinations of these values ​​can be made by sending for example: 'top left'.

 - no_header: This prop is of the Boolean type and is responsible for hiding the header of the modal.

 - no_footer: This prop is of the Boolean type and is responsible for hiding the footer of the modal.

 - no_layout: This prop is of the Boolean type and is responsible for hiding both the header and the footer of the modal.

 - maximized: This prop is of type string and it is in charge of maximizing the modal turning it into a full screen modal.

 - card_class: This prop is of type string and as its name indicates it is responsible for modifying the classes of the modal card.

 - persistent: Boolean-type prop and it is responsible for converting the modal into a persistent modal, that is, it cannot be closed by clicking on the outside of the modal.

 - full_width: Boolean-type prop and is responsible for forcing the modal to make it completely long horizontally.

 - full_height: Boolean-type prop and is responsible for forcing the modal to make it completely long vertically.

 - layout_fixed: Boolean type prop and ensures that both the header and the footer are fixed within the modal and that the content is scrollable.

 - title: String type prop that is used to modify the title of the default header.

## Creator

 - Created by Andres Rodrigues (@darens), 18/08/2020.
