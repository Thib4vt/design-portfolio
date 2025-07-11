import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';
import imageminMozjpeg from 'imagemin-mozjpeg';
import fs from 'fs';
import path from 'path';

async function compressImages() {
  console.log('Starting high-quality image compression for all images...');
  
  // Get all image files recursively
  const getAllFiles = (dirPath, arrayOfFiles = []) => {
    const files = fs.readdirSync(dirPath);
    
    files.forEach(file => {
      const fullPath = path.join(dirPath, file);
      if (fs.statSync(fullPath).isDirectory()) {
        arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
      } else {
        const ext = path.extname(file).toLowerCase();
        if (['.png', '.jpg', '.jpeg'].includes(ext)) {
          arrayOfFiles.push(fullPath);
        }
      }
    });
    
    return arrayOfFiles;
  };

  const imageFiles = getAllFiles('public/assets');
  console.log(`Found ${imageFiles.length} images to compress`);

  let totalOriginalSize = 0;
  let totalCompressedSize = 0;

  for (const filePath of imageFiles) {
    const originalSize = fs.statSync(filePath).size;
    totalOriginalSize += originalSize;
    
    console.log(`Compressing: ${filePath} (${(originalSize / 1024 / 1024).toFixed(2)}MB)`);
    
    try {
      const compressedFiles = await imagemin([filePath], {
        destination: path.dirname(filePath),
        plugins: [
          imageminPngquant({
            quality: [0.85, 0.95], // High quality, visually lossless
            speed: 1,
            strip: false // Keep metadata
          }),
          imageminMozjpeg({
            quality: 92, // High quality for JPEGs
            progressive: true,
            smooth: 1
          })
        ]
      });

      if (compressedFiles.length > 0) {
        const compressedSize = fs.statSync(filePath).size;
        totalCompressedSize += compressedSize;
        const savings = ((originalSize - compressedSize) / originalSize * 100).toFixed(1);
        console.log(`  ✓ Compressed: ${(compressedSize / 1024 / 1024).toFixed(2)}MB (${savings}% smaller)`);
      }
    } catch (error) {
      console.log(`  ✗ Error compressing ${filePath}:`, error.message);
    }
  }

  const totalSavings = ((totalOriginalSize - totalCompressedSize) / totalOriginalSize * 100).toFixed(1);
  console.log('\n=== Compression Summary ===');
  console.log(`Original size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Compressed size: ${(totalCompressedSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Total savings: ${totalSavings}%`);
  console.log('===========================');
}

compressImages().catch(console.error); 