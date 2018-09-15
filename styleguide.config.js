const path = require('path');
module.exports = {
    // set your styleguidist configuration here
    title: 'Default Style Guide',
    // defaultExample: true,
    // components: 'src/components/**/[A-Z]*.vue',
    components: 'src/components/**/*.vue',
    usageMode: 'expand',
    pagePerSection: true,
    sections: [
        {
            name: 'Introduction',
            content: 'docs/introduction.md'
        },
        {
            name: 'Documentation',
            sections: [
                {
                    name: 'Installation',
                    content: 'docs/installation.md',
                    description: 'The description for the installation section'
                },
                {
                    name: 'Configuration',
                    content: 'docs/configuration.md'
                },
                {
                    name: 'Live Demo',
                    external: true,
                    href: 'http://example.com'
                }
            ]
        },
        {
            name: 'UI Components',
            content: 'docs/ui.md',
            components: 'src/components/**/*.vue',
            sectionDepth: 0,
            sections: [
                {
                    name: 'Buttons',
                    description: 'App buttons & variants.',
                    sectionDepth: 1
                }
            ]
        }
    ]
    // webpackConfig: {
    //     template: {
    //         css: 'docs/assets/main.min.css'
    //     }
    // }
    // require: [
    // 'babel-polyfill',
    // path.join(__dirname, 'docs/assets/css/uikit.min.css'),
    // path.join(__dirname, 'docs/assets/js/uikit.min.js')
    // path.join(__dirname, 'docs/assets/js/uikit-icons.min.js')
    // ]
};
