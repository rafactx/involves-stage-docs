// zudoku.build.ts

import type { ZudokuBuildConfig } from 'zudoku';
import { removeExtensions } from 'zudoku/processors/removeExtensions';

const buildConfig: ZudokuBuildConfig = {
  processors: [
    removeExtensions({
      keys: ['x-deprecated', 'x-internal'],
    }),
  ],
};

export default buildConfig;
