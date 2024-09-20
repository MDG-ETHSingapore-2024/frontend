# Vite + React TypeScript Project with shadcn, Aceternity UI, and MagicUI

This project uses Vite with React and TypeScript, along with three UI libraries: shadcn, Aceternity UI, and MagicUI. Follow the instructions below to set up and use each library.

## General Vite + React TypeScript Commands

- Create a new Vite project with React and TypeScript:
  ```
  npm create vite@latest my-project -- --template react-ts
  ```
- Navigate to your project directory:
  ```
  cd my-project
  ```
- Install dependencies:
  ```
  npm install
  ```
- Run the development server:
  ```
  npm run dev
  ```
- Build the project:
  ```
  npm run build
  ```
- Preview the production build:
  ```
  npm run preview
  ```

## shadcn Setup and Usage

shadcn is a collection of re-usable components built using Radix UI and Tailwind CSS.

### Setup

1. Install dependencies:

   ```
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

2. Initialize shadcn in your project:
   ```
   npx shadcn-ui@latest init
   ```
3. Follow the prompts to configure your project. When asked about the framework, choose "Other".

4. Update your `vite.config.ts`:

   ```typescript
   import path from "path";
   import react from "@vitejs/plugin-react";
   import { defineConfig } from "vite";

   export default defineConfig({
     plugins: [react()],
     resolve: {
       alias: {
         "@": path.resolve(__dirname, "./src"),
       },
     },
   });
   ```

### Adding Components

To add a shadcn component:

```
npx shadcn-ui@latest add [component-name]
```

Replace `[component-name]` with the desired component, e.g., `button`, `card`, etc.

### Usage Example

```tsx
import { Button } from "@/components/ui/button";

export default function App() {
  return <Button>Click me</Button>;
}
```

## Aceternity UI

Aceternity UI is not officially supported for Vite + React TypeScript projects. However, you can still use its components by copying the code and adapting it to your project.

### Manual Component Addition

1. Visit the Aceternity UI website and find the component you want to use.
2. Copy the component code and create a new file in your project (e.g., `src/components/AceternityComponent.tsx`).
3. Adapt the component code to work with TypeScript and your project structure.

### Usage Example

```tsx
import AceternityComponent from "@/components/AceternityComponent";

export default function App() {
  return <AceternityComponent />;
}
```

## MagicUI

Similar to Aceternity UI, MagicUI doesn't have an official CLI for Vite projects. You'll need to manually add components.

### Manual Component Addition

1. Visit the MagicUI website and find the component you want to use.
2. Copy the component code and create a new file in your project (e.g., `src/components/MagicComponent.tsx`).
3. Adapt the component code to work with TypeScript and your project structure.
4. Update your `tailwind.config.js` with any required configurations for the component.

### Example

For a component like `border-beam`, you might update your `tailwind.config.js` like this:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      animation: {
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      },
      keyframes: {
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
      },
    },
  },
};
```

## Resolving Conflicts

To avoid conflicts between these libraries:

1. Use CSS modules or a CSS-in-JS solution to scope styles.
2. Prefix class names for each library.
3. Use specific imports for each library to avoid naming conflicts.
4. Create a custom theme that unifies the look across all libraries.

## Adding New Components

When adding new components from any of these libraries, make sure to:

1. Check for naming conflicts with existing components.
2. Test the new component with existing components to ensure compatibility.
3. Update your custom theme if necessary to maintain visual consistency.

Remember to consult each library's documentation for detailed usage instructions and available components. For Aceternity UI and MagicUI, you may need to adapt the examples to work with Vite + React TypeScript.
