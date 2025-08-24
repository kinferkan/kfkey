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

// 通过键路径获取值
function getValueByPath(obj, path) {
  return path.split('.').reduce((current, key) => current && current[key], obj);
}

// 主函数
function main() {
  // 读取所有文件
  const zhData = readJsonFile(zhFilePath);
  const enData = readJsonFile(enFilePath);
  const deData = readJsonFile(deFilePath);
  
  if (!zhData || !enData || !deData) {
    console.error('Failed to read one or more files.');
    process.exit(1);
  }
  
  console.log('=== 需要添加到英文文件的翻译 ===\n');
  
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
  
  console.log('英文文件缺失的键及其中文值:');
  enMissingKeys.forEach(key => {
    const value = getValueByPath(zhData, key);
    console.log(`${key}: "${value}"`);
  });
  
  console.log('\n\n=== 需要添加到德文文件的翻译 ===\n');
  
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
  
  console.log('德文文件缺失的键及其中文值:');
  deMissingKeys.forEach(key => {
    const value = getValueByPath(zhData, key);
    console.log(`${key}: "${value}"`);
  });
}

main();