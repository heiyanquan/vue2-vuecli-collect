<template>
  <div class="frame-layout-box">
    <NavView></NavView>
    <router-view></router-view>
  </div>
</template>

<script>
import NavView from '@/components/nav'

export default {
  name: 'FrameLayout',
  components: { NavView },
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped></style>
