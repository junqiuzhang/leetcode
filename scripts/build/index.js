import { build } from 'esbuild';

build({
  entryPoints: [`problems/${process.argv[2]}/index.js`],
  bundle: true,
  outfile: 'dist/index.js',
});
