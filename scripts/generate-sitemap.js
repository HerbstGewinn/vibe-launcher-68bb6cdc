
import fs from 'node:fs'
import path from 'node:path'
import URL from 'node:url'

const __dirname = path.dirname(URL.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, '..', p)

// Base URL of your website
const WEBSITE_URL = 'https://vibelaunch.io';

// Get all pages from the pages directory
const pages = fs.readdirSync(toAbsolute('src/pages'))
  .filter(file => file.endsWith('.tsx'))
  .map(file => {
    const name = file.replace(/.tsx$/, '').toLowerCase()
    return name === 'index' ? '' : name
  });

// Generate sitemap XML content
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>${WEBSITE_URL}/${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
</urlset>`;

// Write sitemap to public directory
fs.writeFileSync(toAbsolute('public/sitemap.xml'), sitemap);
console.log('Sitemap generated successfully!');
