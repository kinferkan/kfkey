import { useTranslation } from 'react-i18next';
import type { TFunction } from 'i18next';

/**
 * 快捷键分类映射
 * 按应用程序组织，避免全局命名冲突
 */
const shortcutCategoryMaps = {
  // 通用分类，适用于多个应用
  common: {
    general: 'general',
    file: 'file',
    navigation: 'navigation',
    editing: 'editing',
    search: 'search',
    debugging: 'debugging',
    refactoring: 'refactoring',
    version_control: 'version_control',
    view: 'view',
    window: 'window',
    basics: 'basics',
    formatting: 'formatting',
    comment: 'comment',
    selection: 'selection',
  },

  // VS Code 特有分类
  vscode: {
    multi_cursor: 'multi_cursor',
    code_folding: 'code_folding',
    terminal: 'terminal',
    panel_navigation: 'panel_navigation',
  },

  // IntelliJ IDEA 特有分类
  intellij: {
    java_specific: 'java_specific',
    intelligence: 'intelligence',
    build: 'build',
    testing: 'testing',
    code_generation: 'code_generation',
  },

  // 浏览器开发工具特有分类
  browser: {
    console: 'console',
    elements_panel: 'elements_panel',
  },

  // 其他应用特定分类可以在这里添加
};

/**
 * 快捷键描述映射
 * 按应用程序和操作类型组织
 */
const shortcutDescriptionMaps = {
  // 通用操作，适用于多个应用
  common: {
    file: {
      new_file: 'new_file',
      open_file: 'open_file',
      save: 'save',
      save_as: 'save_as',
      save_all: 'save_all',
      close: 'close',
      close_all: 'close_all',
    },
    editing: {
      cut: 'cut',
      copy: 'copy',
      paste: 'paste',
      undo: 'undo',
      redo: 'redo',
      delete_line: 'delete_line',
    },
    search: {
      find: 'find',
      replace: 'replace',
      find_next: 'find_next',
      find_previous: 'find_previous',
    },
  },

  // VS Code 特有操作
  vscode: {
    general: {
      command_palette: 'command_palette',
      quick_open: 'quick_open',
      new_window: 'new_window',
    },
    navigation: {
      goto_line: 'goto_line',
      go_to_definition: 'go_to_definition',
      peek_definition: 'peek_definition',
    },
  },

  // IntelliJ IDEA 特有操作
  intellij: {
    general: {
      go_to_anything: 'go_to_anything',
      go_to_symbol: 'go_to_symbol',
    },
    refactoring: {
      extract_method: 'extract_method',
      extract_variable: 'extract_variable',
      rename: 'rename',
    },
  },

  // 其他应用特定操作可以在这里添加
};

/**
 * 获取工具描述
 * @param t 翻译函数
 * @param toolName 工具名称
 * @param fallback 回退文本
 * @returns 工具描述文本
 */
export const getToolDescription = (t: TFunction, toolName: string, fallback?: string): string => {
  try {
    const translationKey = `toolDescriptions.${toolName}`;
    const translation = t(translationKey);
    // 检查是否翻译成功（避免返回键本身）
    return translation !== translationKey ? translation : (fallback || toolName);
  } catch (error) {
    console.error(`Failed to get description for tool: ${toolName}`, error);
    return fallback || toolName;
  }
};

/**
 * 获取快捷键分类
 * @param t 翻译函数
 * @param category 分类名称
 * @param app 应用名称（可选）
 * @returns 分类的本地化文本
 */
export const getShortcutCategory = (t: TFunction, category: string, app?: string): string => {
  try {
    // 首先尝试在应用特定的映射中查找
    if (app && shortcutCategoryMaps[app as keyof typeof shortcutCategoryMaps]) {
      const appMap = shortcutCategoryMaps[app as keyof typeof shortcutCategoryMaps];
      const appCategory = (appMap as any)[category];
      if (appCategory) {
        const translationKey = `shortcutCategories.${appCategory}`;
        const translation = t(translationKey);
        return translation !== translationKey ? translation : category;
      }
    }
    
    // 如果应用特定映射中找不到，或者没有指定应用，则在通用映射中查找
    const commonCategory = shortcutCategoryMaps.common[category as keyof typeof shortcutCategoryMaps.common];
    if (commonCategory) {
      const translationKey = `shortcutCategories.${commonCategory}`;
      const translation = t(translationKey);
      return translation !== translationKey ? translation : category;
    }
    
    // 如果都找不到，返回原始分类名称
    return category;
  } catch (error) {
    console.error(`Failed to get shortcut category: ${category}`, error);
    return category;
  }
};

/**
 * 获取快捷键描述
 * @param t 翻译函数
 * @param description 描述名称
 * @param type 描述类型（可选）
 * @param app 应用名称（可选）
 * @returns 描述的本地化文本
 */
export const getShortcutDescription = (t: TFunction, description: string, type?: string, app?: string): string => {
  try {
    // 首先尝试在应用特定的映射中查找
    if (app && shortcutDescriptionMaps[app as keyof typeof shortcutDescriptionMaps] && type) {
      const appMap = shortcutDescriptionMaps[app as keyof typeof shortcutDescriptionMaps];
      const typeMap = (appMap as any)[type];
      if (typeMap) {
        const key = (typeMap as any)[description];
        if (key) {
          const translationKey = `shortcutDescriptions.${key}`;
          const translation = t(translationKey);
          return translation !== translationKey ? translation : description;
        }
      }
    }
    
    // 如果应用特定映射中找不到，或者没有指定应用，则在通用映射中查找
    if (type) {
      const commonTypeMap = shortcutDescriptionMaps.common[type as keyof typeof shortcutDescriptionMaps.common];
      if (commonTypeMap) {
        const key = (commonTypeMap as any)[description];
        if (key) {
          const translationKey = `shortcutDescriptions.${key}`;
          const translation = t(translationKey);
          return translation !== translationKey ? translation : description;
        }
      }
    }
    
    // 作为最后的尝试，直接查找描述的翻译
    const directTranslationKey = `shortcutDescriptions.${description}`;
    const directTranslation = t(directTranslationKey);
    if (directTranslation !== directTranslationKey) {
      return directTranslation;
    }
    
    // 如果都找不到，返回原始描述
    return description;
  } catch (error) {
    console.error(`Failed to get shortcut description: ${description}`, error);
    return description;
  }
};

/**
 * React Hook：获取工具描述
 * @returns 工具描述函数
 */
export function useToolDescription() {
  const { t } = useTranslation();
  
  return (toolName: string, fallback?: string): string => {
    return getToolDescription(t, toolName, fallback);
  };
}

/**
 * React Hook：获取快捷键分类
 * @returns 快捷键分类函数
 */
export function useShortcutCategory() {
  const { t } = useTranslation();
  
  return (category: string, app?: string): string => {
    return getShortcutCategory(t, category, app);
  };
}

/**
 * React Hook：获取快捷键描述
 * @returns 快捷键描述函数
 */
export function useShortcutDescription() {
  const { t } = useTranslation();
  
  return (description: string, type?: string, app?: string): string => {
    return getShortcutDescription(t, description, type, app);
  };
}

/**
 * 非 Hook 版本的国际化工具对象
 * 用于非 React 组件环境
 */
export interface I18nTools {
  getToolDescription: (t: TFunction, toolName: string, fallback?: string) => string;
  getShortcutCategory: (t: TFunction, category: string, app?: string) => string;
  getShortcutDescription: (t: TFunction, description: string, type?: string, app?: string) => string;
}

/**
 * 创建非 Hook 版本的国际化工具
 * @returns 国际化工具对象
 */
export function createI18nTools(): I18nTools {
  return {
    getToolDescription,
    getShortcutCategory,
    getShortcutDescription
  };
}

/**
 * 类型定义：应用名称
 */
export type AppName = keyof typeof shortcutCategoryMaps;

/**
 * 类型定义：通用操作类型
 */
export type CommonActionType = keyof typeof shortcutDescriptionMaps.common;

/**
 * 类型定义：VS Code 操作类型
 */
export type VSCodeActionType = keyof typeof shortcutDescriptionMaps.vscode;

/**
 * 类型定义：IntelliJ 操作类型
 */
export type IntelliJActionType = keyof typeof shortcutDescriptionMaps.intellij;

/**
 * 预创建的国际化工具实例，方便直接使用
 */
export const i18nTools = createI18nTools();