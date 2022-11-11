<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
const backBtnClick = () => {
  router.back()
  // router.forward()

  // router.go(1)
  // router.go(-1)
}
</script>

<template>
  <div class="about">
    <h2>about</h2>
    <button @click="backBtnClick">返回</button>
  </div>
</template>

<style scoped>

</style>
