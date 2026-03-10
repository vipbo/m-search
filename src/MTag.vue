<template>
  <span class="m-tag" :style="tagStyle">
    <slot />
    <i
      v-if="closable"
      class="m-tag__close el-icon-close"
      @click.stop="handleClose"
    />
  </span>
</template>

<script>
export default {
  name: 'MTag',
  props: {
    // 背景色，例如：'#409EFF'、'red'、'rgba(64,158,255,.1)' 等
    color: {
      type: String,
      default: '#409EFF'
    },
    // 尺寸：small / medium / large
    size: {
      type: String,
      default: 'medium'
    },
    // 是否可关闭
    closable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    tagStyle() {
      const base = {
        display: 'inline-block',
        color: '#fff',
        'background-color': this.color,
        'border-radius': '4px',
        'line-height': 1,
        'vertical-align': 'middle'
      }

      if (this.size === 'small') {
        return {
          ...base,
          padding: '2px 6px',
          'font-size': '12px'
        }
      }

      if (this.size === 'large') {
        return {
          ...base,
          padding: '6px 12px',
          'font-size': '14px'
        }
      }

      // medium 默认
      return {
        ...base,
        padding: '4px 10px',
        'font-size': '13px'
      }
    }
  },
  methods: {
    handleClose() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang="scss">
.m-tag {
  font-family: inherit;
  display: inline-flex;
  align-items: center;
}

.m-tag__close {
  margin-left: 4px;
  font-size: 12px;
  cursor: pointer;
}
</style>

