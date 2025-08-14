# 🎓 RutAprende

**Tu plataforma de aprendizaje personalizada**

RutAprende es una aplicación web moderna construida con Next.js 15 que ofrece una experiencia de aprendizaje interactiva y personalizada. Descubre, aprende y crece con contenido educativo de calidad.

## ✨ Características

- 🔐 **Autenticación segura** con Firebase Auth
- 📚 **Materiales educativos** organizados por categorías
- 🎨 **Diseño responsive** con Tailwind CSS
- 🌙 **Modo oscuro** automático
- 🔍 **Búsqueda y filtros** avanzados
- ⚡ **Rendimiento optimizado** con Next.js 15

## 🚀 Demo

Visita la aplicación desplegada: [rutaprende.vercel.app](https://rutaprende.vercel.app)

## 🛠️ Tecnologías

- **Frontend**: Next.js 15, React 19, TypeScript
- **Estilos**: Tailwind CSS v4
- **Autenticación**: Firebase Auth
- **Base de datos**: Firebase Firestore
- **Despliegue**: Vercel

## 📦 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <tu-repositorio>
   cd rutaprende
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar Firebase**
   - Crear un proyecto en [Firebase Console](https://console.firebase.google.com)
   - Habilitar Authentication (Email/Password)
   - Crear un archivo `.env.local` basado en `.env.example`
   - Agregar las credenciales de Firebase

4. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```

## ⚙️ Configuración de Firebase

1. Crea un nuevo proyecto en Firebase Console
2. Habilita Authentication → Email/Password
3. Crea un archivo `.env.local` con tus credenciales:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=tu_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=tu_proyecto.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=tu_proyecto_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=tu_proyecto.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=tu_app_id
```

## 🌐 Despliegue

La aplicación está configurada para desplegarse fácilmente en Vercel:

1. Conecta tu repositorio a Vercel
2. Agrega las variables de entorno de Firebase
3. ¡Despliega automáticamente!

## 📱 Páginas

- **`/`** - Página de inicio con información de la plataforma
- **`/login`** - Autenticación de usuarios (login/registro)
- **`/materials`** - Catálogo de materiales educativos

## 🎯 Características del Producto

### 🏠 Página de Inicio
- Diseño atractivo y moderno
- Información clara sobre la plataforma
- Llamadas a la acción prominentes

### 🔐 Sistema de Autenticación
- Login y registro con email/password
- Manejo de errores en español
- Protección de rutas
- Estados de carga

### 📚 Materiales Educativos
- Catálogo con 6+ materiales de ejemplo
- Filtros por categoría (Programación, Matemáticas, etc.)
- Búsqueda en tiempo real
- Información detallada de cada curso

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Construcción
npm run build

# Producción
npm start

# Linting
npm run lint
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 📞 Contacto

¿Tienes preguntas o sugerencias? 

- 📧 Email: contacto@rutaprende.com
- 🐙 GitHub: [@tuusuario](https://github.com/tuusuario)

---

**¡Construido con ❤️ para la educación!**
