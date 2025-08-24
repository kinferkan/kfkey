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

// 递归提取所有键路径
function extractKeys(obj, prefix = '') {
  const result = [];
  
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const fullKey = prefix ? `${prefix}.${key}` : key;
      
      if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        // 递归处理嵌套对象
        const nested = extractKeys(obj[key], fullKey);
        result.push(...nested);
      } else {
        // 叶子节点
        result.push(fullKey);
      }
    }
  }
  
  return result;
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
  
  // 提取所有键
  const zhKeys = extractKeys(zhData);
  const enKeys = extractKeys(enData);
  const deKeys = extractKeys(deData);
  
  // 转换为Set以便快速查找
  const enKeySet = new Set(enKeys);
  const deKeySet = new Set(deKeys);
  
  // 查找缺失的键
  const missingInEn = zhKeys.filter(key => !enKeySet.has(key));
  const missingInDe = zhKeys.filter(key => !deKeySet.has(key));
  
  console.log('=== 缺失键分析报告 ===\n');
  
  console.log(`中文键总数: ${zhKeys.length}`);
  console.log(`英文键总数: ${enKeys.length}`);
  console.log(`德文键总数: ${deKeys.length}\n`);
  
  console.log(`英文文件缺失键数: ${missingInEn.length}`);
  if (missingInEn.length > 0) {
    console.log('英文文件缺失的键:');
    missingInEn.forEach(key => console.log(`  - ${key}`));
  }
  
  console.log(`\n德文文件缺失键数: ${missingInDe.length}`);
  if (missingInDe.length > 0) {
    console.log('德文文件缺失的键:');
    missingInDe.forEach(key => console.log(`  - ${key}`));
  }
}

main();