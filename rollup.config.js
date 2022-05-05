// Contents of the file /rollup.config.js
import typescript from '@rollup/plugin-typescript';
import dts from "rollup-plugin-dts";

const config = [
  {
    input: 'dist/app.js',
    output: {
      file: 'dist/bundle.js',
      format: 'cjs',
      sourcemap: true,
    },
    external: ['axios', 'os', 'url'],
    plugins: [typescript()]
  }, {
    input: 'dist/app.d.ts',
    output: {
      file: 'dist/bundle.d.ts',
      format: 'es'
    },
    plugins: [dts()]
  }
];

export default config;