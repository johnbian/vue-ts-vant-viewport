<template>
  <div class="home">
    <div class="container" flexcontainer> 
     <div class="block-item" w-375-246 aspectratio aspect-ratio="375/246"> 
      <div aspectratio-content> 
       <img src="//gw.alicdn.com/mt/TB1t7CZSXXXXXcYXVXXXXXXXXXX-375-246.png" alt="" width="100%" height="100%"> 
      </div> 
     </div> 
     <div class="block-item" w-375-246 aspectratio aspect-ratio="375/246"> 
      <div aspectratio-content> 
       <img src="//gw.alicdn.com/mt/TB1LoOOSXXXXXbPaXXXXXXXXXXX-375-246.png" alt="" width="100%" height="100%"> 
      </div> 
     </div> 
    </div> 
    <div flexcontainer>
     <div class="block-item" w-188-246 aspectratio aspect-ratio="188/246"> 
      <div aspectratio-content> 
       <img src="//gw.alicdn.com/mt/TB1Ey5WSXXXXXcJXVXXXXXXXXXX-188-246.png" alt="" width="100%" height="100%"> 
      </div> 
     </div> 
     <div class="block-item" w-187-246 aspectratio aspect-ratio="187/246"> 
      <div aspectratio-content> 
       <img src="//gw.alicdn.com/mt/TB1FuvcSXXXXXaCXFXXXXXXXXXX-187-246.png" alt="" width="100%" height="100%"> 
      </div> 
     </div> 
     <div class="block-item" w-188-246 aspectratio aspect-ratio="188/246"> 
      <div aspectratio-content> 
       <img src="//gw.alicdn.com/mt/TB1eDK5SXXXXXXgXVXXXXXXXXXX-188-246.png" alt="" width="100%" height="100%"> 
      </div> 
     </div> 
     <div class="block-item" w-187-246 aspectratio aspect-ratio="187/246"> 
      <div aspectratio-content> 
       <img src="//gw.alicdn.com/mt/TB16RKLSXXXXXb5aXXXXXXXXXXX-187-246.png" alt="" width="100%" height="100%"> 
      </div> 
     </div> 
    </div>
    <div class="block block-5"> 
			<div class="container"> 
			<ul> 
				<li flexcontainer> 
				<div w-324-324 aspectratio aspect-ratio="324/324"> 
					<div aspectratio-content> 
					<img src="//gw.alicdn.com/imgextra/i1/642910327/TB26bQ_bb_0UKFjy1XaXXbKfXXa_!!642910327-0-beehive-scenes.jpg" alt="" width="100%" height="100%"> 
					</div> 
				</div>
				<figcaption> 
					<h2>本来生活 牛油果</h2> 
					<div>
					牛油果有“森林黄油”的美誉，是一种高蛋白、低脂肪的水果，也因此而倍受喜爱。本来生活选用优质进口牛油果，安全健康，营养价值非常高，其中富含植物纤维、不饱和脂肪酸等营养物质，非常适合妈妈宝宝食用。
					</div> 
				</figcaption> </li> 
				<li flexcontainer> 
				<div w-324-324 aspectratio aspect-ratio="324/324"> 
					<div aspectratio-content> 
					<img src="//gw.alicdn.com/imgextra/i1/642910327/TB26bQ_bb_0UKFjy1XaXXbKfXXa_!!642910327-0-beehive-scenes.jpg" alt="" width="100%" height="100%"> 
					</div> 
				</div> 
				<figcaption> 
					<h2>本来生活 牛油果</h2> 
					<div>
					牛油果有“森林黄油”的美誉，是一种高蛋白、低脂肪的水果，也因此而倍受喜爱。本来生活选用优质进口牛油果，安全健康，营养价值非常高，其中富含植物纤维、不饱和脂肪酸等营养物质，非常适合妈妈宝宝食用。
					</div> 
				</figcaption> </li> 
				<li flexcontainer> 
				<div w-324-324 aspectratio aspect-ratio="324/324"> 
					<div aspectratio-content> 
					<img src="//gw.alicdn.com/imgextra/i1/642910327/TB26bQ_bb_0UKFjy1XaXXbKfXXa_!!642910327-0-beehive-scenes.jpg" alt="" width="100%" height="100%"> 
					</div> 
				</div>
				<figcaption> 
					<h2>本来生活 牛油果</h2> 
					<div>
					牛油果有“森林黄油”的美誉，是一种高蛋白、低脂肪的水果，也因此而倍受喜爱。本来生活选用优质进口牛油果，安全健康，营养价值非常高，其中富含植物纤维、不饱和脂肪酸等营养物质，非常适合妈妈宝宝食用。
					</div> 
				</figcaption> </li> 
			</ul> 
			</div> 
		</div>
    <img alt="Vue logo" src="../assets/logo.png">
    <Button @click="_add">+</Button>
      {{ num }}
    <Button @click="_del" :disabled="num<=0">-</Button>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import api from '@/api';

Component.registerHooks([
  'beforeRouteEnter',
]);

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  private num: number = 0;

  public beforeRouteEnter(to: any, from: any, next: any): void {
    document.title = '首页';
    if (from.name === 'about') {
      to.meta.isBack = true;
    }
    next();
  }

  public async activated(): Promise<any> {
    if (!this.$route.meta.isBack) {
      await api.nameSet();
    }
    this.$route.meta.isBack = false;
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
<style scoped>
  [w-375-246]{
    width: 375px;
  }
  [w-375-246]{
    aspect-ratio:'375:246';
  }
  [w-188-246]{
    width: 188px;
  }
  [w-188-246]{
    aspect-ratio:'188:246';
  }
  [w-187-246]{
    width: 187px;
  }
  [w-187-246]{
    aspect-ratio:'187:246';
  }
  @svg 1px-border {
	  height: 2px;
	  @rect {
		  fill: var(--color, black);
		  width: 100%;
		  height: 50%;
	  }
	}
	
[w-369]{
	width: 369px;
}
[w-324-324]{
	width: 324px;
	background: #fff;
	overflow: hidden;
}
[w-324-324]{
  aspect-ratio:'324:324';
}

ul[w-369]:nth-child(2n) {
		margin-left: 12px;
	}
	
ul[w-369]	li {
		background: #fff;
  	margin-bottom: 12px;
}
[w-369] figcaption {
  padding: 20px;
}
[w-369] figcaption div {
  font-size: 22px;
  color: #999;
}
[w-369] h2 {
  margin: 0 0 30px;
  font-size: 26px;
  color: #333;
  font-weight: 400;
}

[w-369] h2 span, [w-369] i {
  color: #ff5000;
  font-size: 26px;
  margin-right: 20px;
}
[w-369] h2 span {
  background: #ff5000;
  color: #fff;
  display: inline-block;
  border-radius: 4px;
  text-shadow: 0 2px 2px #ff5000;
  padding: 2px 5px;
}
[w-369] i {
  font-size: 20px;
	margin-right: 5px;
	font-style: normal;
}

.block-5 li {
	background: #fff;
	border-bottom: 1px solid transparent;
	margin-bottom: 15px;
	border-image: svg(1px-border param(--color #333)) 2 2 stretch;
}

[aspectratio-content] img {
  width: 100%;
  height: 100%;
  vertical-align: top;
}

.block-5 figcaption {
  flex: 1;
  padding: 30px;
}
.block-5 h2 {
  font-size: 32px;
  font-weight: 400;
  margin: 0 0 20px;
}
.block-5 figcaption div {
  font-size: 30px;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
