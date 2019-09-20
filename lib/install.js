const which = require('which');
const { exec, findNpm } = require('./exec');

const npm = findNpm();
exec(which.sync(npm), ['install'], function () {
  console.log(npm + '安装完成');
});
