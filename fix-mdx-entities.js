// fix-mdx-entities.js
import fs from 'fs/promises';
import { glob } from 'glob';
import path from 'path';

const isDryRun = process.argv.includes('--dry-run');

const ESCAPE_MAP = {
  "'": '&apos;',
  '>': '&gt;',
};

const escapeEntities = (text) => text.replace(/'|>/g, (match) => ESCAPE_MAP[match] || match);

const log = (msg) => console.log(`[fix-mdx] ${msg}`);

const run = async () => {
  const files = await glob('**/*.mdx', {
    ignore: ['**/node_modules/**', '**/.next/**', '**/dist/**', '**/.turbo/**'],
  });

  for (const file of files) {
    const fullPath = path.resolve(file);
    const original = await fs.readFile(fullPath, 'utf8');
    const escaped = escapeEntities(original);

    if (original !== escaped) {
      if (isDryRun) {
        log(`⚠️  Mudanças detectadas em: ${file} (dry-run: nenhum arquivo alterado)`);
      } else {
        await fs.writeFile(fullPath, escaped, 'utf8');
        log(`✅ Corrigido: ${file}`);
      }
    } else if (isDryRun) {
      log(`👌 Sem alterações: ${file}`);
    }
  }
};

run();
