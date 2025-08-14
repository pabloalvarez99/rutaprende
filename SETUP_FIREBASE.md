# 🔥 Guía de Configuración de Firebase para RutAprende

## ⚠️ Estado Actual
Tu aplicación está desplegada pero **Firebase no está configurado**. Esto significa que:
- ✅ La página principal funciona perfectamente
- ✅ La página de materiales funciona (sin login requerido)
- ❌ El sistema de autenticación no funciona

## 🚀 Pasos para Configurar Firebase

### 1. Crear Proyecto Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com)
2. Haz clic en "**Agregar proyecto**"
3. Nombre del proyecto: `rutaprende` (o el que prefieras)
4. Acepta los términos y crea el proyecto

### 2. Configurar Authentication

1. En tu proyecto Firebase, ve a "**Authentication**" en el menú lateral
2. Haz clic en "**Comenzar**"
3. Ve a la pestaña "**Sign-in method**"
4. Habilita "**Correo electrónico/contraseña**"
5. Guarda los cambios

### 3. Obtener las Credenciales

1. Ve a "**Configuración del proyecto**" (ícono de engranaje)
2. Baja hasta "**Tus aplicaciones**"
3. Haz clic en "**</>**" para crear una app web
4. Nombre de la app: `rutaprende-web`
5. **NO** marques "Firebase Hosting"
6. Copia el objeto `firebaseConfig` que aparece

Ejemplo de las credenciales que obtienes:
```javascript
const firebaseConfig = {
  apiKey: "AIzaSyC...",
  authDomain: "rutaprende-123.firebaseapp.com",
  projectId: "rutaprende-123",
  storageBucket: "rutaprende-123.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

### 4. Configurar Variables en Vercel

1. Ve a tu proyecto en [Vercel Dashboard](https://vercel.com/dashboard)
2. Selecciona tu proyecto `rutaprende`
3. Ve a "**Settings**" → "**Environment Variables**"
4. Agrega las siguientes variables una por una:

| Variable | Valor |
|----------|--------|
| `NEXT_PUBLIC_FIREBASE_API_KEY` | Tu `apiKey` |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Tu `authDomain` |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Tu `projectId` |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | Tu `storageBucket` |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Tu `messagingSenderId` |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | Tu `appId` |

### 5. Redesplegar

1. Después de agregar todas las variables, ve a "**Deployments**"
2. Haz clic en "**Redeploy**" en el último deployment
3. Espera a que termine el despliegue (2-3 minutos)

## ✅ Verificar que Funciona

Una vez completado, tu aplicación debería:

1. **Página principal** - ✅ Ya funciona
2. **Página de login** - ✅ Formulario habilitado sin mensaje de advertencia
3. **Registro de usuarios** - ✅ Crear nuevas cuentas
4. **Inicio de sesión** - ✅ Entrar con cuentas existentes
5. **Página de materiales** - ✅ Mostrar usuario logueado

## 🔧 Prueba Rápida

1. Ve a tu sitio: `https://rutaprende.vercel.app/login`
2. Si no ves el mensaje amarillo de "Configuración de Firebase pendiente", ¡está listo!
3. Crea una cuenta de prueba
4. Inicia sesión
5. Ve a materiales - deberías ver "Hola, tu@email.com"

## 🆘 Problemas Comunes

### Error: "Firebase no configurado"
- ✅ Verificar que todas las variables están en Vercel
- ✅ Redesplegar después de agregar variables
- ✅ Variables deben empezar con `NEXT_PUBLIC_`

### Error: "Project not found"
- ✅ Verificar que el `projectId` es correcto
- ✅ Verificar que el proyecto existe en Firebase Console

### Error: "Auth domain not authorized"
- ✅ Ve a Authentication → Settings → Authorized domains
- ✅ Agrega tu dominio de Vercel (ej: `rutaprende.vercel.app`)

## 📞 ¿Necesitas Ayuda?

Si tienes problemas:
1. Verifica que todas las variables están correctamente copiadas
2. Intenta redesplegar en Vercel
3. Revisa la consola del navegador para errores específicos

¡Una vez configurado, tendrás una plataforma de aprendizaje completamente funcional! 🎓 