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

### 🔄 Communication with backend

From now, you need to have a `backend` running to use the `frontend` properly.

You can easily do it using a `Docker` image by running :

```bash
docker run -d -p 8080:8080 julienjamet1992/hub_backend:v0.4.0
```

You will then need to create a `.env` file from the [.env.example](./.env.example) and set the `VITE_NODE_ENV`variable as `development`.

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

### 🐳 Docker

The project supports [Docker](https://www.docker.com) builds for production deployment.

#### 🏗️ Build the Docker image

```bash
docker build -t your-image-name .
```

Executes a multi-stage build :

- `Stage 1` : builds the app with [Node.js](https://nodejs.org)

- `Stage 2` : serves it using [NGINX](https://nginx.org)

#### 🚀 Serve with Docker

```bash
docker run -p 80:80 your-image-name
```

#### 🏷️ Docker Hub

You can find all versions of my `Docker` image on [Docker Hub](https://hub.docker.com/r/julienjamet1992/hub_frontend).

![Docker Image Version](https://img.shields.io/docker/v/julienjamet1992/hub_frontend?sort=semver)

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

- Creating and pushing ( optional ) a `Docker` image

- Tagging the release commit

---

### 🧭 Routing

Routing is handled by [React Router](https://reactrouter.com).

The following routes are available :

- `/training` : displays the `Training` page

- `/projects` : displays the `Projects` page

Any other route will redirect to the homepage ( `/` ) via `React Router`'s `Navigate` component.

The application includes a [Navbar](./src/components/hub/Navbar.tsx) component to navigate between the `Training` page and the `Projects` page.