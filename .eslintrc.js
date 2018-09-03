module.exports = {
    root: true,

    parserOptions: {
        parser: 'babel-eslint'
    },

    env: {
        node: true
    },

    extends: [
        'plugin:vue/essential',
        'plugin:prettier/recommended',
        'eslint:recommended'
        // '@vue/prettier'
    ],

    rules: {
        'no-console': 'off',
        'no-debugger': 'off',
        'vue/html-indent': 'warning'
    },

    extends: ['plugin:vue/strongly-recommended']
};
