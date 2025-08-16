import { join } from 'node:path';
import { execSync } from 'node:child_process';
import { cwd } from 'node:process';
import {
  chmodSync,
  existsSync,
  readFileSync,
  unlinkSync,
  writeFileSync,
} from 'node:fs';

console.log('🚀 Starting conventional-commits-init...');

export const setupHusky = () => {
  try {
    execSync('git --version', { stdio: 'ignore' });
  } catch {
    return false;
  }

  try {
    if (!existsSync(join(cwd(), '.git'))) {
      execSync('git init', { cwd: cwd(), stdio: 'inherit' });
    }

    const packageJsonPath = join(cwd(), 'package.json');
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
    
    if (!packageJson.devDependencies?.husky) {
      execSync('npm i -D husky', { cwd:cwd(), stdio: 'inherit' });
    }

    execSync('npx husky init', { cwd: cwd(), stdio: 'inherit' });

    const huskyDir = join(cwd(), '.husky');
    const preCommitHookPath = join(huskyDir, 'pre-commit');

    if (existsSync(preCommitHookPath)) {
      unlinkSync(preCommitHookPath);
    }

    const hookPath = join(huskyDir, 'commit-msg');
    const hookContent = `npx conventional-commits "$1" < /dev/tty`;

    writeFileSync(hookPath, hookContent);
    chmodSync(hookPath, 0o755);

    console.log('✅ conventional-commits-init complete!');

    return true;
  } catch (error) {
    console.error('❌ conventional-commits-init failed:', (error as Error).message);

    return false;
  }
};
