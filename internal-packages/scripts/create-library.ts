#!/usr/bin/env bun

import { execSync } from 'node:child_process';
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

import { projectRootDir, scriptsRootDir } from './constants.ts';

// get commandline arguments
const args = process.argv.slice(2);
if (args.length < 1) {
  throw new Error(
    'Please provide library name to create, example: brand-assets (no need to prefix @rainxlab/)',
  );
}

const libraryName = args[0];
const libraryNameWithScope = `@rainxlab/${libraryName}`;
const libraryRootDir = join(projectRootDir, 'packages', libraryName);

// change current work dir to project root dir
process.chdir(projectRootDir);

// create package directory and initialize
execSync(`mkdir -p ${libraryRootDir} && cd ${libraryRootDir} && pnpm init`, {
  stdio: 'inherit',
});

// copy the template files
const filesToCopy = ['tsconfig.json'];
filesToCopy.forEach((file) => {
  console.log(`Copying ${file}...`);
  const sourcePath = join(scriptsRootDir, 'templates', file);
  const destinationPath = join(libraryRootDir, file);
  copyFileSync(sourcePath, destinationPath);
  console.log('Done!');
});

// create src directory and initial TypeScript file
mkdirSync(join(libraryRootDir, 'src'), { recursive: true });
writeFileSync(join(libraryRootDir, 'src', `${libraryName}.ts`), '');

// add scripts part to package.json
const scriptsBlockJson = {
  test: 'vitest',
  build: 'tsc',
  eslint: "eslint --cache 'src/**/*.ts*'",
  lint: 'pnpm prettier && pnpm eslint',
  'lint:fix': "pnpm prettier --write && eslint 'src/**/*.ts*' --fix",
  prettier: "prettier '{src,__tests__}/**/*.{tsx,ts}' -l",
};

console.log('Add Scripts to package.json');
const packageJsonPath = join(libraryRootDir, 'package.json');
const packageJsonContent = readFileSync(packageJsonPath, 'utf-8');
const packageJson: {
  name: string;
  scripts: Record<string, string>;
} = JSON.parse(packageJsonContent);
packageJson.name = libraryNameWithScope;
packageJson.scripts = scriptsBlockJson;
writeFileSync(packageJsonPath, JSON.stringify(packageJson, undefined, 2));

console.log('Done!');
