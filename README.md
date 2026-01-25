# Juan José Mogat - Sitio Web

Sitio web moderno y optimizado para el artista y docente universitario Juan José Mogat (J.J. Mogat).

## 🚀 Características

- **Moderno**: Construido con Next.js 16, React 19 y TypeScript
- **Ligero**: Optimizado para rendimiento con Tailwind CSS
- **Responsive**: Diseño adaptativo para todos los dispositivos
- **SEO Friendly**: Metadata optimizada para motores de búsqueda
- **Fácil de mantener**: Estructura modular y componentes reutilizables

## 📁 Estructura del Proyecto

```
mogat/
├── app/                    # Páginas y rutas (App Router)
│   ├── page.tsx           # Página principal (Home)
│   ├── bio/               # Página de biografía
│   ├── portfolio/         # Página de portfolio
│   ├── cv/                # Página de currículum
│   ├── layout.tsx         # Layout principal
│   └── globals.css        # Estilos globales
├── components/            # Componentes reutilizables
│   ├── Header.tsx         # Navegación principal
│   └── Footer.tsx         # Pie de página
└── public/                # Archivos estáticos
```

## 🛠️ Tecnologías

- **Next.js 16**: Framework React con App Router
- **TypeScript**: Tipado estático
- **Tailwind CSS 4**: Estilos utility-first
- **React 19**: Biblioteca UI

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start
```

## 🌐 Desarrollo

El sitio estará disponible en `http://localhost:3000`

### Páginas disponibles:

- `/` - Página principal con información general y Belkitsch
- `/bio` - Biografía y statement artístico
- `/portfolio` - Portfolio de obras
- `/cv` - Currículum vitae

## 🎨 Personalización

### Agregar contenido al Portfolio

Edita `app/portfolio/page.tsx` para agregar imágenes y descripciones de obras. Puedes:

1. Agregar imágenes en `public/portfolio/`
2. Actualizar el array de categorías con datos reales
3. Integrar con un CMS (Contentful, Sanity, etc.) para gestión de contenido

### Modificar estilos

Los estilos están en:
- `app/globals.css` - Estilos globales
- Componentes individuales usan clases de Tailwind CSS

### Agregar nuevas páginas

Crea nuevas carpetas en `app/` con un archivo `page.tsx`:

```typescript
// app/nueva-pagina/page.tsx
export default function NuevaPagina() {
  return <div>Contenido</div>;
}
```

## 🚀 Despliegue

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

### Otros proveedores

El proyecto puede desplegarse en cualquier plataforma que soporte Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📝 Mejoras Futuras

- [ ] Integración con CMS para gestión de contenido
- [ ] Galería de imágenes optimizada
- [ ] Sistema de blog
- [ ] Formulario de contacto
- [ ] Multiidioma (ES/EN/DE)
- [ ] Modo oscuro
- [ ] Animaciones y transiciones

## 📄 Licencia

© 2025 Juan Jose Mogat. All rights reserved.
