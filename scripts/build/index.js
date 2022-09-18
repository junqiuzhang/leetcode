import { build } from 'esbuild';

build({
  entryPoints: [`problems/${process.argv[2]}/index.js`],
  bundle: true,
  format: 'esm',
  outfile: 'dist/index.js',
});
