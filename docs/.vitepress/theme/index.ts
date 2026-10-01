// 自定义主题扩展
// 可以在这里引入自定义样式、组件等

import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // 可以在这里注册全局组件
  },
}