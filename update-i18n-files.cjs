const fs = require('fs');
const path = require('path');

// 文件路径
const zhFilePath = path.join(__dirname, 'src/i18n/locales/zh.json');
const enFilePath = path.join(__dirname, 'src/i18n/locales/en.json');
const deFilePath = path.join(__dirname, 'src/i18n/locales/de.json');

// 读取JSON文件
function readJsonFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error.message);
    return null;
  }
}

// 写入JSON文件
function writeJsonFile(filePath, data) {
  try {
    const jsonString = JSON.stringify(data, null, 2) + '\n';
    fs.writeFileSync(filePath, jsonString, 'utf8');
    console.log(`Successfully updated ${filePath}`);
  } catch (error) {
    console.error(`Error writing ${filePath}:`, error.message);
    return false;
  }
  return true;
}

// 通过键路径获取值
function getValueByPath(obj, path) {
  return path.split('.').reduce((current, key) => current && current[key], obj);
}

// 通过键路径设置值
function setValueByPath(obj, path, value) {
  const keys = path.split('.');
  const lastKey = keys.pop();
  const target = keys.reduce((current, key) => {
    if (!current[key]) {
      current[key] = {};
    }
    return current[key];
  }, obj);
  target[lastKey] = value;
}

// 简单的英文翻译函数
function translateToEnglish(chineseText) {
  const translations = {
    "未找到匹配的快捷键": "No matching shortcuts found",
    "尝试使用不同的搜索词或筛选条件": "Try using different search terms or filters",
    "键盘热力图": "Keyboard Heatmap",
    "列表视图": "List View",
    "热力图视图": "Heatmap View",
    "个": "items",
    "搜索结果": "Search Results",
    "为 \"{{query}}\" 找到 {{count}} 个结果": "Found {{count}} results for \"{{query}}\"",
    "清除搜索": "Clear Search",
    "工具": "Tools",
    "快捷键": "Shortcuts",
    "没有找到相关结果": "No relevant results found",
    "尝试使用不同的关键词或检查拼写": "Try using different keywords or check spelling",
    "返回浏览工具": "Back to Browse Tools",
    "全平台": "All Platforms",
    "通用": "General",
    "文件": "File",
    "导航": "Navigation",
    "编辑": "Editing",
    "搜索替换": "Search and Replace",
    "调试": "Debugging",
    "重构": "Refactoring",
    "版本控制": "Version Control",
    "视图": "View",
    "窗口管理": "Window Management",
    "基础": "Basics",
    "面板导航": "Panel Navigation",
    "控制台": "Console",
    "Go特有": "Go Specific",
    "多光标": "Multi Cursor",
    "格式化": "Formatting",
    "注释": "Comment",
    "代码折叠": "Code Folding",
    "uni-app": "uni-app",
    "智能感知": "Intelligent Sense",
    "终端": "Terminal",
    "Java特有": "Java Specific",
    "选择": "Selection",
    "代码": "Code",
    "构建": "Build",
    "测试": "Test",
    "工具": "Tools",
    "元素面板": "Elements Panel",
    "Android开发": "Android Development",
    "代码生成": "Code Generation",
    "跳转到指定行": "Go to Line",
    "在上方插入光标": "Insert Cursor Above",
    "在下方插入光标": "Insert Cursor Below",
    "显示/隐藏实用工具": "Show/Hide Utilities",
    "重命名符号": "Rename Symbol",
    "提取方法": "Extract Method",
    "Visual Studio Code 工具介绍": "Visual Studio Code Tool Introduction",
    "返回": "Back",
    "Visual Studio Code 快捷键完全指南": "Complete Guide to Visual Studio Code Shortcuts",
    "Visual Studio Code（简称 VSCode）是由微软开发的一款免费、开源的现代化轻量级代码编辑器。它支持几乎所有主流的编程语言，具有丰富的插件生态系统，是目前最受欢迎的代码编辑器之一。": "Visual Studio Code (aka VSCode) is a free, open-source modern lightweight code editor developed by Microsoft. It supports almost all major programming languages and has a rich plugin ecosystem, making it one of the most popular code editors today.",
    "为什么使用 VSCode 快捷键？": "Why Use VSCode Shortcuts?",
    "掌握 VSCode 快捷键可以显著提升你的开发效率：": "Mastering VSCode shortcuts can significantly improve your development efficiency:",
    "提升开发效率：避免频繁切换鼠标，专注代码编写": "Improve development efficiency: Avoid frequent mouse switching and focus on coding",
    "减少重复操作：一键完成复杂任务": "Reduce repetitive operations: Complete complex tasks with one click",
    "专业形象：熟练使用快捷键是专业开发者的标志": "Professional image: Proficient use of shortcuts is a hallmark of professional developers",
    "减轻疲劳：减少手部移动，降低重复性劳损风险": "Reduce fatigue: Reduce hand movement and lower the risk of repetitive strain injuries",
    "VSCode 快捷键使用技巧": "VSCode Shortcut Usage Tips",
    "VSCode 的快捷键系统非常强大，掌握以下技巧可以帮助你更好地使用：": "VSCode's shortcut system is very powerful. Mastering the following tips can help you use it better:",
    "从基础开始：先掌握最常用的编辑快捷键，如复制(Ctrl+C)、粘贴(Ctrl+V)、撤销(Ctrl+Z)等": "Start with the basics: First master the most commonly used editing shortcuts, such as copy (Ctrl+C), paste (Ctrl+V), undo (Ctrl+Z), etc.",
    "逐步进阶：学习导航类快捷键，如快速打开文件(Ctrl+P)、命令面板(Ctrl+Shift+P)": "Progress step by step: Learn navigation shortcuts, such as quickly opening files (Ctrl+P), command palette (Ctrl+Shift+P)",
    "善用搜索：使用命令面板(Ctrl+Shift+P)可以快速查找和执行任何命令": "Make good use of search: Use the command palette (Ctrl+Shift+P) to quickly find and execute any command",
    "自定义快捷键：根据个人习惯和工作需求自定义快捷键": "Customize shortcuts: Customize shortcuts according to personal habits and work requirements",
    "组合使用：多个快捷键组合使用可以完成复杂操作": "Combined use: Multiple shortcut combinations can complete complex operations",
    "平台差异说明": "Platform Differences",
    "VSCode 在不同操作系统上的快捷键略有不同，主要是因为不同系统对某些按键的定义不同。例如，在 Windows 和 Linux 上使用 Ctrl 键，而在 macOS 上使用 Cmd 键。本页面提供了各平台的快捷键对照，你可以根据自己的系统选择查看。": "VSCode shortcuts vary slightly on different operating systems, mainly because different systems define certain keys differently. For example, the Ctrl key is used on Windows and Linux, while the Cmd key is used on macOS. This page provides shortcut comparisons for each platform, and you can choose to view according to your system.",
    "常用快捷键分类详解": "Detailed Explanation of Common Shortcut Categories",
    "通用快捷键": "General Shortcuts",
    "文件操作快捷键": "File Operation Shortcuts",
    "编辑操作快捷键": "Edit Operation Shortcuts",
    "导航快捷键": "Navigation Shortcuts",
    "多光标编辑": "Multi-Cursor Editing",
    "最佳实践建议": "Best Practice Recommendations",
    "为了更好地使用 VSCode 快捷键，建议遵循以下最佳实践：": "To better use VSCode shortcuts, it is recommended to follow these best practices:",
    "循序渐进：不要试图一次性记住所有快捷键，先从最常用的开始": "Progressive approach: Don't try to memorize all shortcuts at once, start with the most commonly used ones",
    "实践练习：在日常工作中有意识地使用快捷键，形成肌肉记忆": "Practice: Consciously use shortcuts in daily work to form muscle memory",
    "自定义设置：根据个人习惯调整快捷键设置": "Customize settings: Adjust shortcut settings according to personal habits",
    "使用插件：安装快捷键相关的插件，如 \"Shortcut Menu Bar\" 可以显示常用快捷键": "Use plugins: Install shortcut-related plugins, such as \"Shortcut Menu Bar\" which can display commonly used shortcuts",
    "定期复习：定期查看快捷键列表，发现和学习新的快捷键": "Regular review: Regularly check the shortcut list to discover and learn new shortcuts",
    "总结": "Summary",
    "掌握 VSCode 快捷键是提升开发效率的重要途径。通过合理使用快捷键，你可以更专注于代码编写，减少重复性操作，提高工作效率。希望这份指南能帮助你更好地使用 VSCode，提升开发体验。": "Mastering VSCode shortcuts is an important way to improve development efficiency. By using shortcuts appropriately, you can focus more on coding, reduce repetitive operations, and improve work efficiency. We hope this guide helps you better use VSCode and enhance your development experience.",
    "Sublime Text 工具介绍": "Sublime Text Tool Introduction",
    "Sublime Text 快捷键完全指南": "Complete Guide to Sublime Text Shortcuts",
    "Sublime Text 是一款流行的文本编辑器，以其速度快、界面简洁和强大的功能而闻名。它支持多种编程语言和标记语言，特别适合编写代码、标记和 prose。": "Sublime Text is a popular text editor known for its speed, clean interface, and powerful features. It supports multiple programming and markup languages, making it particularly suitable for writing code, markup, and prose.",
    "为什么使用 Sublime Text 快捷键？": "Why Use Sublime Text Shortcuts?",
    "掌握 Sublime Text 快捷键可以显著提升你的编辑效率：": "Mastering Sublime Text shortcuts can significantly improve your editing efficiency:",
    "提升编辑效率：避免频繁切换鼠标，专注文本编写": "Improve editing efficiency: Avoid frequent mouse switching and focus on text writing",
    "减少重复操作：一键完成复杂任务": "Reduce repetitive operations: Complete complex tasks with one click",
    "专业形象：熟练使用快捷键是专业开发者的标志": "Professional image: Proficient use of shortcuts is a hallmark of professional developers",
    "减轻疲劳：减少手部移动，降低重复性劳损风险": "Reduce fatigue: Reduce hand movement and lower the risk of repetitive strain injuries",
    "Sublime Text 快捷键使用技巧": "Sublime Text Shortcut Usage Tips",
    "Sublime Text 的快捷键系统非常强大，掌握以下技巧可以帮助你更好地使用：": "Sublime Text's shortcut system is very powerful. Mastering the following tips can help you use it better:",
    "从基础开始：先掌握最常用的编辑快捷键，如复制(Ctrl+C)、粘贴(Ctrl+V)、撤销(Ctrl+Z)等": "Start with the basics: First master the most commonly used editing shortcuts, such as copy (Ctrl+C), paste (Ctrl+V), undo (Ctrl+Z), etc.",
    "逐步进阶：学习导航类快捷键，如快速打开文件(Ctrl+P)、命令面板(Ctrl+Shift+P)": "Progress step by step: Learn navigation shortcuts, such as quickly opening files (Ctrl+P), command palette (Ctrl+Shift+P)",
    "善用搜索：使用命令面板(Ctrl+Shift+P)可以快速查找和执行任何命令": "Make good use of search: Use the command palette (Ctrl+Shift+P) to quickly find and execute any command",
    "自定义快捷键：根据个人习惯和工作需求自定义快捷键": "Customize shortcuts: Customize shortcuts according to personal habits and work requirements",
    "组合使用：多个快捷键组合使用可以完成复杂操作": "Combined use: Multiple shortcut combinations can complete complex operations",
    "Sublime Text 在不同操作系统上的快捷键略有不同，主要是因为不同系统对某些按键的定义不同。例如，在 Windows 和 Linux 上使用 Ctrl 键，而在 macOS 上使用 Cmd 键。本页面提供了各平台的快捷键对照，你可以根据自己的系统选择查看。": "Sublime Text shortcuts vary slightly on different operating systems, mainly because different systems define certain keys differently. For example, the Ctrl key is used on Windows and Linux, while the Cmd key is used on macOS. This page provides shortcut comparisons for each platform, and you can choose to view according to your system.",
    "热度: {{score}}": "Popularity: {{score}}",
    "后退": "Back",
    "前进": "Forward",
    "跳转到定义": "Jump to Definition",
    "继续执行": "Continue Execution",
    "显示/隐藏调试区域": "Show/Hide Debug Area",
    "在模拟器中运行": "Run in Simulator",
    "停止运行": "Stop Running",
    "设备和模拟器": "Devices and Simulators",
    "性能分析": "Performance Analysis",
    "显示关联的Interface Builder": "Show Associated Interface Builder",
    "显示/隐藏助手编辑器": "Show/Hide Assistant Editor",
    "显示对象库": "Show Object Library",
    "显示/隐藏导航器": "Show/Hide Navigator"
  };
  
  return translations[chineseText] || chineseText;
}

// 简单的德文翻译函数
function translateToGerman(chineseText) {
  const translations = {
    "热度: {{score}}": "Beliebtheit: {{score}}",
    "后退": "Zurück",
    "前进": "Vorwärts",
    "跳转到定义": "Zur Definition springen",
    "继续执行": "Ausführung fortsetzen",
    "显示/隐藏调试区域": "Debug-Bereich anzeigen/ausblenden",
    "在模拟器中运行": "Im Simulator ausführen",
    "停止运行": "Ausführung stoppen",
    "设备和模拟器": "Geräte und Simulatoren",
    "性能分析": "Leistungsanalyse",
    "显示关联的Interface Builder": "Zugehörigen Interface Builder anzeigen",
    "显示/隐藏助手编辑器": "Assistenten-Editor anzeigen/ausblenden",
    "显示对象库": "Objektbibliothek anzeigen",
    "显示/隐藏导航器": "Navigator anzeigen/ausblenden",
    "显示/隐藏实用工具": "Werkzeuge anzeigen/ausblenden",
    "重命名符号": "Symbol umbenennen",
    "提取方法": "Methode extrahieren",
    "文件操作快捷键": "Dateioperationen-Tastenkombinationen",
    "编辑操作快捷键": "Bearbeitungsoperationen-Tastenkombinationen"
  };
  
  return translations[chineseText] || chineseText;
}

// 主函数
function main() {
  // 读取所有文件
  const zhData = readJsonFile(zhFilePath);
  let enData = readJsonFile(enFilePath);
  let deData = readJsonFile(deFilePath);
  
  if (!zhData || !enData || !deData) {
    console.error('Failed to read one or more files.');
    process.exit(1);
  }
  
  console.log('=== 更新国际化文件 ===\n');
  
  // 英文缺失的键
  const enMissingKeys = [
    'toolDetail.noShortcutsFound',
    'toolDetail.tryDifferentSearch',
    'toolDetail.heatmapTitle',
    'toolDetail.listView',
    'toolDetail.heatmapView',
    'keyboardHeatmap.items',
    'searchResults.searchResults',
    'searchResults.foundResults',
    'searchResults.clearSearch',
    'searchResults.tools',
    'searchResults.shortcuts',
    'searchResults.noResultsFound',
    'searchResults.tryDifferentKeywords',
    'searchResults.backToBrowse',
    'searchResults.items',
    'searchResults.allPlatforms',
    'shortcutCategories.general',
    'shortcutCategories.file',
    'shortcutCategories.navigation',
    'shortcutCategories.editing',
    'shortcutCategories.search',
    'shortcutCategories.debugging',
    'shortcutCategories.refactoring',
    'shortcutCategories.version_control',
    'shortcutCategories.view',
    'shortcutCategories.window',
    'shortcutCategories.basics',
    'shortcutCategories.panel_navigation',
    'shortcutCategories.console',
    'shortcutCategories.go_specific',
    'shortcutCategories.multi_cursor',
    'shortcutCategories.formatting',
    'shortcutCategories.comment',
    'shortcutCategories.code_folding',
    'shortcutCategories.uni_app',
    'shortcutCategories.intelligence',
    'shortcutCategories.terminal',
    'shortcutCategories.java_specific',
    'shortcutCategories.selection',
    'shortcutCategories.code',
    'shortcutCategories.build',
    'shortcutCategories.testing',
    'shortcutCategories.tools',
    'shortcutCategories.elements_panel',
    'shortcutCategories.android_development',
    'shortcutCategories.code_generation',
    'shortcutDescriptions.goto_line',
    'shortcutDescriptions.insert_cursor_above',
    'shortcutDescriptions.insert_cursor_below',
    'shortcutDescriptions.hide_utilities',
    'shortcutDescriptions.refactor_rename',
    'shortcutDescriptions.refactor_extract',
    'vscodePage.pageTitle',
    'vscodePage.back',
    'vscodePage.mainTitle',
    'vscodePage.introText',
    'vscodePage.whyUseShortcutsTitle',
    'vscodePage.benefitsText',
    'vscodePage.benefit1',
    'vscodePage.benefit2',
    'vscodePage.benefit3',
    'vscodePage.benefit4',
    'vscodePage.usageTipsTitle',
    'vscodePage.tipsText',
    'vscodePage.tip1',
    'vscodePage.tip2',
    'vscodePage.tip3',
    'vscodePage.tip4',
    'vscodePage.tip5',
    'vscodePage.platformDifferencesTitle',
    'vscodePage.platformDifferencesText',
    'vscodePage.commonShortcutsTitle',
    'vscodePage.generalCategory',
    'vscodePage.fileOperationsCategory',
    'vscodePage.editOperationsCategory',
    'vscodePage.navigationCategory',
    'vscodePage.multiCursorCategory',
    'vscodePage.bestPracticesTitle',
    'vscodePage.bestPracticesText',
    'vscodePage.practice1',
    'vscodePage.practice2',
    'vscodePage.practice3',
    'vscodePage.practice4',
    'vscodePage.practice5',
    'vscodePage.conclusionTitle',
    'vscodePage.conclusionText',
    'sublimePage.pageTitle',
    'sublimePage.back',
    'sublimePage.mainTitle',
    'sublimePage.introText',
    'sublimePage.whyUseShortcutsTitle',
    'sublimePage.benefitsText',
    'sublimePage.benefit1',
    'sublimePage.benefit2',
    'sublimePage.benefit3',
    'sublimePage.benefit4',
    'sublimePage.usageTipsTitle',
    'sublimePage.tipsText',
    'sublimePage.tip1',
    'sublimePage.tip2',
    'sublimePage.tip3',
    'sublimePage.tip4',
    'sublimePage.tip5',
    'sublimePage.platformDifferencesTitle',
    'sublimePage.platformDifferencesText',
    'sublimePage.commonShortcutsTitle',
    'sublimePage.generalCategory',
    'sublimePage.fileOperationsCategory',
    'sublimePage.editOperationsCategory',
    'sublimePage.navigationCategory',
    'sublimePage.multiCursorCategory',
    'sublimePage.bestPracticesTitle',
    'sublimePage.bestPracticesText',
    'sublimePage.practice1',
    'sublimePage.practice2',
    'sublimePage.practice3',
    'sublimePage.practice4',
    'sublimePage.practice5',
    'sublimePage.conclusionTitle',
    'sublimePage.conclusionText'
  ];
  
  // 为英文文件添加缺失的翻译
  console.log('为英文文件添加缺失的翻译...');
  enMissingKeys.forEach(key => {
    const chineseValue = getValueByPath(zhData, key);
    const englishValue = translateToEnglish(chineseValue);
    setValueByPath(enData, key, englishValue);
  });
  
  // 德文缺失的键
  const deMissingKeys = [
    'toolGrid.popularityScore',
    'shortcutDescriptions.back',
    'shortcutDescriptions.forward',
    'shortcutDescriptions.jump_to_definition',
    'shortcutDescriptions.continue',
    'shortcutDescriptions.view_debug_area',
    'shortcutDescriptions.run_simulator',
    'shortcutDescriptions.stop',
    'shortcutDescriptions.device_simulator',
    'shortcutDescriptions.profile',
    'shortcutDescriptions.show_storyboard',
    'shortcutDescriptions.assistant_editor',
    'shortcutDescriptions.show_library',
    'shortcutDescriptions.hide_navigator',
    'shortcutDescriptions.hide_utilities',
    'shortcutDescriptions.refactor_rename',
    'shortcutDescriptions.refactor_extract',
    'sublimePage.fileOperationsCategory',
    'sublimePage.editOperationsCategory'
  ];
  
  // 为德文文件添加缺失的翻译
  console.log('为德文文件添加缺失的翻译...');
  deMissingKeys.forEach(key => {
    const chineseValue = getValueByPath(zhData, key);
    const germanValue = translateToGerman(chineseValue);
    setValueByPath(deData, key, germanValue);
  });
  
  // 写入更新后的文件
  if (writeJsonFile(enFilePath, enData) && writeJsonFile(deFilePath, deData)) {
    console.log('\n所有文件已成功更新！');
    console.log(`英文文件新增了 ${enMissingKeys.length} 个翻译`);
    console.log(`德文文件新增了 ${deMissingKeys.length} 个翻译`);
  } else {
    console.error('更新文件时出错');
    process.exit(1);
  }
}

main();