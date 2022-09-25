import { build } from 'esbuild';

build({
  entryPoints: [`problems/${process.argv[2].match(/\d+/)[0]}/index.js`],
  bundle: true,
  format: 'esm',
  outfile: 'dist/index.js',
});
