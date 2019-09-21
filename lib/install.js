const which = require('which');
const { exec, findNpm } = require('./exec');

/**
 * 执行npm install命令, 安装项目依赖.
 */
const install = () => {
  const npm = findNpm();
  exec(which.sync(npm), ['install'], function () {
    console.log(npm + '安装完成');
  });
};

module.exports = {
  install
};
