const babel = require('rollup-plugin-babel');
const path = require('path');

export default {
    input: path.resolve("./src/lib/index.js"),
    external: ['react'],
    plugins: [
        babel({
            exclude: 'node_modules/**' // 只编译我们的源代码
        })
    ],
    output: [{
        file: "dist/index.js",
        format: 'cjs',
        // 添加globals
        globals: {
            react: 'React'
        }
    }, {
        file: "es/index.js",
        format: 'es',
        // 添加globals
        globals: {
            react: 'React'
        }
    }]
}
