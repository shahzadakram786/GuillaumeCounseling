import fs from 'fs';
import path from 'path';

function traverseAndFix(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const res = path.join(dir, file);
    if (fs.statSync(res).isDirectory()) {
      traverseAndFix(res);
    } else if (res.endsWith('page.tsx')) {
      if (res.includes('blogs/page.tsx') || res.includes('blogs/[slug]/page.tsx')) continue;
      
      let content = fs.readFileSync(res, 'utf8');
      if (!content.includes('"use client"') && !content.includes("'use client'")) {
        // Only if it doesn't have Server Component metadata export (Next.js doesn't allow metadata from client pages)
        if (!content.includes('export const metadata')) {
          fs.writeFileSync(res, '"use client";\n\n' + content);
          console.log('Added use client to', res);
        }
      }
    }
  }
}

traverseAndFix('./src/app');
