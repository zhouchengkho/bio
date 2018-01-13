var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'bio'
    },
    port: process.env.PORT || 3000,
    db: {
      database: 'bio',
      username: 'root',
      password: '123456',
    }
  },

  test: {
    root: rootPath,
    app: {
      name: 'bio'
    },
    port: process.env.PORT || 3000,
    db: {
      database: 'bio',
      username: 'root',
      password: '123456',
    }
  },

  production: {
    root: rootPath,
    app: {
      name: 'bio'
    },
    port: process.env.PORT || 3000,
    db: {
      database: 'bio',
      username: 'root',
      password: '123456',
    }
  }
};

module.exports = config[env];
