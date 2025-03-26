import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import compression from 'compression';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Enable gzip compression
app.use(compression());

// Serve static files from the dist directory
app.use(express.static(join(__dirname, 'dist')));

// For client-side routing that matches a static file, serve the file directly
app.get('*', (req, res) => {
  const path = req.path === '/' ? '/index.html' : `${req.path}.html`;
  const filePath = join(__dirname, 'dist', path.slice(1));
  
  // Check if the file exists as HTML
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    // Otherwise, fall back to index.html for client-side routing
    res.sendFile(join(__dirname, 'dist', 'index.html'));
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 