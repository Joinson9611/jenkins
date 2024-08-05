<template>
  <div>p1</div>
  <van-button @click="jump">to page2</van-button>
  <van-button @click="back">back</van-button>
  <van-field v-model="input" label="描述1"></van-field>
</template>


<script setup name="page1">
import { useCacheViews } from '@/store/cache-view.js';
const router = useRouter();
const store = useCacheViews();
const input = ref('');
function jump() {
  store.pushView('page1');
  router.push('/page2');
}
function back() {
  router.go(-1);
  store.clearView();
}
</script>

<style lang="scss" scoped>
</style>