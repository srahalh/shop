module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "env": {
    "node": true,
    "commonjs": true,
    "browser": true,
    "es2021": true,
    "jest": true
  },
  "overrides": [
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "settings": {
    "react": {
      "version": 'detect'
    },
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "indent": [1,2,{SwitchCase: 1}],
  }
}
