# Vueプロジェクト イチから作るぞハンズオン

## VueCLIインストール

```
$ npm i -g @vue/cli
```

## Vueプロジェクト作成

```
$ vue create vue-handson

Vue CLI v4.2.2
? Please pick a preset: Manually select features
? Check the features needed for your project: (Press <space> to select, <a> to toggle all, <i> to invert selection)Babel, TS, PWA, Router, Vuex, CSS Pre-process
ors, Linter, Unit, E2E
? Use class-style component syntax? No
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? Yes
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS (with node-sass)
? Pick a linter / formatter config: Prettier
? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)Lint on save, Lint and fix on commit
? Pick a unit testing solution: Jest
? Pick a E2E testing solution: Cypress
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? No
? Pick the package manager to use when installing dependencies: Yarn
```

## pugインストール

```
$ vue add pug
```

## Vuetifyインストール

```
$ yarn add vuetify vuetify-loader
```

## (必要なら)アイコン関係インストール

```
$ yarn add @mdi/font material-design-icons-iconfont
```

## Vuetify有効化

`plugin` ディレクトリ(なければ作る)に `vuetify.ts` を生成する

```
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css' // 必要なら
import 'material-design-icons-iconfont/dist/material-design-icons.css' // 必要なら
import ja from 'vuetify/src/locale/ja'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'md' || 'mdi' // 必要なら
  },
  theme: {
    dark: true
  },
  lang: {
    locales: { ja },
    current: 'ja'
  }
})
```

`main.ts` に import して有効化する

```
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify' // ←ここに追加

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify, // ←ここに追加
  render: h => h(App)
}).$mount('#app')
```

## ESLint設定

TSLintではなくESLintでLintをかけるようになっているので、ルールを変更したい場合は `.eslintrs.js` を編集する

Prettierの設定を追加する

```
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // ここから追加
    'prettier/prettier': [
      'error',
      {
        semi: true,
        singleQuote: true
      }
    ]
    // ここまで追加
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
```

## Lint実行

```
$ yarn lint
```

## 自動フォーマット有効化

`.vscode` ディレクトリ(なければ作る)に `settings.json` を追加する

```
{
  "eslint.validate": [
    "javascript", "typescript", "vue"
  ],
  "editor.codeActionsOnSaveTimeout": 2000,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
