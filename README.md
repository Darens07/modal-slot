
# Modal-Slot for VUE

<p align="center">
  <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer"><img width="100" src="https://vuejs.org/images/logo.png" alt="Vue logo"></a>
</p>

## Install

NPM:
```bash
npm install --save @darens/modal-slot
```

## How to use

There are two ways to use the modal slot:

### General component

Declaring as a general component in the index.js or .ts file of our vue project as follows:

```js
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

```html
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

```html
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

 ```html
 <template>
   <modal-slot v-model="showModal">
    Hello word
   </modal-slot>
 </template>
 ```

### Header:

If you want to get a better customization of the modal header, you can use the slot-header in the following way.

 ```html
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

 ```html
 <template>
  <modal-slot v-model="showModal">
    <div slot="footer">
      Actions
    </div>
  </modal-slot>
 </template>
 ```

## Props
| Name | Type | Required | Default | Description |
| ---  | ---  | ---      | ---     | ---         |
| width | String | --- | 'md' | Accepted values: xs, sm, md, lg, xl. |
| position | String | --- | 'center center' | Accepted values: top, right, botton, left. |
| card_class | String | --- | '' | Css classes that are directed to the modal card. |
| title | String | --- | 'Default header' | Used to modify the title of the default header. |
| no_header | Boolean | --- | false | Hide the header of the modal. |
| no_footer | Boolean | --- | false | Hide the footer of the modal. |
| no_layout | Boolean | --- | false | Hide the header and footer of the modal. |
| maximized | Boolean | --- | false | Convert the modal to a full screen. |
| persistent | Boolean | --- | false | The modal cannot be closed from anywhere, only from a button assigned to close it. |
| full_width | Boolean | --- | false | Maximizes the width of the modal as much as possible. |
| full_height | Boolean | --- | false | Maximizes the height of the modal as much as possible. |
| layout_fixed | Boolean | --- | false | The header and footer of the modal will be fixed inside the modal and only the body will be scrolleable. |

## Creator

 - Created by Andres Rodrigues (@darens), 18/08/2020.
