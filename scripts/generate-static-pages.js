import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { DOMParser } from '@xmldom/xmldom';

// Get the directory of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Function to extract routes from sitemap.xml
function getRoutesFromSitemap() {
  try {
    const sitemapPath = path.resolve(__dirname, '../dist/sitemap.xml');
    if (!fs.existsSync(sitemapPath)) {
      console.log('Sitemap.xml not found, using hardcoded routes');
      return [
        '/',
        '/faq',
        '/chrome-dino',
        '/chromedino',
        '/dino-game',
        '/dino-run',
        '/google-dino',
        '/run-dino-run',
        '/t-rex-chrome',
        '/offline-dinosaurus',
        '/chrome-dino-game',
        '/google-game-dino',
        '/t-rex-chrome-dino-game',
        '/dino-run-game',
        '/history',
        '/privacy-policy',
        '/terms-of-service'
      ];
    }

    const sitemapXml = fs.readFileSync(sitemapPath, 'utf8');
    const parser = new DOMParser();
    const sitemap = parser.parseFromString(sitemapXml, 'text/xml');
    const urls = sitemap.getElementsByTagName('url');
    
    const routes = [];
    for (let i = 0; i < urls.length; i++) {
      const locElement = urls[i].getElementsByTagName('loc')[0];
      if (locElement && locElement.textContent) {
        const locUrl = locElement.textContent;
        // Extract path from URL
        try {
          const url = new URL(locUrl);
          routes.push(url.pathname);
        } catch (e) {
          console.error(`Error parsing URL ${locUrl}:`, e);
        }
      }
    }
    
    // Make sure all essential routes are included
    const essentialRoutes = ['/history'];
    for (const route of essentialRoutes) {
      if (!routes.includes(route) && routes.length > 0) {
        console.log(`Adding missing essential route: ${route}`);
        routes.push(route);
      }
    }
    
    return routes;
  } catch (error) {
    console.error('Error reading sitemap:', error);
    // Fallback to hardcoded routes
    return [
      '/',
      '/faq',
      '/chrome-dino',
      '/chromedino',
      '/dino-game',
      '/dino-run',
      '/google-dino',
      '/run-dino-run',
      '/t-rex-chrome',
      '/offline-dinosaurus',
      '/chrome-dino-game',
      '/google-game-dino',
      '/t-rex-chrome-dino-game',
      '/dino-run-game',
      '/history',
      '/privacy-policy'
    ];
  }
}

// Define the routes to generate (based on sitemap.xml)
const routes = getRoutesFromSitemap();

console.log('Routes to generate:', routes);

// Read the template HTML file
const templatePath = path.resolve(__dirname, '../dist/index.html');
const template = fs.readFileSync(templatePath, 'utf8');

console.log('Starting static site generation...');

// Generate HTML files for each route by copying index.html
for (const route of routes) {
  if (route === '/') {
    // Skip the root route as index.html already exists
    continue;
  }

  console.log(`Generating HTML for route: ${route}`);
  
  try {
    // Create directory if it doesn't exist
    const dirPath = path.resolve(__dirname, '../dist', route.slice(1));
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    
    // Path for the new HTML file
    const filePath = path.resolve(dirPath, 'index.html');
    
    // Copy the index.html to the route directory
    fs.writeFileSync(filePath, template);
    console.log(`Generated: ${filePath}`);
  } catch (error) {
    console.error(`Error generating HTML for route ${route}:`, error);
  }
}

console.log('Static generation complete!'); 