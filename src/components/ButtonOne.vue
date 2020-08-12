<template lang="html">
  <button class="buttonOne" type="button" name="button">{{ buttonText }}</button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ButtonOne extends Vue {
  @Prop(String) private buttonText!: string;
}
</script>

<style lang="scss">
  .buttonOne {
    background-color: green;
    color: white;
    border: none;
    min-height: 3em;
    min-width: 5em;
    border-radius: .3em;
    margin: 0.2em;
  }
</style>
