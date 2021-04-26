<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :imgs="banners"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <feature-view></feature-view>
    <tab-control :titles="['流行', '新款', '精选']" class="tab-control"></tab-control>
    <ul>
      <li v-for="item in 100">列表{{item}}</li>
    </ul>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import { getHomeMultidata } from "@/network/home";
import HomeSwiper from "@/components/content/test/HomeSwiper"
import HomeRecommendView from './childComponents/HomeRecommendView.vue';
import TabControl from '@/components/content/tabControl/TabControl.vue';
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    TabControl,
  },
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  created() {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      console.log(this.banners)
    });
  }
};
</script>

<style scoped>
#home {
  padding-top: 44px;
}

.home-nav {
  background-color: var(--color-tint);
  color: white;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.tab-control {
  position: sticky;
  top: 44px;
}
</style>
