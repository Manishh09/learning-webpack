# Learning Webpack

A repository dedicated to learning and exploring Webpack, a powerful static module bundler for modern JavaScript applications.

## What is Webpack?

Webpack is a module bundler that takes modules with dependencies and generates static assets representing those modules. It helps manage and organize your JavaScript code, along with other assets like CSS, images, and more.

## Prerequisites

- Node.js (v12.x or higher)
- npm (v6.x or higher)

## Installation

```bash
# Clone this repository
git clone https://github.com/yourusername/learning-webpack.git

# Navigate to the project directory
cd learning-webpack

# Install dependencies
npm install
```

## Getting Started

1. Initialize a new npm project (if not already done):

   ```bash
   npm init -y
   ```

2. Install webpack and webpack-cli:

   ```bash
   npm install webpack webpack-cli --save-dev
   ```

3. Create a basic webpack configuration file (`webpack.config.js`):

   ```javascript
   const path = require("path");

   module.exports = {
     entry: "./src/index.js",
     output: {
       filename: "bundle.js",
       path: path.resolve(__dirname, "src/index.js"),
     },
     mode: "development",
   };
   ```

4. Update package.json script object with build
   ```json
   "scripts": {
   "build": "webpack"
   },
   ```
5. run `npm run build` to see the bundle file in `dist` folder
