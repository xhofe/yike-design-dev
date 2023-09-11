import { sideEffects, parseImportStatements, fetchIndexContent } from './utils';
import '';
const yikeSrcPath = '@yike-design/ui';
const compPaths: any = {};
const content = fetchIndexContent();
parseImportStatements(compPaths, content);
export function YikeResolver(compName: string) {
  if (compName.startsWith('Yk')) {
    return {
      name: compName,
      from: yikeSrcPath,
      sideEffects: sideEffects(compPaths[compName]),
    };
  }
  if (compName.startsWith('Icon')) {
    return {
      name: compName,
      from: `${yikeSrcPath}/components/svg-icon`,
    };
  }
}
