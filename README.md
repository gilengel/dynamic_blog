<div align="center">
  <h1>Personal Side</h1>

  <p>
    <strong>Vue3 project for personal websides for tech enthusiasts :)</strong>
  </p>
  

  <p>  
    <a href="https://app.codecov.io/gh/gilengel/dynamic_blog" rel="nofollow"><img src="https://img.shields.io/codecov/c/github/gilengel/dynamic_blog?style=for-the-badge" alt="coverage"></a>
    <a href="https://github.com/gilengel/dynamic_blog/blob/main/LICENSE"><img src="https://img.shields.io/github/license/gilengel/dynamic_blog?style=for-the-badge" alt="license"></a>
  </p>  
</div>

# Vision

This project will give you an interactive application for showcasing your own project(s) and offering tutorials to readers with simple commenting functions. 

It is developed with keeping the best practices in mind:
* Test driven development with the aim of 100% in statement (C0), branch (C1) coverage
* Proper linting and formatting (also covered by CI) 
* Continues Integration (Github Actions) with Continues Releases on Github
* Configuration to build a container for it (Podman, Docker) to allow easy deployment in any cloud environment


# Development
## Pushing Changes
Before pushing your code to the remote server it is good practice to check rather your changes will
pass the CI pipelines locally. You can do this by using https://github.com/nektos/act. 


This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run build
npm run test:e2e # or `npm run test:e2e:ci` for headless testing
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
