<template>
  <div>
    <swiper :imgs="imgUrl"> </swiper>
    <el-button type="primary" @click="btnClick">123</el-button>
  </div>
</template>

<script>
import Swiper from "@/components/content/test/test.vue";

export default {
  name: "HomeSwiper",
  components: {
    Swiper
  },
  props: {
    imgUrl: Array
  },
  methods: {
    btnClick() {
      console.log(this.imgUrl);
    }
  }
};
</script>
