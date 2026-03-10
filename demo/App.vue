<template>
  <div id="app">
    <h2>MSearch 组件预览</h2>
    <m-search 
      placeholder="请输入关键词" 
      @search="handleSearch"
      :width="300"
    />
    <p>当前搜索词: {{ keyword }}</p>

    <h2 style="margin-top: 24px;">MTag 组件预览</h2>
    <div style="display: flex; gap: 8px; align-items: center;">
      <MTag color="#409EFF" size="small">默认</MTag>
      <MTag color="#67C23A" size="medium">成功</MTag>
      <MTag color="#F56C6C" size="large">错误</MTag>
    </div>
  </div>
</template>

<script>
// 直接引用 src 中的组件（支持热更新！）
import MSearch from '../src/MSearch.vue'
import MTag from '../src/MTag.vue'

export default {
  name: 'App',
  components: { MSearch, MTag },
  data() {
    return {
      keyword: ''
    }
  },
  methods: {
    handleSearch(val) {
      this.keyword = val
    }
  }
}
</script>

<style>
body {
  padding: 40px;
  font-family: Arial, sans-serif;
}
</style>