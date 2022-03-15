<template>
  <div class="frame-layout-box">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'FrameLayout',
  components: { Header },
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
</style>
