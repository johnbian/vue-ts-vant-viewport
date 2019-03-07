<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Button @click="_add" :inline="true">+</Button>
      {{ num }}
    <Button @click="_del" :disabled="num<=0" :inline="true">-</Button>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import api from '@/api';

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  private num: number = 0;

  public async created(): Promise<any> {
    await api.queryEssayList(1, 0, 1);
  }

  private _add(): void {
    this.num ++;
  }

  private _del(): void {
    if (this.num > 0) {
      this.num --;
    }
  }

}
</script>
