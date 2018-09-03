/**
 * @name prettierrc
 * @memberof config
 * @see https://prettier.io/docs/en/options.html
 */
module.exports = {
    printWidth: 80,
    parser: 'flow',
    singleQuote: true,
    tabWidth: 4,
    useTabs: false,
    semi: true,
    jsxBracketSameLine: true,
    bracketSpacing: true,
    trailingComma: 'none',
    arrowParens: 'always',
    overrides: [
        {
            files: '.prettierrc.js',
            options: { parser: 'flow' }
        }
    ]
};
