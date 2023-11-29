import resolve from '@rollup/plugin-node-resolve';
import babel from "@rollup/plugin-babel";

module.exports = {
    input: 'src/index.js',
    output: {
        file: 'dist/bundle.js',
        format: 'cjs',
    },
    plugins: [
        resolve({
            moduleDirectories: ['node_modules']
        }),
        babel({ babelHelpers: 'bundled' })
    ],
    external: ['react']
}