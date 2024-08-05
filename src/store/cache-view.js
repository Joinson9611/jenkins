export const useCacheViews = defineStore('cacheView', () => {
  // 存储缓存页面
  let caches = ref([]);
  // 添加缓存页
  function pushView(name) {
    // if(Array.isArray(name)) {
        
    // }
    !caches.value.some(i => i === name) && caches.value.push(name);
  }
  // 移除指定已缓存页
  function removeView(name) {
    for (let i = caches.value.length - 1; i >= 0; i--) {
      const ele = caches.value[i];
      if (ele === name) {
        caches.value.splice(i, 1);
        break;
      }
    }
  }
  function clearView() {
    caches.value = [];
  }
  return {
    caches,
    pushView,
    clearView,
    removeView
  };
});
