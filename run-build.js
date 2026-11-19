const path = require('path');
const cp = require('child_process');

if (process.platform === 'win32') {
  const patchPath = path.resolve(__dirname, 'patch-node.js').replace(/\\/g, '/');
  process.env.NODE_OPTIONS = "--require \"" + patchPath + "\"";
}

const nextBin = path.resolve(__dirname, 'node_modules/next/dist/bin/next');
const command = process.argv[2] || 'build';
const args = [nextBin, command];
if (process.argv[3]) {
  args.push(process.argv[3]);
}
if (process.argv[4]) {
  args.push(process.argv[4]);
}

const child = cp.spawn(process.execPath, args, {
  stdio: 'inherit',
  env: process.env,
});

child.on('exit', (code) => {
  process.exit(code || 0);
});
