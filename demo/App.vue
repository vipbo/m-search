<template>
  <div id="app">
    <h2>MSearch 组件预览</h2>
    <m-search 
      placeholder="请输入关键词" 
      @search="handleSearch"
      :width="300"
    />
    <p>当前搜索词: {{ keyword }}</p>
  </div>
</template>

<script>
// 直接引用 src 中的组件（支持热更新！）
import MSearch from '../src/MSearch.vue'

export default {
  name: 'App',
  components: { MSearch },
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