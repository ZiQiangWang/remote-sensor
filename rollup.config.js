/*
 * @author: wangziqiang.carl@bytedance.com
 * @since: 2019-11-01 17:50:22
 */
import { uglify } from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'browser.js',
  output: {
    file: 'dist/remote-sensor.min.js',
    name: 'remoteSensor',
    format: 'umd'
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    uglify({
      output: { comments: false },
      compress: {}
    })
  ]
};
