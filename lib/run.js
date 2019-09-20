const which = require('which');
const { exec, findNpm } = require('./exec');

const npm = findNpm();
exec(which.sync(npm), ['run','dev'], function () {
  console.log('Dev server is starting ...');
});
