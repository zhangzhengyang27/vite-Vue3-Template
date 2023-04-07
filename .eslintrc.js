module.exports = {
    root: true,
    env: {
      node: true
    },
    extends: [
      'plugin:vue/vue3-recommended', // 使用 eslint-plugin-vue 推荐的规则
      '@vue/airbnb', // 使用 @vue/eslint-config-airbnb 的规则
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      }
  };
  