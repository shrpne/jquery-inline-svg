
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';


export default {
    input: 'src/index.js',
    plugins: [
        babel(),
        uglify(),
    ],
    output: [
        {
            format: 'umd',
            file: 'dist/jquery-inline-svg.min.js',
        }
    ]
}
