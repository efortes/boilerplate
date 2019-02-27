module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-react', 'jest'],
    plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-transform-arrow-functions',
        [
            'styled-components',
            {
                ssr: false,
                minify: true,
                displayName: true,
                pure: true,
                fileName: true,
                preprocess: false,
            },
        ],
    ],
}
