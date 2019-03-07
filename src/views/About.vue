<template>
  <div class="about">
    <h1>This is an Vuex Test page</h1>
    <Button @click="_add">+</Button>
      {{ this.$store.state.num.num }}
    <Button @click="_del" :disabled="this.$store.state.num.num<=0">-</Button>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Home extends Vue {

  private _add(): void {
    this.$store.dispatch('num/add');
    // this._showToast();
  }

  private _del(): void {
    this.$store.dispatch('num/del');
  }

  // private _showToast(): void { }
}
</script>