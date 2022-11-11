<script setup>
import { useRoute, onBeforeRouteUpdate } from 'vue-router'

// 代码中获取route跳转id
const route = useRoute()
console.log(route.params.id)

onBeforeRouteUpdate((to, from) => {
  console.log('from: ', from.params.id)
  console.log('to: ', to.params.id)
})
</script>

<template>
  <div class="user">
    <!-- 在模板中获取到id -->
    <h2>User: {{ $route.params.id }}</h2>
  </div>
</template>

<style scoped>

</style>
