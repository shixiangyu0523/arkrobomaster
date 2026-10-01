import { defineConfig } from 'vitepress'

// ============================================================
//  ARK（云龙）战队 — 徐州工程学院 RoboMaster 战队官网
//  修改下面的信息为你自己的战队信息即可
// ============================================================

export default defineConfig({
  // --- 基础信息 ---
  title: 'ARK 云龙战队',
  description: '徐州工程学院 ARK（云龙）战队 — RoboMaster 机甲大师备赛资料、赛事资讯、技术分享',

  // 网站语言
  lang: 'zh-CN',

  // --- head 标签 ---
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#e74c3c' }],
  ],

  // --- URL 基础路径（Gitee Pages 用仓库名） ---
  // Gitee Pages 部署在 username.gitee.io/repo-name，所以填 '/仓库名/'
  base: '/ark-robomaster/',

  // 清理 URL（去掉 .html 后缀）
  cleanUrls: true,

  // --- 主题配置 ---
  themeConfig: {
    // 网站 Logo
    logo: '/ark-logo.jpeg',

    // --- 顶部导航 ---
    nav: [
      { text: '首页', link: '/' },
      { text: '战队介绍', link: '/about/' },
      {
        text: '备赛资料',
        items: [
          { text: '总览', link: '/guide/' },
          { text: '机械', link: '/guide/mechanical' },
          { text: '电控', link: '/guide/electronics' },
          { text: '视觉', link: '/guide/vision' },
          { text: '算法', link: '/guide/algorithm' },
        ],
      },
      { text: '赛事资讯', link: '/news/' },
      { text: '招新', link: '/recruitment/' },
      {
        text: '开源 & 博客',
        items: [
          { text: '开源项目', link: '/projects/' },
          { text: '技术博客', link: '/blog/' },
        ],
      },
    ],

    // --- 侧边栏（按路径自动） ---
    sidebar: {
      '/guide/': [
        {
          text: '📚 备赛资料',
          items: [
            { text: '总览', link: '/guide/' },
            { text: '🛠️ 机械', link: '/guide/mechanical' },
            { text: '⚡ 电控', link: '/guide/electronics' },
            { text: '👁️ 视觉', link: '/guide/vision' },
            { text: '🧠 算法', link: '/guide/algorithm' },
          ],
        },
      ],
      '/news/': [
        {
          text: '📰 赛事资讯',
          items: [
            { text: '全部资讯', link: '/news/' },
          ],
        },
      ],
      '/blog/': [
        {
          text: '📝 技术博客',
          items: [
            { text: '全部文章', link: '/blog/' },
          ],
        },
      ],
    },

    // --- 社交链接（右上角图标） ---
    socialLinks: [
      { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm4.57 9.066c.174.174.174.456 0 .63l-3.398 3.398l.87.87l2.527-2.527a.222.222 0 0 1 .38.158v4.598a.222.222 0 0 1-.38.158l-2.527-2.528l-3.398 3.398a.445.445 0 0 1-.63 0l-.712-.712a.445.445 0 0 1 0-.63l3.398-3.398l-2.528-2.528a.222.222 0 0 1 .158-.38h4.598c.083 0 .163.033.222.092l1.9 1.9z"/></svg>' }, link: 'https://gitee.com/yunlongark/ark-robomaster' },
    ],

    // --- 页脚 ---
    footer: {
      message: '徐州工程学院 ARK（云龙）战队',
      copyright: `Copyright © ${new Date().getFullYear()} ARK 云龙战队 — 让每一颗螺丝都有灵魂`,
    },

    // --- 搜索 ---
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '未找到相关结果',
            resetButtonTitle: '清除搜索',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },

    // --- 编辑链接 ---
    editLink: {
      pattern: 'https://gitee.com/yunlongark/ark-robomaster/edit/main/docs/:path',
      text: '在 Gitee 上编辑此页',
    },

    // --- 最后更新时间（需要 git，部署后自动生效） ---
    // lastUpdated: {
    //   text: '最后更新于',
    //   formatOptions: {
    //     dateStyle: 'short',
    //     timeStyle: 'medium',
    //   },
    // },

    // --- 文档页脚 ---
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    // --- 大纲 ---
    outline: {
      label: '本页目录',
      level: [2, 3],
    },
  },

  // --- Markdown 扩展 ---
  markdown: {
    // 数学公式支持（如需启用，请安装 markdown-it-mathjax3）
    // math: true,
    // 行内代码高亮
    lineNumbers: true,
  },
})