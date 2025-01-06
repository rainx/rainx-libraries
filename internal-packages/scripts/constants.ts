import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

export const projectRootDir = dirname(
  dirname(dirname(fileURLToPath(import.meta.url))),
);
export const scriptsRootDir = dirname(fileURLToPath(import.meta.url));
