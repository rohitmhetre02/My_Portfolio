import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const root = process.cwd();
const inputDir = path.join(root, 'src/assets');
const outputDir = path.join(root, 'src/assets/optimized');

fs.mkdirSync(outputDir, { recursive: true });

const files = fs.readdirSync(inputDir)
  .filter((file) => /\.(png|jpg|jpeg|webp)$/i.test(file))
  .filter((file) => !file.includes('Rohit') && !file.includes('Resume'));

for (const file of files) {
  const input = path.join(inputDir, file);
  const output = path.join(outputDir, file.replace(/\.(png|jpe?g)$/i, '.webp'));

  try {
    const image = sharp(input);
    const metadata = await image.metadata();

    if (metadata.width && metadata.width > 2000) {
      await image
        .resize({ width: 1600, withoutEnlargement: true })
        .webp({ quality: 72, effort: 6 })
        .toFile(output);
    } else {
      await image
        .webp({ quality: 74, effort: 6 })
        .toFile(output);
    }

    console.log(`Optimized: ${file} -> ${path.basename(output)}`);
  } catch (error) {
    console.error(`Failed to optimize ${file}:`, error.message);
  }
}
