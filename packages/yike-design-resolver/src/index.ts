import { sideEffects, parseImportStatements, fetchIndexContent } from './utils';
const compPaths: any = {};
const content = fetchIndexContent();
parseImportStatements(compPaths, content);
const isDev = process.env.NODE_ENV === 'development';
export function YikeResolver(compName: string) {
  let yikeSrcPath = '@yike-design/ui/es';
  const resolverMap = {
    name: compName,
    from: yikeSrcPath,
    sideEffects: sideEffects(compPaths[compName]),
  };
  if (isDev) {
    yikeSrcPath = '@yike-design/ui/src';
    resolverMap.sideEffects = '';
  }
  if (compName.startsWith('Yk')) {
    return resolverMap;
  }
  if (compName.startsWith('Icon')) {
    return {
      name: compName,
      from: `${yikeSrcPath}/components/svg-icon`,
    };
  }
}
