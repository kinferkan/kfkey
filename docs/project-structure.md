# KeyFlow 项目结构

## 项目概览

```
keyflow-platform/
├── public/                    # 静态资源目录
├── src/                       # 源代码目录
│   ├── components/            # React 组件
│   ├── config/                # 配置文件
│   ├── data/                  # 数据文件
│   ├── hooks/                 # 自定义 React hooks
│   ├── i18n/                  # 国际化配置
│   ├── lib/                   # 工具函数库
│   ├── services/              # 业务逻辑服务
│   ├── types/                 # TypeScript 类型定义
│   └── utils/                 # 工具函数
├── docs/                      # 文档目录（新增）
└── package.json               # 项目配置文件
```

## 详细目录结构

### public/
存放静态资源文件，这些文件会被直接复制到构建输出目录中。

```
public/
├── icons/                     # 工具图标
├── manifest.json              # PWA 配置文件
└── sitemap.xml                # 网站地图
```

### src/
源代码主目录，包含所有应用程序代码。

#### src/components/
React 组件目录，按功能和类型组织。

```
src/components/
├── ui/                        # 基础 UI 组件（来自 shadcn/ui）
│   ├── button.tsx
│   ├── card.tsx
│   ├── input.tsx
│   └── ...                    # 其他 UI 组件
├── font-awesome-icon.tsx      # FontAwesome 图标组件
├── keyboard-heatmap.tsx       # 键盘热力图组件
├── language-switcher.tsx      # 语言切换组件
├── main-layout.tsx            # 主布局组件
├── search-results.tsx         # 搜索结果组件
├── seo-head.tsx               # SEO 头部组件
├── shortcut-list.tsx          # 快捷键列表组件
├── sidebar.tsx                # 侧边栏组件
├── theme-provider.tsx         # 主题提供者组件
├── tool-detail.tsx            # 工具详情组件
└── tool-grid.tsx              # 工具网格组件
```

#### src/config/
应用配置文件。

```
src/config/
└── seo-config.ts              # SEO 配置
```

#### src/data/
应用数据文件，包括工具和快捷键数据。

```
src/data/
├── shortcuts/                 # 各工具快捷键数据
│   ├── android-studio-shortcuts.ts
│   ├── atom-shortcuts.ts
│   ├── chrome-devtools-shortcuts.ts
│   ├── clion-shortcuts.ts
│   ├── eclipse-shortcuts.ts
│   ├── figma-shortcuts.ts
│   ├── firefox-devtools-shortcuts.ts
│   ├── goland-shortcuts.ts
│   ├── intellij-java-shortcuts.ts
│   ├── intellij-shortcuts.ts
│   ├── photoshop-shortcuts.ts
│   ├── pycharm-shortcuts.ts
│   ├── sublime-shortcuts.ts
│   ├── vscode-shortcuts.ts
│   ├── webstorm-shortcuts.ts
│   └── xcode-shortcuts.ts
├── hbuilderx-shortcuts.ts     # HBuilderX 快捷键数据
├── tools-registry.ts          # 工具注册表
└── tools.ts                   # 工具数据管理
```

#### src/hooks/
自定义 React hooks。

```
src/hooks/
├── use-mobile.tsx             # 移动端检测 hook
└── use-toast.ts               # Toast 通知 hook
```

#### src/i18n/
国际化配置和语言资源。

```
src/i18n/
├── locales/                   # 语言资源文件
│   ├── de.json                # 德语
│   ├── en.json                # 英语
│   └── zh.json                # 中文
└── index.ts                   # i18n 配置入口
```

#### src/lib/
工具函数库。

```
src/lib/
└── utils.ts                   # 通用工具函数
```

#### src/services/
业务逻辑服务层。

```
src/services/
├── favorite-service.ts        # 收藏服务
├── platform-service.ts        # 平台服务
├── search-service.ts          # 搜索服务
└── tool-service.ts            # 工具服务
```

#### src/types/
TypeScript 类型定义。

```
src/types/
└── index.ts                   # 所有类型定义
```

#### src/utils/
工具函数。

```
src/utils/
└── i18n-tools.ts              # 国际化工具函数
```

### 根目录文件

```
.
├── App.tsx                    # 应用根组件
├── globals.css                # 全局样式
├── layout.tsx                 # 布局组件
├── main.tsx                   # 应用入口文件
├── README.md                  # 项目说明文档
├── components.json            # shadcn/ui 组件配置
├── index.html                 # HTML 模板
├── package-lock.json          # npm 锁文件
├── package.json               # 项目配置
├── postcss.config.js          # PostCSS 配置
├── tailwind.config.ts         # Tailwind CSS 配置
├── tsconfig.app.json          # TypeScript 应用配置
├── tsconfig.json              # TypeScript 根配置
├── tsconfig.node.json         # TypeScript Node 配置
└── vite.config.ts             # Vite 配置
```

## 数据流设计

1. **数据源**: [src/data/](file:///E:/git_ai/kf-key/keyflow-platform/src/data/index.ts) 目录下的工具和快捷键数据文件
2. **数据管理层**: [src/services/](file:///E:/git_ai/kf-key/keyflow-platform/src/services/index.ts) 提供业务逻辑处理
3. **状态管理层**: 使用 Zustand 管理全局状态（主题、收藏等）
4. **UI 层**: [src/components/](file:///E:/git_ai/kf-key/keyflow-platform/src/components/index.ts) 负责展示和用户交互

## 组件层次结构

```
App
└── ThemeProvider
    └── HelmetProvider
        ├── SEOHead
        ├── MainLayout
        │   ├── Header
        │   │   ├── Mobile Sidebar (Sheet)
        │   │   ├── Logo
        │   │   ├── Search Bar
        │   │   └── Action Buttons
        │   ├── Desktop Sidebar
        │   └── Main Content
        │       ├── ToolGrid / ToolDetail / SearchResults
        │       └── KeyboardHeatmap
        └── Toaster
```

## 样式系统

使用 Tailwind CSS 作为主要样式系统，具有以下特点：

1. **实用优先**: 使用预定义的实用类构建界面
2. **响应式设计**: 内置响应式断点支持
3. **主题定制**: 通过 Tailwind 配置文件定制主题
4. **组件样式**: 结合 shadcn/ui 组件库提供一致的 UI 体验

## 国际化结构

国际化资源按语言分别存储在 [src/i18n/locales/](file:///E:/git_ai/kf-key/keyflow-platform/src/i18n/locales/) 目录下，通过 i18next 管理：

1. **语言检测**: 自动检测用户浏览器语言设置
2. **语言切换**: 通过 [LanguageSwitcher](file:///E:/git_ai/kf-key/keyflow-platform/src/components/language-switcher.tsx#L8-L34) 组件切换语言
3. **资源组织**: 按功能模块组织语言资源键值对

## 构建与部署

使用 Vite 作为构建工具，支持以下功能：

1. **开发服务器**: 快速热重载开发环境
2. **生产构建**: 优化的生产版本构建
3. **静态部署**: 构建结果为静态文件，可部署到任何静态文件服务器