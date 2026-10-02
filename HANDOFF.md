# ARK 云龙战队官网 — 项目交接文档

> 给新对话的 AI 助手：请根据本文档继续协助用户修改已部署的网站。

---

## 1. 战队信息

- **学校**：徐州工程学院
- **战队名**：ARK（云龙）战队
- **身份**：初创社团，正在备战 RM2027 赛季
- **口号**：让每一颗螺丝都有灵魂，让每一行代码都有力量
- **实际分组**：机械 / 电控 / 硬件 / 视觉 / 运营（共 5 组，2026 招新季启用）

---

## 2. 网站现状

- **已部署地址**：https://shixiangyu0523.github.io/arkrobomaster/
- **技术栈**：VitePress 1.6（Vue 驱动，Markdown 编写）+ 自定义 Vue 组件
- **当前状态**：已上线运行；2026-10-02 完成招新页 2.0 改造（投票 + 面试题库）

### 已有页面

| 页面 | 路径 | 内容 |
|------|------|------|
| 首页 | `/` | Hero（新方形 Logo）+ Features + 最新动态 |
| 战队介绍 | `/about/` | 初创战队介绍 |
| 备赛资料总览 | `/guide/` | 学习路线图、四方向卡片 |
| 机械 / 电控 / 视觉 / 算法 | `/guide/xxx` | 各方向资料 |
| 赛事资讯 | `/news/` | RM2027 规则变更详情 |
| 招新页面 | `/recruitment/` | **意向投票（主体）+ 面试题库入口 + 海报** |
| 面试题库 | `/interview/` | 规则题 18 + 专业题 15（5 组各 3）+ 开放题 5 |
| 开源项目 | `/projects/` | RM 社区开源项目汇总 |
| 技术博客 | `/blog/` | 招新模板文章 |

### 招新投票模块（2026-10-02 新增）

- **位置**：`docs/recruitment/index.md` 中以 `<VotePanel />` 引用
- **组件源码**：`docs/.vitepress/theme/components/VotePanel.vue`（已在 theme/index.ts 显式注册）
- **功能**：意向组别（5 选 1）+ 面试时间段（6 选 1，10月10/11日各三段）→ 提交后实时显示 6 个时段票数并高亮最高时段；组别分布一并展示
- **数据存储**：
  - 跨访客票数聚合：Abacus 免费公共计数服务 `https://abacus.jasoncameron.dev`
    - 命名空间 `ark-yunlong-2026`；键：`d1-am`~`d2-ev`（时段）、`grp-mech/elec/hw/vis/ops`（组别）
    - `GET /get/{ns}/{key}` 只读；`GET /hit/{ns}/{key}` +1 并返回新值
  - 同浏览器限投 1 次：localStorage 键 `ark-intent-vote-2026`
- **换赛季重置方法**：改 VotePanel.vue 里的 `VOTE_NS` 和 `STORAGE_KEY`（如 `-2027`），重新构建上传即可
- **降级策略**：计数服务超时 6 秒自动放弃，页面显示"统计服务暂时不可达"，投票仍记录在本机，页面永不报错

---

## 3. GitHub 仓库信息

- **仓库地址**：https://github.com/shixiangyu0523/arkrobomaster
- **用户名**：shixiangyu0523
- **仓库名**：arkrobomaster
- **默认分支**：master
- **GitHub Pages**：已启用，从 master 分支 `/` 根目录部署（仓库根目录=构建产物 dist）
- **Personal Access Token**：`ghp_Ico··（脱敏：完整令牌见本地交接文档，勿放公开仓库）`
  - 权限：repo（全部）
  - 用途：通过 API 上传/修改仓库文件
  - 免费，不涉及任何费用
  - ⚠️ **GitHub 密钥扫描会拦截含明文 Token 的文件**：公开仓库里的 HANDOFF.md 为脱敏版（令牌打码），完整令牌只存于本沙箱文件 `D:\DSH\workspace\ark-robomaster\HANDOFF.md`
  - ⚠️ 注意：本文件在公开仓库里，Token 随之公开；招新季结束后建议去 GitHub Settings → Tokens 撤销并换新的

---

## 4. 本地项目路径

- **沙箱源码路径**（AI 可操作）：`D:\DSH\workspace\ark-robomaster\`
- **用户桌面副本**（用户可访问）：`C:\Users\17826\Desktop\ark-robomaster`（旧版，需更新）
- **Gitee 备用仓库**：https://gitee.com/yunlongark/ark-robomaster（有源码，但 GitHub 是主力）

---

## 5. 修改网站的方法

### 方法 A：通过 GitHub API（推荐，AI 可操作）

1. AI 修改 `D:\DSH\workspace\ark-robomaster\docs\` 下的 `.md` 文件（或组件/样式）
2. 运行 `npm run build` 构建（见下方命令；沙箱下构建需要完全权限，spawn esbuild 会被限制权限拦截）
3. 用 GitHub API + Token 上传 `docs\.vitepress\dist\` 下所有文件到仓库根目录
4. GitHub Pages 自动重新部署（约 30 秒~1 分钟生效）

### 构建命令

```powershell
Set-Location D:\DSH\workspace\ark-robomaster
node "C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js" run build
```

### API 上传命令模板

```powershell
$token = "ghp_Ico··（脱敏：完整令牌见本地交接文档，勿放公开仓库）"
$headers = @{ Authorization = "Bearer $token"; Accept = "application/vnd.github+json" }
# 获取已有文件的 SHA（更新必须）
$existing = Invoke-RestMethod -Uri "https://api.github.com/repos/shixiangyu0523/arkrobomaster/contents/index.html" -Headers $headers
$sha = $existing.sha
# 上传更新
$body = @{ message="update"; content=$base64content; branch="master"; sha=$sha } | ConvertTo-Json -Compress
Invoke-RestMethod -Uri "https://api.github.com/repos/shixiangyu0523/arkrobomaster/contents/index.html" -Method Put -Headers $headers -Body $body -ContentType "application/json"
```

### ⚠️ 重要经验（踩过的坑）

- **本地 HTTP 服务器预览不可行**：沙箱 localhost 与用户浏览器网络隔离，用户永远打不开，别再试
- **VitePress 组件必须显式注册**：`.vitepress/theme/components/` 下的 Vue 组件**不会**自动注册，必须在 `theme/index.ts` 的 `enhanceApp` 里 `app.component('VotePanel', VotePanel)`，否则页面渲染为空
- **Markdown 里的裸 HTML `<a href="/xxx/">` 不会带 base 前缀**：部署到 GitHub Pages 会 404；站内链接一律用 markdown 语法 `[文字](/xxx/)`，图片会自动补前缀
- **构建差量上传**：先 `GET /git/trees/master?recursive=1` 拿全部 blob SHA，与本地计算值比对（SHA1("blob <len>\n"+bytes)），只传有变化的，删除远端多余旧资源（保留 HANDOFF.md）

### 方法 B：用户本地操作

1. 修改 `C:\Users\17826\Desktop\ark-robomaster\docs\` 下的 `.md` 文件
2. 运行 `npm run build`
3. 把 `docs\.vitepress\dist\` 下所有文件拖到 GitHub 网页上传

---

## 6. 关键配置文件

### VitePress 配置：`docs\.vitepress\config.mts`

- **base**：`/arkrobomaster/`（GitHub Pages 需要，本地预览改成 `/`）
- **导航**：首页/战队介绍/备赛资料/赛事资讯/招新（下拉：招新主页+面试题库）/开源&博客
- **favicon**：`/arkrobomaster/logo.svg`（2026-10-02 修复了原 /favicon.ico 404）
- **搜索**：本地搜索（中文翻译）
- **配色**：RM 红 `#e74c3c`

### 自定义样式：`docs\.vitepress\theme\style.css`

- RM 红 + 金色渐变配色、卡片悬停效果、招新按钮动画、时间线组件
- 2026-10-02 新增：`.quiz-link-card`（题库链接卡片）、`.poster-wrap`（海报排版，防拉伸、宽度受控）
- 响应式适配（≤768px 移动端）

### 投票组件：`docs\.vitepress\theme\components/VotePanel.vue`

- 纯前端实现：Vue 3 组合式 API + fetch，无第三方依赖
- 样式 scoped 在组件内，自适应明暗模式

### 图片资源：`docs/public/`

- `ark-logo.jpeg`：**2026-10-02 更新**为方形 Logo（1024×1024，用于导航栏/首页 Hero/投票卡片头部）
- `poster.jpeg`：**2026-10-02 更新**为竖版招新海报（1024×1536，用于招新页海报区）
- `logo.svg` / `logo.png`：旧版图标（favicon 用 svg）

---

## 7. 用户偏好与要求

- **目标受众**：社团成员 + 招新对象，仅国内
- **部署要求**：免费、国内可访问、免翻墙
- **维护要求**：零代码 / Markdown 编辑即可
- **不喜欢**：复杂流程、多次尝试失败、绕弯路
- **身份**：学生，初创社团，对技术细节不太熟悉
- **沟通风格**：直接有效，一步到位，别浪费他的时间
- **投票设计要求**：无后端、不收集个人信息、只做意向粗略统计、不要求强防刷

---

## 8. 2026-10-02 改动清单（本轮）

| 文件 | 改动 |
|------|------|
| `docs/recruitment/index.md` | 重构：投票模块为页面主体；新增题库链接卡片；海报排版修复；组别表改 5 组；招新流程改为 投票→面试→录取；新增投票相关 FAQ |
| `docs/interview/index.md` | 新建：面试题库页（28 题），剔除原 .doc 里的私人备注 |
| `docs/.vitepress/theme/components/VotePanel.vue` | 新建：意向投票组件 |
| `docs/.vitepress/theme/index.ts` | 显式注册 VotePanel 全局组件 |
| `docs/.vitepress/theme/style.css` | 新增题库卡片/海报样式；按钮样式扩展；移动端适配 |
| `docs/.vitepress/config.mts` | 导航"招新"改下拉（主页+题库）；favicon 修复 |
| `docs/public/ark-logo.jpeg` | 替换为方形新 Logo |
| `docs/public/poster.jpeg` | 替换为竖版新海报 |

---

## 9. 下一步待办

- [ ] 投票结束后从 Abacus 读取各组别/时段票数（直接浏览器打开 `https://abacus.jasoncameron.dev/get/ark-yunlong-2026/d1-am` 等）
- [ ] 补充战队实际照片
- [ ] 考虑添加 Gitee Pages 作为国内备用（需实名认证）
- [ ] 招新季结束后轮换 GitHub Token（当前 Token 已随本文件公开）

---

## 10. 文件结构

```
ark-robomaster/
├── docs/
│   ├── .vitepress/
│   │   ├── config.mts              ← 导航/侧栏/搜索/base 配置
│   │   └── theme/
│   │       ├── index.ts            ← 主题入口（注册全局组件）
│   │       ├── style.css           ← 自定义样式
│   │       └── components/
│   │           └── VotePanel.vue   ← 招新意向投票组件（2026-10-02 新增）
│   ├── index.md                    ← 首页
│   ├── about/index.md              ← 战队介绍
│   ├── guide/                      ← 备赛资料
│   │   ├── index.md
│   │   ├── mechanical.md
│   │   ├── electronics.md
│   │   ├── vision.md
│   │   └── algorithm.md
│   ├── news/index.md               ← 赛事资讯
│   ├── recruitment/index.md        ← 招新（投票主体页）
│   ├── interview/index.md          ← 面试题库（2026-10-02 新增）
│   ├── projects/index.md           ← 开源项目
│   ├── blog/                       ← 技术博客
│   │   ├── index.md
│   │   ├── 2026-09-01-welcome.md
│   │   └── 2026-09-15-vision-guide.md
│   └── public/                     ← 图片资源
│       ├── ark-logo.jpeg           ← 方形 Logo（导航栏/Hero/投票卡片）
│       ├── poster.jpeg             ← 竖版招新海报
│       ├── logo.svg / logo.png     ← 旧版图标（favicon）
└── package.json
```

---

*文档更新时间：2026-10-02 | 项目：ARK 云龙战队官网 | 部署平台：GitHub Pages*
