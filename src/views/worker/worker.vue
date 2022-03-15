<template>
  <button @click="handleExport">web worker btn</button>
</template>

<script>
import Worker from './web.worker?worker'

export default {
  setup() {
    function handleExport() {
      const worker = new Worker()
      worker.postMessage({ params: 'web worker' })
      // 注册监听函数，接收子线程消息
      worker.onmessage = (e) => {
        console.log('app.vue文件接收到:', e.data)
      }
    }

    return {
      handleExport
    }
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
