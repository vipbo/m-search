<template>
  <span class="m-tag" :style="tagStyle">
    <slot />
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
  }
}
</script>

<style scoped lang="scss">
.m-tag {
  font-family: inherit;
}
</style>

