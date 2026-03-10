// 兼容 CommonJS 和 ES Module
import MSearch from './MSearch.vue'
import MTag from './MTag.vue'

const components = [MSearch, MTag]

// 支持 Vue.use(MSearch)，一次性注册所有组件
MSearch.install = function (Vue) {
  components.forEach((comp) => {
    Vue.component(comp.name, comp)
  })
}

// 允许通过命名导出单独使用
export { MSearch, MTag }

// 默认导出仍然是 MSearch（兼容原有用法）
export default MSearch