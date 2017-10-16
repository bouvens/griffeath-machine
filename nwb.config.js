module.exports = {
    type: 'react-component',
    npm: {
        esModules: true,
    },
    webpack: {
        rules: {
            babel: {
                test: /\.jsx?/,
            },
        },
        extra: {
            resolve: {
                extensions: ['.js', '.jsx', '.json'],
            },
            node: {
                process: false,
            },
        },
        publicPath: '',
    },
}
