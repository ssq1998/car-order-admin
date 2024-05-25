module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true
    },
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-essential',
      'plugin:@typescript-eslint/recommended',
      'prettier'
    ],
    overrides: [],
    parser: 'vue-eslint-parser',
    parserOptions: {
      parser: '@typescript-eslint/parser',
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    plugins: ['vue', '@typescript-eslint', 'prettier'],
    rules: {
      'prettier/prettier': 'error', // 使用prettier
      semi: 0, // 语句强制分号结尾
      quotes: [2, 'single'], // 引号类型 ''
      'no-alert': 0, // 禁止使用alert
      'no-console': 2, // 禁止使用console
      'no-const-assign': 2, // 禁止修改const声明的变量
      'no-debugger': 2, // 禁止使用debugger
      'no-duplicate-case': 2, // switch中的case标签不能重复
      'no-extra-semi': 2, // 禁止多余的冒号
      'no-multi-spaces': 1, // 不能用多余的空格
      'no-unused-vars': 1 // 不能出现未使用变量
    }
  }
  