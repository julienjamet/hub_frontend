### Welcome to the `frontend section` of the Hub !

This is a [React](https://react.dev) application built with [Vite](https://vitejs.dev) and [TypeScript](https://www.typescriptlang.org).

It uses strict linting rules to ensure a fast, modern, and maintainable development experience.

Global styles are managed with [Sass](https://sass-lang.com), and the animated background is powered by [tsParticles](https://particles.js.org).

---

### 🛠️ Install dependencies

```bash
npm i
```

---

### 📦 Scripts

| Script            | Description                                       |
|-------------------|-------------------------------------------------- |
| `npm run dev`     | Start the dev server ( `Vite` )                   |
| `npm run lint`    | Run [ESLint](https://eslint.org) on project files |
| `npm run build`   | Type-check & build for production                 |
| `npm run preview` | Preview the production build                      |

#### 🚀 Start development server

```bash
npm run dev
```

Runs the app in development mode with hot module replacement ( default port : `5173` ).

#### 🧹 Lint

```bash
npm run lint
```

Runs `ESLint`.

`ESLint` is configured in strict mode ( treating warnings as errors ) for `React` and `TypeScript`, including hooks best practices and export validation.

#### 🏗️ Build

```bash
npm run build
```

Runs `TypeScript` and `Vite` build commands to create a production build of the app placed in the `dist/` folder.

#### 👀 Preview production build

```bash
npm run preview
```

Previews the production build locally by serving the files from the `dist/` folder ( default port : `4173` ).

---

### 🔵 TypeScript

`TypeScript` is configured in strict mode, targeting modern ECMAScript.

---

### 🎨 Styles

The project uses `Sass` for styling.

Styles are written in `.scss` files and compiled into regular `CSS` during the build process.

They are located in `src/styles/index.scss`.

### ✨ Animated background

Particles background is made with `tsParticles` using a CDN.
 
Configuration is defined in `public/particles.js` and injected via `index.html`.

Particles are lightweight, animated, and configured to stay behind the app content.

---

### ⏩ Release process

The [`release.sh`](./release.sh) script automates :

- Auditing

- Linting

- Building

- Tagging the release commit