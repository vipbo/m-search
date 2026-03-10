// 兼容 CommonJS 和 ES Module
import MSearch from './MSearch.vue'

// 支持 Vue.use(MSearch)
MSearch.install = function (Vue) {
  Vue.component(MSearch.name, MSearch)
}

// 默认导出
export default MSearch