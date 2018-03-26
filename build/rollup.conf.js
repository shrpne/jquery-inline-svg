import babel from 'rollup-plugin-babel';


export default {
    input: 'src/index.js',
    plugins: [
        babel(),
    ],
    output: [
        {
            format: 'umd',
            file: 'dist/jquery-inline-svg.js',
        },
        {
            format: 'es',
            file: 'dist/jquery-inline-svg.esm.js',
        },
    ],
}
