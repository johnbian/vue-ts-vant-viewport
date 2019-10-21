<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive :exclude="excludePage">
        <router-view />
      </keep-alive>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue , Watch} from 'vue-property-decorator';
import { Toast } from 'vant';

@Component
export default class App extends Vue {
  private transitionName: string = 'slide-left';

  private loading: any = null;

  get loadingNum() {
    return this.$store.state.num.num;
  }

  get excludePage() {
    return this.$store.state.num.includePage;
  }

  @Watch('loadingNum')
  public loadingNumChange(newVal: any, oldVal: any) {
    if (newVal > 0 && oldVal === 0) {
      this.loading = Toast.loading({
        duration: 0,
        message: '拼命加载中',
        loadingType: 'spinner',
        forbidClick: true,
      });
    } else if (newVal <= 0 && this.loading) {
      this.loading.clear();
    }
  }

  @Watch('$route')
  public changeRoute(to: any, from: any) {
    if (to.meta.index > from.meta.index || !from.meta.index) {
      this.transitionName = 'slide-left';
    } else {
      this.transitionName = 'slide-right';
    }
  }
}

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333333;
    font-size: 14px;
    box-sizing: border-box;
  }
  html {
    margin: 0;
    padding: 0;
    height: 100vh;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background-color: #F4F5F5;
  }
  * {
    box-sizing: inherit;
  }
  *::before {
    box-sizing: inherit;
  }
  *::after {
    box-sizing: inherit;
  }
  p {
    margin: 0;
  }
  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active {
    will-change: transform;
    transition: all 500ms;
    position: absolute;
  }
  .slide-right-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  .slide-right-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .slide-left-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .slide-left-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  [aspectratio] {
    position: relative;
  }
  [aspectratio]::before {
    content: '';
    display: block;
    width: 1px;
    margin-left: -1px;
    height: 0;
  }

  [aspectratio-content] {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
  [flexContainer] {
    display: flex;
    width: 750px;
  }
  input {
    border: 0px;
    outline: none;
  }
  img {
    content: normal !important;
  }
</style>
