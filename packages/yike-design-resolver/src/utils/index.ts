import fs from 'fs';
export function fetchIndexContent() {
  const exportPath = '../yike-design-ui/src/index.ts';
  const fileContent = fs.readFileSync(exportPath, 'utf-8');
  return fileContent;
}
// 提取导入路径和组件名称
export function parseImportStatements(
  compPaths: Record<string, string>,
  content: string,
) {
  /** @see https://regex101.com/r/jJfLJO/1 */
  const importRegex = /import\s+({[^}]+}|[^{}\n]+)\s+from\s+['"](.+)['"]/g;
  let match: RegExpExecArray | null;

  while ((match = importRegex.exec(content))) {
    const [, compNames, _compPath] = match;
    const compPath = _compPath.split('/').pop() as string;

    if (compNames.at(0) === '{') {
      compNames
        .replace(/[{\s}]/g, '')
        .split(',')
        .forEach((item) => {
          if (item) compPaths[item] = compPath;
        });
    } else {
      compPaths[compNames.trim()] = compPath;
    }
  }
}
export function sideEffects(name: string) {
  return `@yike-design/ui/components/es/${name}/style/css.js`;
}
