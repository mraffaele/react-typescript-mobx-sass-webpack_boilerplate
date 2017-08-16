# React TypeScript MobX Webpack SASS Boilerplate

Simple boilerplate using [React](https://github.com/facebook/react), [MobX](https://github.com/mobxjs/mobx), [Typescript](https://github.com/Microsoft/TypeScript) & [SASS](https://github.com/sass/sass)+[PostCSS](https://github.com/postcss/postcss). Bundled with [Webpack 3](https://github.com/webpack).

### Getting Started:
* `npm install` then 
* `npm run dev`

### Overview
Very simple example React application which compiles to `/dist` directory. 

Uses MobX to create a Store on the Application State which is passed down to child components.

SASS is compiled from `/src/sass/style.scss`, then PostCSS is used for Autoprefixer. CSS is exported to a standalone file using Webpack [ExtractTextPlugin](https://github.com/webpack-contrib/extract-text-webpack-plugin).

Finally uses [HTMLWebpackPlugin](https://www.npmjs.com/package/html-webpack-plugin) to automatically insert the css/js bundles into the HTML.

### Webpack Tasks
* `npm run dev` fires off webpack-dev-server - can view  on [http://localhost:8080](http://localhost:8080)

* `npm run prod` fires off webpack production build