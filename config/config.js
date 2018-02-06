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
      options: {
        // define: {
        //   timestamps: false // db doesn't use timestamps
        // },
        // logging: function(e){
        //   return debug("info" , "SQL" , e);
        // }
      }
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
      options: {
        // define: {
        //   timestamps: false // db doesn't use timestamps
        // },
        // logging: function(e){
        //   return debug("info" , "SQL" , e);
        // }
      }
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
      options: {
        // define: {
        //   timestamps: false // db doesn't use timestamps
        // },
        // logging: function(e){
        //   return debug("info" , "SQL" , e);
        // }
      }
    }
  }
};

module.exports = config[env];
