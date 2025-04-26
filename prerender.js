
import fs from 'node:fs'
import path from 'node:path'
import URL from 'node:url'

const __dirname = path.dirname(URL.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// Generate sitemap first
await import('./scripts/generate-sitemap.js')

const routesToPrerender = fs
  .readdirSync(toAbsolute('src/pages'))
  .map((file) => {
    const name = file.replace(/.tsx$/, '').toLowerCase()
    return name === 'index' ? '/' : `/${name}`
  })

;(async () => {
  for (const url of routesToPrerender) {
    const appHtml = render(url);
    const html = template.replace('<!--app-html-->', appHtml)

    const filePath = `dist${url === '/' ? '/index' : url}.html`
    fs.writeFileSync(toAbsolute(filePath), html)
    console.log('pre-rendered:', filePath)
  }

  // Copy sitemap to dist directory
  fs.copyFileSync(
    toAbsolute('public/sitemap.xml'),
    toAbsolute('dist/sitemap.xml')
  )
  console.log('Copied sitemap.xml to dist directory')
})()
