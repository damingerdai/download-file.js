import { uglify }  from 'rollup-plugin-uglify';

export default {
    input: 'src/index.js',
    output: {
      file: 'lib/downloadFile.min.js',
      format: 'iife',
      name: 'downloadFile',
      sourcemap: true
    },
    plugins: [
        uglify({
          sourcemap: true
        })
    ]
  };