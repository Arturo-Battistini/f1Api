const fs = require('fs');
const path = require('path');

// Crear directorio dist/assets si no existe
const distAssetsPath = path.join(__dirname, '..', 'dist', 'assets');
if (!fs.existsSync(distAssetsPath)) {
  fs.mkdirSync(distAssetsPath, { recursive: true });
}

// Copiar archivos de assets
const assetsPath = path.join(__dirname, '..', 'assets');

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const items = fs.readdirSync(src);
  
  for (const item of items) {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    
    if (fs.statSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

try {
  copyDir(assetsPath, distAssetsPath);
  console.log('✅ Assets copiados exitosamente a dist/assets');
} catch (error) {
  console.error('❌ Error copiando assets:', error);
  process.exit(1);
} 