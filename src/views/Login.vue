<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const loginClick = () => {
  localStorage.setItem('token', 'jingyou')
  console.log('登陆成功')
  router.push({
    path: '/home'
  })
}
</script>

<template>
  <div class="login">
    <h2>登陆页面</h2>
    <button @click="loginClick">登陆</button>
  </div>
</template>

<style scoped>

</style>
