<template>
  <div class="app-container">
    {{ store.caches }}
    <router-view v-slot="{ Component }">
      <keep-alive :include="store.caches">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script setup>
import { useCacheViews } from '@/store/cache-view.js';
const store = useCacheViews();
const route = useRoute()

console.log(Function.prototype.__proto__ === Object.prototype);
// console.log(Object.prototype.__proto__ === null);
watch(route, val => {
  if (val.meta.KeepAlive) {
    store.pushView(val.name)
  }
})

</script>

<style lang="scss" scoped></style>