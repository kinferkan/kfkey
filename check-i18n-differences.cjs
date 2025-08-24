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

// 递归提取所有键路径和值
function extractKeyValues(obj, prefix = '') {
  const result = {};
  
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const fullKey = prefix ? `${prefix}.${key}` : key;
      
      if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        // 递归处理嵌套对象
        const nested = extractKeyValues(obj[key], fullKey);
        Object.assign(result, nested);
      } else {
        // 叶子节点
        result[fullKey] = obj[key];
      }
    }
  }
  
  return result;
}

// 比较键值差异
function compareKeyValues(base, target, targetName) {
  const missing = [];
  const extra = [];
  
  // 查找在base中存在但在target中缺失的键
  for (const key in base) {
    if (!target.hasOwnProperty(key)) {
      missing.push({
        key: key,
        zhValue: base[key]
      });
    }
  }
  
  // 查找在target中存在但在base中缺失的键
  for (const key in target) {
    if (!base.hasOwnProperty(key)) {
      extra.push({
        key: key,
        [targetName + 'Value']: target[key]
      });
    }
  }
  
  return { missing, extra };
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
  
  // 提取所有键值对
  const zhKeyValues = extractKeyValues(zhData);
  const enKeyValues = extractKeyValues(enData);
  const deKeyValues = extractKeyValues(deData);
  
  console.log('=== 国际化文件差异分析报告 ===\\n');
  
  // 比较中文和英文
  console.log('1. 中文(zh.json) vs 英文(en.json)');
  const enComparison = compareKeyValues(zhKeyValues, enKeyValues, 'en');
  console.log(`   缺失的键 (${enComparison.missing.length} 个):`);
  enComparison.missing.forEach(item => {
    console.log(`     - ${item.key}: "${item.zhValue}"`);
  });
  
  console.log(`   多余的键 (${enComparison.extra.length} 个):`);
  enComparison.extra.forEach(item => {
    console.log(`     - ${item.key}: "${item.enValue}"`);
  });
  
  console.log('\\n');
  
  // 比较中文和德文
  console.log('2. 中文(zh.json) vs 德文(de.json)');
  const deComparison = compareKeyValues(zhKeyValues, deKeyValues, 'de');
  console.log(`   缺失的键 (${deComparison.missing.length} 个):`);
  deComparison.missing.forEach(item => {
    console.log(`     - ${item.key}: "${item.zhValue}"`);
  });
  
  console.log(`   多余的键 (${deComparison.extra.length} 个):`);
  deComparison.extra.forEach(item => {
    console.log(`     - ${item.key}: "${item.deValue}"`);
  });
  
  console.log('\\n');
  
  // 比较英文和德文
  console.log('3. 英文(en.json) vs 德文(de.json)');
  const enDeComparison = compareKeyValues(enKeyValues, deKeyValues, 'de');
  console.log(`   缺失的键 (${enDeComparison.missing.length} 个):`);
  enDeComparison.missing.forEach(item => {
    console.log(`     - ${item.key}: "${item.zhValue}"`);
  });
  
  console.log(`   多余的键 (${enDeComparison.extra.length} 个):`);
  enDeComparison.extra.forEach(item => {
    console.log(`     - ${item.key}: "${item.deValue}"`);
  });
  
  console.log('\\n=== 分析完成 ===');
  
  // 输出统计信息
  console.log('\\n=== 统计信息 ===');
  console.log(`中文键总数: ${Object.keys(zhKeyValues).length}`);
  console.log(`英文键总数: ${Object.keys(enKeyValues).length}`);
  console.log(`德文键总数: ${Object.keys(deKeyValues).length}`);
  console.log(`英文缺失键数: ${enComparison.missing.length}`);
  console.log(`德文缺失键数: ${deComparison.missing.length}`);
  
  // 输出德文缺失的键详情
  console.log('\\n=== 德文文件缺失的键详情 ===');
  if (deComparison.missing.length > 0) {
    console.log('以下键在德文文件中缺失:');
    deComparison.missing.forEach(item => {
      console.log(`${item.key}: "${item.zhValue}"`);
    });
  } else {
    console.log('德文文件没有缺失的键');
  }
  
  // 输出英文缺失的键详情
  console.log('\\n=== 英文文件缺失的键详情 ===');
  if (enComparison.missing.length > 0) {
    console.log('以下键在英文文件中缺失:');
    enComparison.missing.forEach(item => {
      console.log(`${item.key}: "${item.zhValue}"`);
    });
  } else {
    console.log('英文文件没有缺失的键');
  }
}

main();