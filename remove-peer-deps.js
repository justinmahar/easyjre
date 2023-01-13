// [lock-all/] 🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫
// === === === === === === === === === === === === === === === === === ===
// This JS removes all peer dependencies from package.json
// === === === === === === === === === === === === === === === === === ===

// See: https://www.npmjs.com/package/replace-in-file
const replace = require('replace-in-file');

try {
  // Remove peerDependencies from package.json
  replace.sync({
    files: './package.json',
    from: /,?[\s\r\n]*"peerDependencies":\s*[{](?:.|[\r\n])*?[}]/g,
    to: '',
  });
} catch (error) {
  console.error('Error occurred:', error);
}
