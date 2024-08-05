<template>
  <div>
    <div class="grid-wrapper">
      <div v-for="i in [1, 2, 3]" :key="i" @click="router.push('/page1')"></div>
    </div>
    <button @click="t">123</button>
  </div>
</template>

<script setup>
import axios from 'axios'
const router = useRouter();
function t() {
  debugger;
  console.log('test');
}
axios({
  url: "api/users",
  method: "post",
}).then(({data}) => {
  console.log(res);
});

</script>

<style lang="scss" scoped>
.grid-wrapper {
  display: grid;
  height: 300px;
  width: 300px;
  box-sizing: border-box;
  border: 1px solid blueviolet;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(2, 100px);
  justify-content: space-evenly;
  div {
    box-sizing: border-box;
    background-clip: padding-box;
    background-image: url(../assets/images/flowers.jpg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    // &:first-child {
    //   grid-column-start: 1;
    //   grid-column-end: 4;
    //   grid-row-start: 1;
    //   grid-row-end: 3;
    // }
    // .inner {
    //     width: 100%;
    //     background-color: red;
    //     height: 100%;
    // }
  }
}
// IE盒模型 标准盒。。
.wrapper {
  width: 300px;
  height: 300px;
  padding: 10px;
  border: 10px dotted red;
  box-sizing: border-box;
  background-color: blue;
  // padding: 30px;
  // margin: 10px;
  // border: 2px solid black;
  // width: 300px;
  // height: 300px;
  // box-sizing:content-box;
  // background-color: red;
}
</style>