import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dir = path.join(__dirname, 'public/assets/garments/beetle-bomber');
const maxWidth = 2000;

fs.readdirSync(dir).forEach(file => {
  if (file.toLowerCase().endsWith('.png')) {
    const inputPath = path.join(dir, file);
    const outputPath = inputPath; // Overwrite original
    sharp(inputPath)
      .resize({ width: maxWidth, withoutEnlargement: true })
      .png({ compressionLevel: 9, adaptiveFiltering: true })
      .toFile(outputPath + '.tmp')
      .then(() => {
        fs.renameSync(outputPath + '.tmp', outputPath);
        console.log(`Compressed: ${file}`);
      })
      .catch(err => {
        console.error(`Error processing ${file}:`, err);
      });
  }
}); 