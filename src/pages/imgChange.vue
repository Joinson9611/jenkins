<template>
    <div>
        <van-button @click="changeImg">切换</van-button>
        <!-- <img src="../../public/flowers.jpg" alt=""> -->
    </div>
</template>

<script setup>

const path = ref('')
const name = 'flowers'
import(`@/assets/images/${name}.jpg`).then(res=>{
    path.value = res.default
})
console.log(import.meta.url);

console.log(new URL('http://www.baidu.com?a=1&b=2').searchParams.get('b'));
// function changeImg() {
//     path.value = img2
// }
</script>

<style lang="scss" scoped>

</style>