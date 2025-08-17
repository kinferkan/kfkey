# KeyFlow 技术文档

## 系统架构

### 整体架构
KeyFlow 采用前端单页应用（SPA）架构，基于 React + TypeScript + Tailwind CSS 构建。整个应用采用组件化设计，遵循分层架构模式，分为 UI 层、业务逻辑层（services）和数据层（data）。

### 技术选型

#### 前端技术栈
- **React v18.3.1**: 用于构建用户界面的核心库
- **TypeScript v5.5.3**: 提供类型安全和更好的开发体验
- **Tailwind CSS v3.4.1**: 用于样式设计的实用优先 CSS 框架
- **Vite v5.4.19**: 构建工具，提供快速的开发和构建体验
- **Zustand**: 轻量级状态管理解决方案
- **Fuse.js**: 实现高性能模糊搜索功能
- **shadcn/ui**: 基于 Radix UI 和 Tailwind CSS 的 UI 组件库
- **Lucide React**: 图标库

#### 开发与部署工具
- **Node.js >= 18.0.0**: 运行时环境
- **npm >= 9.0.0**: 包管理工具

## 核心模块设计

### 数据层 (Data Layer)

#### 数据结构
```typescript
// 快捷键接口
interface Shortcut {
  id: string           // 唯一标识符
  keys: string[]       // 按键组合
  description: string  // 功能描述
  category: string     // 功能分类
  platform: Platform   // 支持的平台
  matchScore?: number  // 匹配分数（搜索时使用）
}

// 工具接口
interface Tool {
  id: string           // 唯一标识符
  name: string         // 工具名称
  category: string     // 工具分类
  icon: string         // 工具图标URL
  shortcuts: Shortcut[]// 快捷键列表
  popularity: number   // 热度评分 (0-100)
  lastUpdated: Date    // 最后更新时间
  description?: string // 工具描述
  isFavorite?: boolean // 是否被收藏
  website?: string     // 官方网站
  version?: string     // 版本信息
  tags?: string[]      // 标签
}
```

#### 数据组织
工具数据按分类组织，存储在 [src/data/](file:///E:/git_ai/kf-key/keyflow-platform/src/data/index.ts) 目录下：
- [tools-registry.ts](file:///E:/git_ai/kf-key/keyflow-platform/src/data/tools-registry.ts): 工具注册表，集中管理所有工具的配置信息
- [tools.ts](file:///E:/git_ai/kf-key/keyflow-platform/src/data/tools.ts): 工具数据管理模块，提供统一的数据访问接口
- [shortcuts/](file:///E:/git_ai/kf-key/keyflow-platform/src/data/shortcuts/): 各个工具的快捷键数据文件

### 业务逻辑层 (Services Layer)

#### ToolService
[tool-service.ts](file:///E:/git_ai/kf-key/keyflow-platform/src/services/tool-service.ts) 提供工具数据的统一管理和操作接口：
- 初始化和获取工具数据
- 根据ID或分类获取工具
- 工具搜索和排序功能
- 获取工具统计信息

#### FavoriteService
[favorite-service.ts](file:///E:/git_ai/kf-key/keyflow-platform/src/services/favorite-service.ts) 管理用户收藏的工具：
- 使用 localStorage 持久化存储收藏数据
- 添加、删除和切换工具收藏状态
- 获取收藏的工具列表和统计信息

#### SearchService
[search-service.ts](file:///E:/git_ai/kf-key/keyflow-platform/src/services/search-service.ts) 提供高级搜索功能：
- 基于 Levenshtein 距离的模糊匹配算法
- 支持按工具名称、快捷键描述等多维度搜索
- 搜索结果智能排序

### UI 层 (UI Layer)

#### 主要组件

##### 布局组件
- [MainLayout](file:///E:/git_ai/kf-key/keyflow-platform/src/components/main-layout.tsx#L23-L85): 主布局组件，包含顶部导航栏和整体页面结构
- [Sidebar](file:///E:/git_ai/kf-key/keyflow-platform/src/components/sidebar.tsx#L18-L80): 侧边栏组件，用于分类导航

##### 核心功能组件
- [ToolGrid](file:///E:/git_ai/kf-key/keyflow-platform/src/components/tool-grid.tsx#L28-L133): 工具网格展示组件
- [ToolDetail](file:///E:/git_ai/kf-key/keyflow-platform/src/components/tool-detail.tsx#L30-L153): 工具详情页面组件
- [SearchResults](file:///E:/git_ai/kf-key/keyflow-platform/src/components/search-results.tsx#L25-L112): 搜索结果展示组件
- [KeyboardHeatmap](file:///E:/git_ai/kf-key/keyflow-platform/src/components/keyboard-heatmap.tsx#L69-L381): 键盘热力图可视化组件

##### 公共组件
- [FontAwesomeIcon](file:///E:/git_ai/kf-key/keyflow-platform/src/components/font-awesome-icon.tsx#L4-L26): FontAwesome 图标组件
- [LanguageSwitcher](file:///E:/git_ai/kf-key/keyflow-platform/src/components/language-switcher.tsx#L8-L34): 语言切换组件
- [ShortcutList](file:///E:/git_ai/kf-key/keyflow-platform/src/components/shortcut-list.tsx#L33-L131): 快捷键列表组件

## 国际化支持

使用 i18next 实现多语言支持，语言资源文件存储在 [src/i18n/locales/](file:///E:/git_ai/kf-key/keyflow-platform/src/i18n/locales/) 目录下：
- [en.json](file:///E:/git_ai/kf-key/keyflow-platform/src/i18n/locales/en.json): 英语资源
- [de.json](file:///E:/git_ai/kf-key/keyflow-platform/src/i18n/locales/de.json): 德语资源
- [zh.json](file:///E:/git_ai/kf-key/keyflow-platform/src/i18n/locales/zh.json): 中文资源

## 状态管理

使用 Zustand 进行轻量级状态管理，主要管理：
- 主题状态（亮色/暗色）
- 收藏状态
- 搜索状态

## 搜索算法

搜索功能基于自定义的相似度计算算法：
1. 完全匹配：100分
2. 开头匹配：90分
3. 包含匹配：80分
4. 模糊匹配：基于 Levenshtein 距离计算相似度，最高70分

搜索结果按匹配分数、工具热度和匹配快捷键数量排序。

## 键盘热力图实现

[KeyboardHeatmap](file:///E:/git_ai/kf-key/keyflow-platform/src/components/keyboard-heatmap.tsx#L69-L381) 组件实现交互式键盘热力图：
- 支持 Windows 和 macOS 两种键盘布局
- 根据快捷键使用频率计算按键热度等级
- 点击按键可查看相关快捷键列表

## 开发环境搭建

### 环境要求
- Node.js >= 18.0.0
- npm >= 9.0.0

### 安装步骤
```bash
git clone https://github.com/yourusername/keyflow-platform.git
cd keyflow-platform
npm install
```

### 开发命令
```bash
# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 部署

项目可部署到任何支持静态文件托管的服务上，如：
- Vercel
- Netlify
- GitHub Pages
- 传统 Web 服务器

构建后的文件位于 `dist/` 目录中。