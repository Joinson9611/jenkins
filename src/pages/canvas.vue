<template>
  <div>
    <canvas ref="signature"></canvas>
  </div>
</template>



<script setup>
import { onMounted } from 'vue';

const signature = ref(null);
onMounted(() => {
  signature.value.width = 300;
  signature.value.height = 300;
  const ctx = signature.value.getctx('2d');
  const gra = ctx.createLinearGradient(0, 0, 100, 100);
  gra.addColorStop(0, 'red');
  gra.addColorStop(0.5, 'blue');
//   ctx.moveTo(0, 0);
  ctx.lineTo(10, 10);
  ctx.lineTo(80, 10);
  ctx.lineTo(80, 80);
  ctx.lineTo(10, 80);
  ctx.lineTo(10, 10);

  ctx.lineWidth = 10;
  ctx.strokeStyle = gra;
  ctx.stroke();
});
console.log();
</script>

<style scoped>
</style>