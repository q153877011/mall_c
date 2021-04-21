<template>
  <div>
    <el-carousel indicator-position="outside" height="150px">
      <el-carousel-item v-for="item in this.imgs" :key="item">
        <h3>
          <img :src="item.image" height="150px" width="320px" />
        </h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { getHomeImage } from "@/network/request.js";
export default {
  name: "test",
  props: {
    imgs: Array
  },
  methods: {
    btnClick(x) {
      console.log(x);
    }
  }
};
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
