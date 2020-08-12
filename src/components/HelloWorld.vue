<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <section>
      Separate components
      <div>
        <button-one buttonText="Button 1"></button-one>
        <button-Two buttonText="Button 2"></button-Two>
      </div>

    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ButtonOne from './ButtonOne.vue';
import ButtonTwo from './ButtonTwo.vue';

@Component({
  components:{ ButtonOne, ButtonTwo },
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<style>
h3 {
  margin: 40px 0 0;
}
section{
  display: flex;
  flex-direction: column;
  text-align: center;
}
section div{
  margin-top: 10px;
}
</style>
