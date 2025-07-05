# 🔧 Configurar Network Access en MongoDB Atlas

## Problema
Render necesita conectarse a MongoDB Atlas, pero solo tienes permitida tu IP local.

## Solución

### **Paso 1: Permitir Acceso desde Cualquier Lugar**

1. **Ve a MongoDB Atlas**
2. **Ve a "Network Access"**
3. **Haz clic en "Add IP Address"**
4. **Selecciona "Allow Access from Anywhere"**
5. **Haz clic en "Confirm"**

### **Resultado Final:**
Deberías tener **DOS entradas** en Network Access:
- `181.42.190.196/32` (tu IP local)
- `0.0.0.0/0` (acceso desde cualquier lugar)

## ¿Por qué necesitamos esto?

- **Tu IP local:** Para conectar desde tu computadora (Compass, desarrollo)
- **0.0.0.0/0:** Para que Render pueda conectarse desde sus servidores

## Seguridad
En producción, es mejor usar IPs específicas, pero para desarrollo y proyectos personales, `0.0.0.0/0` está bien.

## Próximo Paso
Una vez configurado, Render podrá conectarse a tu base de datos. 