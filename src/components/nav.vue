<template>
  <div class="navigation_page_wrapper">
    <div v-for="(item, index) in navList" :key="item.label" :style="{ background: colorList[index] }" @click="toUrl(item.path)">
      {{ item.label }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        { label: 'home', path: '/home' },
        { label: 'vnodeOptimize', path: '/vnodeOptimize' },
        { label: 'vnodeNormal', path: '/vnodeNormal' }
      ],
      colorList: [
        '#46A0FF',
        '#FFC64C',
        '#63E587',
        '#FA885D',
        '#7BF0EB',
        '#F277E1',
        '#FF7B7B',
        '#728EFE',
        '#E1EC9E',
        '#8F2EFF',
        '#8DEEFF',
        '#7C69F2',
        '#CCF6B5',
        '#EE8989',
        '#84B2FF',
        '#80E5C4'
      ]
    }
  },
  methods: {
    toUrl(path) {
      this.$router.push(path)
    }
  }
}
</script>
<style lang="less">
.navigation_page_wrapper {
  display: flex;
  flex-wrap: wrap;
  div {
    width: 200px;
    height: 200px;
    text-align: center;
    color: white;
    font-size: 30px;
    margin-left: 20px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
}
</style>
