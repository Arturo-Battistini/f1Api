# 🚀 Guía de Despliegue - F1 Fan API

## 📋 Opciones de Despliegue

### **1. Render (Recomendado para principiantes)**
- Gratis para proyectos personales
- Despliegue automático desde GitHub
- Base de datos MongoDB incluida

### **2. Railway**
- Muy fácil de usar
- Despliegue automático
- Base de datos incluida

### **3. Heroku**
- Plataforma establecida
- Requiere tarjeta de crédito para MongoDB
- Bueno para proyectos serios

### **4. DigitalOcean App Platform**
- Más control
- Precios competitivos
- Requiere más configuración

## 🎯 Despliegue en Render (Paso a Paso)

### **Paso 1: Preparar el Repositorio**

1. **Crear repositorio en GitHub:**
```bash
git init
git add .
git commit -m "Initial commit: F1 Fan API"
git branch -M main
git remote add origin https://github.com/tu-usuario/f1fan-api.git
git push -u origin main
```

2. **Crear archivo `render.yaml`:**
```yaml
services:
  - type: web
    name: f1fan-api
    env: node
    buildCommand: npm install && npm run build
    startCommand: npm run start:prod
    envVars:
      - key: NODE_ENV
        value: production
      - key: MONGODB_URI
        sync: false
```

### **Paso 2: Configurar en Render**

1. **Ir a [render.com](https://render.com)**
2. **Crear cuenta gratuita**
3. **Conectar repositorio de GitHub**
4. **Crear nuevo Web Service**
5. **Configurar variables de entorno:**
   - `NODE_ENV=production`
   - `MONGODB_URI=mongodb+srv://...` (se genera automáticamente)

### **Paso 3: Configurar Base de Datos**

1. **Crear MongoDB Database en Render**
2. **Copiar la URI de conexión**
3. **Agregar como variable de entorno en el Web Service**

### **Paso 4: Desplegar**

1. **Render detectará automáticamente el repositorio**
2. **Se construirá la aplicación**
3. **Se desplegará en una URL como: `https://f1fan-api.onrender.com`**

## 🎯 Despliegue en Railway (Alternativa)

### **Paso 1: Conectar a Railway**
1. **Ir a [railway.app](https://railway.app)**
2. **Conectar cuenta de GitHub**
3. **Seleccionar repositorio**

### **Paso 2: Configurar Base de Datos**
1. **Crear MongoDB Database**
2. **Railway conectará automáticamente la base de datos**

### **Paso 3: Desplegar**
1. **Railway detectará automáticamente que es una app Node.js**
2. **Se desplegará automáticamente**

## 🔧 Configuración de Producción

### **Variables de Entorno Necesarias:**
```env
NODE_ENV=production
MONGODB_URI=mongodb+srv://usuario:password@cluster.mongodb.net/f1fan-db
PORT=3000
```

### **Scripts de Package.json:**
```json
{
  "scripts": {
    "start:prod": "node dist/main.js",
    "build": "nest build"
  }
}
```

## 📊 Insertar Datos en Producción

### **Opción 1: Script Remoto**
1. **Conectar a la base de datos de producción**
2. **Ejecutar el script de seed:**
```bash
# Modificar la URI en scripts/seed-data.js
MONGODB_URI=mongodb+srv://...
node scripts/seed-data.js
```

### **Opción 2: MongoDB Compass**
1. **Conectar Compass a la base de datos de producción**
2. **Importar datos manualmente**

### **Opción 3: Script de Despliegue**
```bash
# Agregar al buildCommand en render.yaml
npm install && npm run build && npm run seed
```

## 🌐 Configurar CORS para Producción

### **Actualizar main.ts:**
```typescript
app.enableCors({
  origin: ['https://tu-frontend.com', 'http://localhost:3000'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
});
```

## 📈 Monitoreo y Logs

### **Render:**
- Logs automáticos en el dashboard
- Métricas de rendimiento
- Alertas de errores

### **Railway:**
- Logs en tiempo real
- Métricas de uso
- Monitoreo de salud

## 🔒 Seguridad

### **Variables de Entorno:**
- Nunca committear `.env` a Git
- Usar variables de entorno del proveedor
- Rotar credenciales regularmente

### **CORS:**
- Configurar origins específicos
- No usar `origin: true` en producción

### **Rate Limiting:**
```bash
npm install @nestjs/throttler
```

## 🚀 URLs de la API

Una vez desplegada, tu API estará disponible en:
- **Base URL:** `https://tu-app.onrender.com/api`
- **Pilotos:** `https://tu-app.onrender.com/api/pilots`
- **Equipos:** `https://tu-app.onrender.com/api/teams`
- **Circuitos:** `https://tu-app.onrender.com/api/circuits`
- **Neumáticos:** `https://tu-app.onrender.com/api/tires`

## 📝 Checklist de Despliegue

- [ ] Repositorio en GitHub
- [ ] Variables de entorno configuradas
- [ ] Base de datos MongoDB creada
- [ ] Datos insertados en producción
- [ ] CORS configurado correctamente
- [ ] API respondiendo correctamente
- [ ] Logs funcionando
- [ ] Monitoreo activo

## 🆘 Solución de Problemas

### **Error de Conexión a MongoDB:**
- Verificar URI de conexión
- Comprobar credenciales
- Verificar red y firewall

### **Error de Build:**
- Verificar dependencias en package.json
- Comprobar scripts de build
- Revisar logs de construcción

### **Error de CORS:**
- Configurar origins correctos
- Verificar headers de respuesta
- Comprobar configuración del frontend 