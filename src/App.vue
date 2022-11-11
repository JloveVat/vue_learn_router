<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
const homeSpanClick = () => {
  // router.push('/home')
  router.push({
    path: '/home'
  })
  // router.replace({
  //   path: '/home'
  // })
}
const aboutBtnClick = () => {
  router.push({
    path: '/about',
    query: {
      name: 'jing',
      age: 22
    }
  })
}
</script>

<template>
  <div class="app">
    <h2>App Content</h2>
    <div class="nav">
      <RouterLink to="/home" replace active-class="active">首页</RouterLink>
      <RouterLink to="/about" active-class="active">关于</RouterLink>
      <RouterLink to="/user/123" active-class="active">用户123</RouterLink>
      <RouterLink to="/user/321" active-class="active">用户321</RouterLink>

      <RouterLink to="/order">订单</RouterLink>
    </div>

    <!-- 其他元素跳转 -->
    <span @click="homeSpanClick">首页</span>
    <button @click="aboutBtnClick">关于</button>


    <RouterView></RouterView>
  </div>
</template>

<style scoped>
.router-link-active {
  color: #00abff;
}

.active {
  font-size: 20px;
  font-weight: 700;
  color: #0a520a;
}
</style>
