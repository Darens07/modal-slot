
# Modal-Slot for VUE

<p align="center">
  <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer"><img width="100" src="https://vuejs.org/images/logo.png" alt="Vue logo"></a>
</p>

## Introduction

This library was made in order to create manners in an easier way using v-model.

What you are looking for with this library is to choose a kind of template for a modal that with only a few props of vue we can generate a great modal, as well as it is divided by versions since if you do not want to download the whole library if not only You want the basic modal-slot, you download a specific version and you can also choose to download the newer versions that will contain more structured modals.

## Stable versions
| Version | Description                                                                           |
| ---     | ---                                                                                   |
| 1.0.13  | First stable version, it only contains the base modal-slot with its respective props. |
| 1.1.15  | In this version, in addition to bringing the modal-slot included, the modal-verify will also be one of the most used types of modals. |

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
import { ModalSlot } from '@darens/modal-slot';

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
| Name | Type | Required | Default    | Description |
| ---  | ---  | ---      | ---        | ---         |
| v-model | Boolean | --- | false | Used to open and close the modal. |
| width | String | --- | 'md' | Accepted values: xs, sm, md, lg, xl. |
| position | String | --- | 'center center' | Accepted values: top, right, bottom, left. |
| card_class | String | --- | '' | Css classes that are directed to the modal card. |
| title | String | --- | 'Modal title' | Used to modify the title of the default header. |
| no_header | Boolean | --- | false | Hide the header of the modal. |
| no_footer | Boolean | --- | false | Hide the footer of the modal. |
| no_layout | Boolean | --- | false | Hide the header and footer of the modal. |
| maximized | Boolean | --- | false | Convert the modal to a full screen. |
| persistent | Boolean | --- | false | The modal cannot be closed from anywhere, only from a button assigned to close it. |
| full_width | Boolean | --- | false | Maximizes the width of the modal as much as possible. |
| full_height | Boolean | --- | false | Maximizes the height of the modal as much as possible. |
| layout_fixed | Boolean | --- | false | The header and footer of the modal will be fixed inside the modal and only the body will be scrolleable. |
| transition | String | --- | 'modal' | Accepted values: fade, modal. Input and output animation for the modal, if you want a different animation you can choose to create your animation in css and then send the class through this prop. |
| no_mask | Boolean | --- | false | It takes care of hiding the default rgba background of the modal. |
| bg_card | String | --- | '' | Background color of the modal card, can be sent in hexadecimal or rgba |
| bg_mask | String | --- | '' | Modal background color, can be sent in hexadecimal or rgba |
| time_out | [String, Number] | --- | '0' | Waiting time before closing the modal, it is sent in milliseconds |
| icon | Object | --- | {} | The following prop is used to place an icon next to the title in the header. Any material desing icon can be used and this icon can be styled with the camelcase principle. Example:{name: 'face', style: {color: 'red', fontSize: '24px'}} |

##Types modals

### Modal Verify

It is a very common type of modal, used for verifications such as, for example, when a product is going to be eliminated in an application that contains inventory, it is necessary that a specific alert is output so that the user is aware of the product that he is eliminating and thus avoid that a product that we do not want is eliminated.

Now for the operation of this type of modal, the following must be taken into account:

This type of modal receives certain props and emits unique ones.

 - no_persistent: The modal-verify by default is of a persistent type and many times it is not necessary that it be this way, so if you want to change this, you just have to send this prop to true.

 - jsonData: This prop is used to change certain things within the modal and is constituted in the following way:

 ```js
   jsonData = {
     dataEmit: false
     title: 'Alerta',
     icon: {
       name: 'report_problem',
       style:{
         color: 'red'
       }
     },
   }
 ```
 It is important to note that if this prop is not sent, it will have the aforementioned values ​​by default, so you do not have to worry if you do not want to change any of them.

 - @acepted: Inside this modal there is an accept button which throws that emit, here any necessary function can be performed and as if that were not enough, it also sends the "dataEmit" that was established in the "jsonData" as the first parameter.

In addition to this, the modal has two slots which are:

### Content:

To modify the body, simply write code inside the tags:

 ```html
 <template>
   <modal-verify v-model="showModal">
     Validating my actions
   </modal-verify>
 </template>
 ```

### Footer:

To modify the footer of the modal is done as follows:

 ```html
 <template>
  <modal-verify v-model="showModal">
    <div slot="footer">
      Actions
    </div>
  </modal-verify>
 </template>
 ```

## Creator

 - Created by Andres Rodrigues (@darens), 18/08/2020.
