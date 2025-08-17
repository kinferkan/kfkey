# 未国际化的内容清单

在对 KeyFlow 项目进行检查后，发现以下内容尚未进行国际化处理。这些内容目前硬编码在代码中，需要添加到语言资源文件中并使用 `t()` 函数进行翻译。

**注意**: 此文档反映了在检查时发现的问题。部分问题可能已在后续更新中解决。

## 1. 键盘热力图组件 ([keyboard-heatmap.tsx](file:///E:/git_ai/kf-key/keyflow-platform/src/components/keyboard-heatmap.tsx))

### 键盘按键显示文本
~~键盘布局中的按键文本是硬编码的，例如：~~
~~- `Esc`, `F1`-`F12`~~
~~- 字母键 `Q`, `W`, `E` 等~~
~~- 功能键 `Tab`, `Caps`, `Shift` 等~~

**状态**: **已修复** - 键盘按键文本已添加到语言资源文件中并通过 `t()` 函数进行翻译。

### 快捷键显示文本
在工具提示中显示的快捷键文本没有国际化：

```jsx
<div key={index} className="text-xs text-muted-foreground">
  {shortcut.keys.join(' + ')}: {shortcut.description}
</div>
```

## 2. 工具详情组件 ([tool-detail.tsx](file:///E:/git_ai/kf-key/keyflow-platform/src/components/tool-detail.tsx))

### 平台名称
~~平台选择下拉菜单中的平台名称是硬编码的：~~

```jsx
<SelectItem value="win">Windows</SelectItem>
<SelectItem value="mac">macOS</SelectItem>
<SelectItem value="linux">Linux</SelectItem>
```

**状态**: **已修复** - 平台名称已添加到语言资源文件中并通过 `t()` 函数进行翻译。

### 工具信息显示
~~工具卡片中的快捷键数量显示没有国际化：~~

```jsx
<Badge variant="secondary">
  {tool.shortcuts.length} 个快捷键
</Badge>
```

**状态**: **已修复** - 数量单位已添加到语言资源文件中并通过 `t()` 函数进行翻译。

### 分类显示
分类选择下拉菜单中显示的分类名称没有国际化：

```jsx
<SelectItem key={category} value={category}>
  {category}
</SelectItem>
```

## 3. 快捷键列表组件 ([shortcut-list.tsx](file:///E:/git_ai/kf-key/keyflow-platform/src/components/shortcut-list.tsx))

### 分类中的快捷键数量显示
~~分类标题中的快捷键数量显示没有国际化：~~

```jsx
<Badge variant="secondary">
  {groupedShortcuts[category].length} 个
</Badge>
```

**状态**: **已修复** - 数量单位已添加到语言资源文件中并通过 `t()` 函数进行翻译。

### 平台显示
平台显示没有完全国际化：

```jsx
<Badge variant="outline" className="text-xs">
  {shortcut.platform === 'all' ? t('shortcutList.allPlatforms') : shortcut.platform.toUpperCase()}
</Badge>
```

## 4. 工具网格组件 ([tool-grid.tsx](file:///E:/git_ai/kf-key/keyflow-platform/src/components/tool-grid.tsx))

### 分类标签显示
工具卡片中的分类标签显示没有国际化：

```jsx
<Badge variant="outline" className="text-xs mt-1">
  {tool.category}
</Badge>
```

### 快捷键数量显示
工具卡片中的快捷键数量显示已正确国际化：

```jsx
<span>{t('toolGrid.shortcuts', { count: tool.shortcuts.length })}</span>
```

### 更新日期显示
更新日期显示没有国际化：

```jsx
<div className="text-xs text-muted-foreground">
  {t('toolGrid.updatedOn', { date: tool.lastUpdated.toLocaleDateString() })}
</div>
```

## 5. 搜索结果组件 ([search-results.tsx](file:///E:/git_ai/kf-key/keyflow-platform/src/components/search-results.tsx))

### 工具结果中的快捷键数量显示
~~工具搜索结果中的快捷键数量显示没有国际化：~~

```jsx
<span>{tool.shortcuts.length} 个快捷键</span>
```

**状态**: **已修复** - 数量单位已添加到语言资源文件中并通过 `t()` 函数进行翻译。

### 快捷键结果中的平台显示
平台显示没有完全国际化：

```jsx
<Badge variant="outline" className="text-xs">
  {result.shortcut.platform === 'all' ? '全平台' : result.shortcut.platform.toUpperCase()}
</Badge>
```

## 6. 工具描述国际化工具 ([i18n-tools.ts](file:///E:/git_ai/kf-key/keyflow-platform/src/utils/i18n-tools.ts))

### 快捷键分类映射
快捷键分类映射中的中文键名是硬编码的：

```typescript
const categoryMap: Record<string, string> = {
  '通用': 'general',
  '文件': 'file',
  '导航': 'navigation',
  // ...
}
```

### 快捷键描述映射
快捷键描述映射中的中文键名是硬编码的：

```typescript
const descriptionMap: Record<string, string> = {
  '命令面板': 'command_palette',
  '快速打开文件': 'quick_open',
  '新建窗口': 'new_window',
  // ...
}
```

## 建议的改进措施

1. ~~**键盘按键文本**：将键盘布局中的按键文本提取到语言资源文件中，根据不同语言提供不同的按键显示。~~
   **状态**: **已完成**

2. ~~**平台名称**：将平台名称添加到语言资源文件中，并使用 `t()` 函数进行翻译。~~
   **状态**: **已完成**

3. ~~**数量显示**：将数量单位（如"个"）提取到语言资源文件中，支持不同语言的语法结构。~~
   **状态**: **已完成**

4. **日期格式**：使用 `i18n` 库提供的日期格式化功能，根据不同语言环境显示日期。

5. **分类和描述映射**：将映射中的中文键名也进行国际化处理，或重构为只使用英文键名。

6. **平台显示**：完善平台显示文本的国际化。

通过实现这些改进，可以确保 KeyFlow 在所有支持的语言环境中都能提供一致且本地化的用户体验。