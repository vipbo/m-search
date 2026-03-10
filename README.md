## m-search-component-vue

基于 **Vue 2 + Element UI** 的搜索输入组件。

### 安装

```bash
npm install m-search-component-vue element-ui vue@^2.6
```

---

### 使用方式一：通过 npm（webpack / Vite 等打包工具）

#### 1. 在入口文件中注册组件（例如 `main.js`）

```js
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import MSearch from 'm-search-component-vue'
import 'm-search-component-vue/dist/m-search-component-vue.css'

Vue.use(ElementUI)

Vue.component('MSearch', MSearch)

new Vue({
  render: h => h(App)
}).$mount('#app')
```

#### 2. 在业务组件中使用

```vue
<template>
  <div>
    <MSearch
      :width="300"
      :ml="20"
      :mr="20"
      placeholder="请输入关键字"
      @search="handleSearch"
    />
  </div>
</template>

<script>
export default {
  methods: {
    handleSearch(keyword) {
      console.log('搜索关键字：', keyword)
      // 在这里执行搜索逻辑，如发送请求、过滤列表等
    }
  }
}
</script>
```

> 也可以在单个组件中按需注册：
>
> ```js
> import MSearch from 'm-search-component-vue'
> import 'm-search-component-vue/dist/m-search-component-vue.css'
>
> export default {
>   components: { MSearch }
> }
> ```

---

### 使用方式二：通过 `<script>` + `<link>`（CDN / 传统页面）

#### 1. 在 HTML 中引入依赖和组件

```html
<!-- Vue 2 -->
<script src="https://unpkg.com/vue@2/dist/vue.js"></script>

<!-- Element UI -->
<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css" />
<script src="https://unpkg.com/element-ui/lib/index.js"></script>

<!-- m-search-component-vue（根据实际部署路径修改 src/href） -->
<link rel="stylesheet" href="/dist/m-search-component-vue.css" />
<script src="/dist/m-search-component-vue.umd.js"></script>
```

#### 2. 在页面中注册并使用组件

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>MSearch Demo</title>

    <!-- Element UI 样式 -->
    <link
      rel="stylesheet"
      href="https://unpkg.com/element-ui/lib/theme-chalk/index.css"
    />
    <!-- 你的组件样式 -->
    <link rel="stylesheet" href="./dist/m-search-component-vue.css" />
  </head>

  <body>
    <div id="app">
      <m-search
        :width="300"
        :ml="20"
        :mr="20"
        placeholder="请输入关键字"
        @search="handleSearch"
      ></m-search>
    </div>

    <!-- Vue 2 -->
    <script src="https://unpkg.com/vue@2/dist/vue.js"></script>
    <!-- Element UI JS -->
    <script src="https://unpkg.com/element-ui/lib/index.js"></script>
    <!-- 你的 UMD 组件包 -->
    <script src="./dist/m-search-component-vue.umd.js"></script>

    <script>
      // 注册 Element UI
      Vue.use(ELEMENT)

      // 注册 MSearch 组件（rollup.config.js 里 name: 'MSearch'）
      Vue.component('MSearch', window.MSearch)

      // 创建根实例（此时 #app 已经在 DOM 中）
      new Vue({
        el: '#app',
        methods: {
          handleSearch(keyword) {
            console.log('搜索关键字：', keyword)
          }
        }
      })
    </script>
  </body>
</html>
```

---

### API 说明

- **props**
  - **`width`**: `Number | String`，搜索输入框宽度，默认 `298`（内部会加 `px`）。
  - **`ml`**: `Number | String`，左外边距，默认 `10`（`px`）。
  - **`mr`**: `Number | String`，右外边距，默认 `10`（`px`）。
  - **`placeholder`**: `String`，输入框占位文本，默认空字符串。

- **events**
  - **`search`**：当输入内容变化时触发，回调参数为当前关键字字符串。

> 注意：组件内部使用的是 Element UI 的 `<el-input>`，请确保项目中已经正确安装并引入 Element UI。