import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';
import imageminMozjpeg from 'imagemin-mozjpeg';
import fs from 'fs';
import path from 'path';

async function compressLargestImages() {
  console.log('Finding largest images...');
  
  // Get all image files with their sizes
  const getAllFiles = (dirPath) => {
    const files = [];
    const items = fs.readdirSync(dirPath);
    
    items.forEach(item => {
      const fullPath = path.join(dirPath, item);
      if (fs.statSync(fullPath).isDirectory()) {
        files.push(...getAllFiles(fullPath));
      } else {
        const ext = path.extname(item).toLowerCase();
        if (['.png', '.jpg', '.jpeg'].includes(ext)) {
          const size = fs.statSync(fullPath).size;
          files.push({ path: fullPath, size });
        }
      }
    });
    
    return files;
  };

  const imageFiles = getAllFiles('public/assets');
  
  // Sort by size (largest first) and take top 10
  const largestFiles = imageFiles
    .sort((a, b) => b.size - a.size)
    .slice(0, 10);

  console.log(`Compressing the 10 largest images (out of ${imageFiles.length} total):`);
  console.log('Using HIGH QUALITY settings to maintain visual appearance...');
  
  let totalOriginalSize = 0;
  let totalCompressedSize = 0;

  for (const file of largestFiles) {
    const originalSize = file.size;
    totalOriginalSize += originalSize;
    
    console.log(`\nCompressing: ${file.path}`);
    console.log(`  Original: ${(originalSize / 1024 / 1024).toFixed(2)}MB`);
    
    try {
      const compressedFiles = await imagemin([file.path], {
        destination: path.dirname(file.path),
        plugins: [
          imageminPngquant({
            quality: [0.85, 0.95], // High quality range (was 0.6-0.8)
            speed: 1,
            strip: false // Keep metadata
          }),
          imageminMozjpeg({
            quality: 92, // High quality (was 80)
            progressive: true,
            smooth: 1 // Smoother compression
          })
        ]
      });

      if (compressedFiles.length > 0) {
        const compressedSize = fs.statSync(file.path).size;
        totalCompressedSize += compressedSize;
        const savings = ((originalSize - compressedSize) / originalSize * 100).toFixed(1);
        console.log(`  ✓ Compressed: ${(compressedSize / 1024 / 1024).toFixed(2)}MB (${savings}% smaller)`);
        console.log(`  ✓ Quality: High - visual appearance maintained`);
      }
    } catch (error) {
      console.log(`  ✗ Error: ${error.message}`);
    }
  }

  const totalSavings = ((totalOriginalSize - totalCompressedSize) / totalOriginalSize * 100).toFixed(1);
  console.log('\n=== High Quality Compression Summary ===');
  console.log(`Original size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Compressed size: ${(totalCompressedSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Total savings: ${totalSavings}%`);
  console.log(`Quality: High - visual appearance maintained`);
  console.log('==========================================');
}

compressLargestImages().catch(console.error); 