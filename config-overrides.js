/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

module.exports = {
  paths: function (paths, env) {
    paths.appIndexJs = path.resolve(__dirname, 'src/pages/_document.tsx')
    paths.appSrc = path.resolve(__dirname, 'src')
    paths.appTypeDeclarations = path.resolve(__dirname, 'react-app-env.d.ts')
    return paths
  }
}
