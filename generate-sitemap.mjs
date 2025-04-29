import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const links = [
  { url: '/', changefreq: 'monthly', priority: 1.0 },
  { url: '/#home', changefreq: 'monthly', priority: 0.8 },
  { url: '/#about', changefreq: 'monthly', priority: 0.8 },
  { url: '/#skills', changefreq: 'monthly', priority: 0.8 },
  { url: '/#projects', changefreq: 'monthly', priority: 0.8 },
  { url: '/#contact', changefreq: 'monthly', priority: 0.8 },
];

const sitemap = new SitemapStream({ hostname: 'https://anthony-claran-folio.pages.dev' });

const writeStream = createWriteStream('./public/sitemap.xml');
sitemap.pipe(writeStream);

links.forEach(link => sitemap.write(link));
sitemap.end();

streamToPromise(sitemap).then(() => {
  console.log('✅ Sitemap généré avec succès !');
});
