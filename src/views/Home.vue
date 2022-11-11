<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
const logoutClick = () => {
  localStorage.removeItem('token')
  router.replace({
    path: '/login'
  })
}
</script>

<template>
  <div class="home">
    <h2>home</h2>
    <RouterLink to="/home/recommend">推荐</RouterLink>
    <RouterLink to="/home/ranking">热歌</RouterLink>

    <button @click="logoutClick">退出登陆</button>

    <RouterView></RouterView>
  </div>
</template>

<style scoped>

</style>
