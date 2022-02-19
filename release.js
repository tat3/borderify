const old_manifest = require('./update_manifest.json');
const fs = require('fs');

// make deep copy of object
const clone = (data) => {
  return JSON.parse(JSON.stringify(data));
}

const main = () => {
  // get tag information
  const argv = process.argv;
  if (argv.length !== 3) {
    throw Error('tag is not specified');
  }
  const tag = argv[2];

  // create new manifest object
  const manifest = clone(old_manifest)

  // append new release
  manifest.addons['{b94fcb7b-11ef-4aa0-a1fb-a12dff5745f3}'].updates.push({
    "version": tag,
    "update_link": `https://github.com/tat3/borderify/releases/download/v${tag}/my_borderify-${tag}-an+fx.xpi`
  });

  fs.writeFileSync('./update_manifest.json', JSON.stringify(manifest, null, 2));
};

main();
