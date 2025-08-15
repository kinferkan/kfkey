# KeyFlow - 开发工具快捷键导航平台

<div align="center">
  <img src="public/logo.svg" alt="KeyFlow Logo" width="120" height="120">
  
  <h3>专业的开发工具快捷键导航平台</h3>
  
  <p>一站式快捷键查询工具，支持16个主流开发工具，提供交互式键盘热力图和智能搜索功能</p>

  [![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue.svg)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.1-blue.svg)](https://tailwindcss.com/)
  [![Vite](https://img.shields.io/badge/Vite-5.4.19-blue.svg)](https://vitejs.dev/)
  [![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
</div>

## ✨ 特性

### 🎯 核心功能
- **16个主流开发工具**：VSCode、IntelliJ IDEA、WebStorm、PyCharm、GoLand、CLion、Sublime Text、Eclipse、Android Studio、Xcode、HBuilder X、Atom、Photoshop、Figma、Chrome DevTools、Firefox DevTools
- **分类筛选系统**：IDE/编辑器、设计工具、浏览器工具
- **交互式键盘热力图**：可视化快捷键展示
- **全局搜索功能**：模糊匹配快捷键和工具描述
- **收藏功能**：本地存储用户偏好
- **主题切换**：暗黑/亮色模式
- **响应式设计**：完美适配桌面端和移动端

### 🔧 技术特色
- **现代化技术栈**：React + TypeScript + Tailwind CSS + shadcn/ui
- **高性能搜索**：Fuse.js模糊搜索引擎
- **状态管理**：Zustand轻量级状态管理
- **PWA支持**：可安装的Web应用
- **完整SEO优化**：meta标签、sitemap、结构化数据

### 🎨 设计亮点
- **现代科技风格**：深蓝灰主色调配合亮蓝点缀
- **毛玻璃效果**：现代化视觉层次
- **3D键盘效果**：真实的按键视觉反馈
- **流畅动画**：提升用户交互体验

## 🚀 快速开始

### 环境要求
- Node.js >= 18.0.0
- npm >= 9.0.0

### 安装依赖
```bash
git clone https://github.com/yourusername/keyflow-platform.git
cd keyflow-platform
npm install
```

### 启动开发服务器
```bash
npm run dev
```

访问 `http://localhost:5173` 查看应用。

### 构建生产版本
```bash
npm run build
```

### 预览生产版本
```bash
npm run preview
```

## 📁 项目结构

```
keyflow-platform/
├── public/                 # 静态资源
│   ├── icons/             # 工具图标
│   ├── manifest.json      # PWA配置
│   ├── sitemap.xml        # SEO站点地图
│   └── robots.txt         # 爬虫规则
├── src/
│   ├── components/        # React组件
│   │   ├── ui/           # shadcn/ui组件
│   │   ├── keyboard-heatmap.tsx
│   │   ├── main-layout.tsx
│   │   ├── sidebar.tsx
│   │   ├── tool-grid.tsx
│   │   └── tool-detail.tsx
│   ├── data/             # 数据层
│   │   ├── shortcuts/    # 各工具快捷键数据
│   │   ├── tools-registry.ts
│   │   └── tools.ts
│   ├── services/         # 业务逻辑
│   │   ├── favorite-service.ts
│   │   ├── search-service.ts
│   │   └── tool-service.ts
│   ├── config/           # 配置文件
│   │   └── seo-config.ts
│   ├── types/            # TypeScript类型定义
│   └── hooks/            # 自定义Hooks
├── package.json
└── README.md
```

## 🛠️ 支持的工具

### IDE/编辑器 (12个)
- Visual Studio Code
- IntelliJ IDEA
- WebStorm
- PyCharm
- GoLand
- CLion
- Sublime Text
- Eclipse IDE
- Android Studio
- Xcode
- HBuilder X
- Atom

### 设计工具 (2个)
- Adobe Photoshop
- Figma

### 浏览器工具 (2个)
- Chrome DevTools
- Firefox DevTools

## 🎮 使用指南

### 基本操作
1. **浏览工具**：在左侧分类中选择工具类型
2. **搜索快捷键**：使用顶部搜索框或按 `Ctrl+K`
3. **查看详情**：点击工具卡片查看完整快捷键列表
4. **收藏工具**：点击心形图标收藏常用工具
5. **切换主题**：在设置中切换暗黑/亮色模式

### 键盘快捷键
- `Ctrl+K` / `Cmd+K`：聚焦搜索框
- `Esc`：清空搜索内容

## 🔍 SEO优化

项目包含完整的SEO优化方案：
- Meta标签优化
- 结构化数据
- Sitemap.xml
- Robots.txt
- 针对每个工具的专门SEO配置
- 长尾关键词策略

## 🤝 贡献指南

欢迎贡献代码！请遵循以下步骤：

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

### 添加新工具
1. 在 `src/data/shortcuts/` 中创建快捷键数据文件
2. 在 `src/data/tools-registry.ts` 中注册工具
3. 添加工具图标到 `public/icons/`
4. 更新SEO配置

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- [React](https://reactjs.org/) - 用户界面库
- [TypeScript](https://www.typescriptlang.org/) - 类型安全
- [Tailwind CSS](https://tailwindcss.com/) - CSS框架
- [shadcn/ui](https://ui.shadcn.com/) - UI组件库
- [Fuse.js](https://fusejs.io/) - 模糊搜索
- [Lucide React](https://lucide.dev/) - 图标库

## 📞 联系方式

如有问题或建议，请通过以下方式联系：

- 提交 [Issue](https://github.com/yourusername/keyflow-platform/issues)
- 发送邮件至：your.email@example.com

---

<div align="center">
  <p>如果这个项目对您有帮助，请给个 ⭐️ 支持一下！</p>
</div>