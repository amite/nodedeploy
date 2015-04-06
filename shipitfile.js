module.exports = function (shipit) {
  require('shipit-deploy')(shipit);

  shipit.initConfig({
    default: {
      workspace: '/tmp/github-monitor',
      deployTo: '/tmp/deploy_to',
      repositoryUrl: 'https://github.com/amite/nodedeploy',
      ignores: ['.git', 'node_modules'],
      rsync: ['--del'],
      keepReleases: 2,
      key: '/path/to/key',
      shallowClone: true
    },
    staging: {
      servers: 'user@myserver.com'
    }
  });
};