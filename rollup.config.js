import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import serve from 'rollup-plugin-serve';

export default{
    input:'./src/my-single-spa.js',
    output:{
        file:'./lib/umd/my-single-spa.js',
        format:'umd',
        name:'mySingleSpa',
        sourcemap:true
    },
    plugins:[
        resolve(),
        commonjs(),
        babel({exclude:'node_modules/**'}),
        process.env.SERVE ? serve({
            open:true,
            contentBase:'',
            openPage:'/toutrial/index.html',
            host:'localhost',
            port:'10001'
        }):null
        
    ]
}