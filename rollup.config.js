const less = require('rollup-plugin-less');
const babel = require('rollup-plugin-babel');
const path = require('path');

export default {
    input: path.resolve("./src/lib/index.js"),
    external: ['react'],
    plugins: [
        less(),
        babel({
            exclude: 'node_modules/**' // 只编译我们的源代码
        })
    ],
    output: [{
        file: "dist/index.js",
        format: 'cjs',
    }, {
        file: "es/index.js",
        format: 'es',
    }]
}
