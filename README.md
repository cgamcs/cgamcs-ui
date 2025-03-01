# Biblio Components

Una biblioteca de componentes React moderna y flexible construida con TypeScript, TailwindCSS y Class Variance Authority.

## 🚀 Características

- 📱 Totalmente responsive
- 🎨 Personalizable a través de variantes
- 🔧 Tipado fuerte con TypeScript
- 🎯 Integración con TailwindCSS
- 📚 Documentación completa con Storybook
- ⚡ Optimizado para rendimiento

## 📦 Instalación

```bash
npm install cgamcs-ui
```

## 🔧 Requisitos

```json
{
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "tailwindcss": "^4.0.9"
}
```

## 🎯 Uso Rápido

```jsx
import { Stack, Text, Login } from 'cgamcs-ui';
import 'cgamcs-ui/style.css';

function App() {
  return (
    <Stack spacing={4} justify="center">
      <Text size="2xl" weight="bold">
        ¡Bienvenido!
      </Text>
      <Login 
        onSubmit={(email, password) => console.log(email, password)}
        registerLink="/registro"
      />
    </Stack>
  );
}
```

## 📚 Componentes

### Stack
Componente flexible para layouts usando Flexbox.
```jsx
<Stack spacing={4} justify="between" contentAlign="center">
  <div>Elemento 1</div>
  <div>Elemento 2</div>
</Stack>
```

### Login
Formulario de inicio de sesión moderno con animaciones.
```jsx
<Login
  onSubmit={handleLogin}
  registerLink="/registro"
  forgotPasswordLink="/recuperar"
/>
```

### Text
Componente de texto con variantes de estilo.
```jsx
<Text size="xl" weight="bold" align="center">
  Título Principal
</Text>
```

## 🛠️ Desarrollo

1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/biblio-components.git
```

2. Instalar dependencias
```bash
npm install
```

3. Iniciar Storybook
```bash
npm run storybook
```

4. Construir la biblioteca
```bash
npm run build
```

## 📖 Documentación

Para ver la documentación completa y ejemplos:

```bash
npm run storybook
```

Visita `http://localhost:6006` para ver todos los componentes y sus variantes.

## 🤝 Contribuir

1. Fork el proyecto
2. Crea tu rama de feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para detalles.

## ✨ Agradecimientos

- TailwindCSS por el sistema de utilidades
- Class Variance Authority por el manejo de variantes
- React y TypeScript por el tipado fuerte
- Storybook por la documentación interactiva

# cgamcs components

### Versions
v1.0.3  →  Export ButtonProps

v1.0.2  →  Components ButtonProps

v1.0.1  →  Components Button | Stack | Text

V0.0.1  →  