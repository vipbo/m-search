<template>
  <div id="app">
    <h2>MSearch 组件预览</h2>
    <m-search 
      v-model="keyword"
      placeholder="请输入关键词" 
      @search="handleSearch"
      :width="300"
      :debounce="500"
    />
    <p>当前搜索词（v-model 双向绑定）: {{ keyword }}</p>

    <h2 style="margin-top: 24px;">MTag 组件预览</h2>
    <div style="display: flex; gap: 8px; align-items: center;">
      <MTag color="#409EFF" size="small">默认</MTag>
      <MTag color="#67C23A" size="medium">成功</MTag>
      <MTag color="#F56C6C" size="large">错误</MTag>
      <MTag
        v-if="showClosableTag"
        color="#E6A23C"
        size="medium"
        closable
        @close="showClosableTag = false"
      >
        可关闭标签
      </MTag>
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
      keyword: '',
      showClosableTag: true
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