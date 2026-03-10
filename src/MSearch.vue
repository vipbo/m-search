<template>
  <span class="m-search">
    <el-input
      v-model="keyword"
      clearable
      :placeholder="placeholder"
      class="search"
      :style="getStyle"
    >
      <i slot="prefix" class="el-icon-search" />
    </el-input>
  </span>
</template>

<script>
export default {
  name: 'MSearch',
  props: {
    width: {
      type: [String, Number],
      default: '298px'
    },
    ml: {
      type: [String, Number],
      default: '10'
    },
    mr: {
      type: [String, Number],
      default: '10'
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      type: '',
      keyword: ''
    }
  },
  computed: {
    getStyle() {
      return {
        width: `${this.width}px`,
        'margin-left': `${this.ml}px`,
        'margin-right': `${this.mr}px`
      }
    }
  },
  watch: {
    keyword() {
      this.$emit('search', this.keyword)
    }
  }
}
</script>

<style scoped lang='scss'>
.m-search {
  .el-icon-search {
    margin: 11px 0 0 3px;
    color: red;
  }
}
</style>
