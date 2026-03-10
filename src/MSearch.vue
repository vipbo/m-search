<template>
  <span class="m-search">
    <el-input
      v-model="keyword"
      @input="handleInput"
      @keyup.enter.native="handleEnter"
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
    // 支持 v-model（value）
    value: {
      type: String,
      default: ''
    },
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
    },
    // 输入防抖时间（毫秒），为 0 表示不防抖
    debounce: {
      type: Number,
      default: 0
    },
    // 是否在按下回车时立即触发一次搜索
    immediateOnEnter: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      type: '',
      keyword: this.value,
      timer: null
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
    // 外部 v-model 变更时同步到内部
    value(val) {
      this.keyword = val
    }
  },
  methods: {
    emitSearch() {
      this.$emit('search', this.keyword)
    },
    scheduleSearch() {
      if (!this.debounce) {
        this.emitSearch()
        return
      }
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        this.emitSearch()
      }, this.debounce)
    },
    handleInput(val) {
      this.keyword = val
      // 同步 v-model
      this.$emit('input', val)
      this.scheduleSearch()
    },
    handleEnter() {
      if (this.immediateOnEnter) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.emitSearch()
      }
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
