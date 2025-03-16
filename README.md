# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enabling type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## we need to install the package below to configure the Jest.
npm install --save-dev jest @types/jest
npm install --save-dev @testing-library/react
npm install --save-dev @types/testing-library__react
npm install --save-dev @testing-library/jest-dom
npm install --save-dev @testing-library/user-event
npm install --save-dev @babel/core
npm install --save-dev @babel/preset-env
npm install --save-dev @babel/preset-react
npm install --save-dev @babel/preset-typescript
npm install --save-dev babel-jest
npm install --save-dev identity-obj-proxy
npm install --save-dev jest-environment-jsdom
npm install --save-dev vite-plugin-jest
npm install --save-dev @types/react-dom
npm install --save-dev @types/react

npm i -D typescript
npm i --save-dev ts-jest
npm i --save-dev ts-node


## To run the test with cover.
npm run test:cov
npm test
npm run test

## To run the Application.
npm run start
bun run dev

## To Install the global npm.
npm install -g npm


