<template>
  <div>
    <el-carousel height="150px" :interval="1000">
      <el-carousel-item v-for="item in this.imgs" :key="item.link">
        <h3>
          <img :src="item.image" height="150px" width="100%"/>
        </h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
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
