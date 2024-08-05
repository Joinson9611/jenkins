<template>
  <div>p2</div>
  <van-button @click="router.go(-1)">back</van-button>
  <van-field v-model="input" label="描述2"></van-field>
</template>
  
  <!-- <script>
export default {
  name: 'page2'
};
</script> -->
  <script setup>
const router = useRouter();
const input = ref('');
</script>
  
  <style lang="scss" scoped>
</style>